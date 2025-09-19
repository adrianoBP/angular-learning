import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { PlacesContainer } from '../places-container/places-container';
import { Place } from '../place.model';
import { Places } from '../places';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  imports: [PlacesContainer, Places],
  templateUrl: './user-places.html',
  styleUrl: './user-places.css',
})
export class UserPlaces implements OnInit {
  private destroyRef = inject(DestroyRef);
  private placesService = inject(PlacesService);
  isFetching = signal(false);
  fetchError = signal('');
  places = this.placesService.loadedUserPlaces;

  ngOnInit(): void {
    this.isFetching.set(true);
    const placesSubscription = this.placesService.loadUserPlaces().subscribe({
      complete: () => this.isFetching.set(false),
      error: (err: Error) => this.fetchError.set(err.message),
    });

    this.destroyRef.onDestroy(() => placesSubscription.unsubscribe());
  }

  onSelectPlace(place: Place) {
    this.placesService.removeUserPlace(place).subscribe({
      next: (resData) => console.log(resData),
      error: (err) => console.log(err),
    });
  }
}

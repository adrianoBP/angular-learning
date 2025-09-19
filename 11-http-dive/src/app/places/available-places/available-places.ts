import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Place } from '../place.model';
import { Places } from '../places';
import { PlacesContainer } from '../places-container/places-container';
import { PlacesService } from '../places.service';
import { ErrorService } from '../../shared/error.service';

@Component({
  selector: 'app-available-places',
  imports: [Places, PlacesContainer],
  templateUrl: './available-places.html',
  styleUrl: './available-places.css',
})
export class AvailablePaces implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private destroyRef = inject(DestroyRef);
  private placesService = inject(PlacesService);
  isFetching = signal(false);
  fetchError = signal('');

  ngOnInit(): void {
    this.isFetching.set(true);
    const placesSubscription = this.placesService.loadAvailablePlaces().subscribe({
      next: (places) => this.places.set(places),
      complete: () => this.isFetching.set(false),
      error: (err: Error) => this.fetchError.set(err.message),
    });

    this.destroyRef.onDestroy(() => placesSubscription.unsubscribe());
  }

  onSelectPlace(place: Place) {
    const addPlaceSubscription = this.placesService.addPlaceToUserPlaces(place).subscribe({
      next: (resData) => console.log(resData),
      error: (err) => console.log(err),
    });

    this.destroyRef.onDestroy(() => addPlaceSubscription.unsubscribe());
  }
}

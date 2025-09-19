import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { map, catchError, throwError, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);
  private errorService = inject(ErrorService);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Failed to fetch available places. Please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Failed to fetch user places. Please try again later.'
    ).pipe(tap((places) => this.userPlaces.set(places)));
  }

  addPlaceToUserPlaces(place: Place) {
    const previousPlaces = this.userPlaces();

    if (previousPlaces.some((p) => p.id === place.id)) {
      return throwError(() => new Error('You already added this place to your places.'));
    }

    this.userPlaces.set([...previousPlaces, place]);

    return this.httpClient.put(`http://localhost:3000/user-places`, { placeId: place.id }).pipe(
      catchError((err) => {
        this.userPlaces.set(previousPlaces);
        return throwError(() => {
          console.log(err);
          this.errorService.showError('Failed to add place. Please try again later.');
          return new Error('Failed to add place. Please try again later.');
        });
      })
    );
  }

  removeUserPlace(place: Place) {
    const previousPlaces = this.userPlaces();

    if (!previousPlaces.some((p) => p.id === place.id)) {
      return throwError(() => new Error('This place is not in your places.'));
    }

    this.userPlaces.set(previousPlaces.filter((p) => p.id !== place.id));

    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`).pipe(
      catchError((err) => {
        this.userPlaces.set(previousPlaces);
        return throwError(() => {
          console.log(err);
          this.errorService.showError('Failed to remove place. Please try again later.');
          return new Error('Failed to remove place. Please try again later.');
        });
      })
    );
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((resData) => resData.places),
      catchError((err) =>
        throwError(() => {
          console.log(err);
          return new Error(errorMessage);
        })
      )
    );
  }
}

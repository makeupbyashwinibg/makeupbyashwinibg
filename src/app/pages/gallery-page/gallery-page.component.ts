import { Component } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent {
 galleryItems$: Observable<any[]>;

  constructor(
    private firestore: Firestore
  ) {

    const galleryRef = collection(
      this.firestore,
      'gallery'
    );

    this.galleryItems$ = collectionData(
      galleryRef,
      {
        idField: 'id'
      }
    ) as Observable<any[]>;
  }
}

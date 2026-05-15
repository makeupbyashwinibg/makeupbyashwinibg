import { Component } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData
} from '@angular/fire/firestore';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent {

  galleryItems: any[] = [];

  filteredGallery: any[] = [];

  selectedCategory = 'all';

  constructor(
    private firestore: Firestore
  ) {

    const galleryRef = collection(
      this.firestore,
      'gallery'
    );

    collectionData(
      galleryRef,
      {
        idField: 'id'
      }
    ).subscribe((data: any[]) => {

      this.galleryItems = data;

      this.filterGallery('all');

    });
  }

  filterGallery(category: string) {

    this.selectedCategory = category;

    if(category === 'all') {

      this.filteredGallery = this.galleryItems;

    } else {

      this.filteredGallery = this.galleryItems.filter(
        item => item.category === category
      );

    }
  }
}
import { Component } from '@angular/core';

import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL
} from '@angular/fire/storage';

import {
  Firestore,
  collection,
  addDoc
} from '@angular/fire/firestore';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  selectedFile: any;

  uploadMessage = '';
selectedCategory = 'bridal';
  constructor(
    private storage: Storage,
    private firestore: Firestore
  ) {}

  onFileSelected(event: any) {

    this.selectedFile = event.target.files[0];
  }

  async uploadImage() {

    if(!this.selectedFile) return;

    const filePath = `gallery/${Date.now()}_${this.selectedFile.name}`;

    const storageRef = ref(this.storage, filePath);

    await uploadBytes(storageRef, this.selectedFile);

    const imageUrl = await getDownloadURL(storageRef);

    await addDoc(
      collection(this.firestore, 'gallery'),
      {
        imageUrl,
        category: this.selectedCategory,
        createdAt: new Date()
      }
    );

    this.uploadMessage = 'Image uploaded successfully!';
  }
}
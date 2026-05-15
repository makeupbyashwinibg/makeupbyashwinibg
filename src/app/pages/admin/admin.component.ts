import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  deleteDoc,
  doc
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  selectedFile: any;

  uploadMessage = '';

  selectedCategory = 'bridal';

  galleryItems$: Observable<any[]>;

  constructor(
    private http: HttpClient,
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

  onFileSelected(event: any) {

    this.selectedFile = event.target.files[0];
  }

  async uploadImage(fileInput: any) {

    if(!this.selectedFile) return;

    const formData = new FormData();

    formData.append(
      'file',
      this.selectedFile
    );

    formData.append(
      'upload_preset',
      'makeup_uploads'
    );

    this.uploadMessage = 'Uploading...';

    this.http.post(
      'https://api.cloudinary.com/v1_1/dwqreyolb/image/upload',
      formData
    ).subscribe(

      async (response: any) => {

        try {

          const imageUrl = response.secure_url;

          await addDoc(
            collection(this.firestore, 'gallery'),
            {
              imageUrl,
              category: this.selectedCategory,
              createdAt: new Date()
            }
          );

          this.uploadMessage = 'Image uploaded successfully!';

          this.selectedFile = null;
          fileInput.value = '';
          setTimeout(() => {

            this.uploadMessage = '';

          }, 3000);

        } catch(error) {

          console.log(error);

          this.uploadMessage = 'Firestore save failed';
        }

      },

      (error) => {

        console.log(error);

        this.uploadMessage = 'Upload failed';

      }
    );
  }

  async deleteImage(id: string) {

    const imageDoc = doc(
      this.firestore,
      `gallery/${id}`
    );

    await deleteDoc(imageDoc);
  }
}
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  private projectRef: AngularFirestoreCollection<Project>

  constructor(
    private db: AngularFirestore
  ) {
    this.projectRef = this.db.collection<Project>('projects')
   }

  getProjectsObservable(): Observable<Project[]> {
    console.log('check 2')
    return this.projectRef.snapshotChanges()
      .pipe(
        map((items: DocumentChangeAction<Project>[]): Project[] => {
          return items.map((item: DocumentChangeAction<Project>): Project => {
            console.log(item)
            return {
              id: item.payload.doc.id,
              name: item.payload.doc.data().name,
              url: item.payload.doc.data().url,
              images: item.payload.doc.data().images,
              description: item.payload.doc.data().description,
              stack: item.payload.doc.data().stack,
            };
          });
        })
      );
   }
}

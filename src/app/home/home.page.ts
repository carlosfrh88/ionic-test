import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonFooter, IonIcon, IonGrid, IonRow, IonCol, IonText, IonCard, AlertController } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { addCircleOutline, removeCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCol, IonRow, IonIcon, IonFooter, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonText, IonCard],
  providers: [
    AlertController
  ]
})

export class HomePage {

  public num: number;
  public MAX: number;
  public MIN: number;

  constructor(private alertController: AlertController) {
    this.MIN = 1;
    this.MAX = 100;
    this.num = 0;
    addIcons({ addCircleOutline, removeCircleOutline })

  }

down() {
    if (this.num > this.MIN) {
      this.num--;
    }
}

up() {
    if (this.num < this.MAX) {
      this.num++;
    }
}

  async reset() {

  const alert = await this.alertController.create({
    header: 'Confirmación',
    message: '¿Seguro que deseas reiniciar el número a 0?',
    buttons: [
      {
        text: 'Si',
        handler: () => {
          this.num = 0;
        }
      },
      {
        text: 'No',
        role: 'cancel',
      }
    ]
    });
    
  await alert.present();       
}

}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.page.html',
  styleUrls: ['./recupera.page.scss'],
})
export class RecuperaPage {
  email: string = '';
  confirmationMessage: boolean = false;

  constructor(private navCtrl: NavController) {}

  onSubmit() {
    this.confirmationMessage = true;
  }

  goBack() {
    // Navegar a la página anterior
    this.navCtrl.back();
  }
}

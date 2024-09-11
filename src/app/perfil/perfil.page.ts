import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  constructor(private navCtrl: NavController) {}

  logout() {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
    // Navegar a la página de inicio de sesión
    this.navCtrl.navigateRoot('/home');
  }
}


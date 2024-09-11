import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  onLogin() {
    // Verificar si el formulario es válido
    if (this.email && this.password) {
      // Navegar a la página de inicio
      this.navCtrl.navigateForward('/inicio');
    } else {
      console.log('Formulario no válido');
    }
  }

  onCreateAccount() {
    // Navegar a la página de creación de cuenta
    this.navCtrl.navigateForward('/crear');
  }

  onRecoverPassword() {
    // Navegar a la página de recuperación de contraseña
    this.navCtrl.navigateForward('/recupera');
  }
}


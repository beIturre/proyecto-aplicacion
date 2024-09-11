import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage {
  email: string = '';
  nombre: string = '';
  apellido: string = '';
  fechaNacimiento: string = '';
  ciudad: string = '';
  comuna: string = '';
  password: string = '';
  confirmPassword: string = '';
  accountCreated: boolean = false;

  constructor(private navCtrl: NavController) {}

  onCreateAccount() {
    if (this.password === this.confirmPassword) {
      // Lógica para crear la cuenta
      console.log('Cuenta creada con', this.email, this.nombre, this.apellido, this.fechaNacimiento, this.ciudad, this.comuna, this.password);
      this.accountCreated = true;
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }

  goBack() {
    // Navegar a la página anterior
    this.navCtrl.back();
  }
}

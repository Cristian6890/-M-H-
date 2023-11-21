import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent {

  fotos = [
    'assets/img/MAHUlogo.jpg',
    'assets/img/facebook.png',
    'assets/img/instagram.png',
    // Agrega más URLs de fotos según sea necesario
  ];
  constructor(private router:Router){}

  bannerhistorias(){
    this.router.navigate(['bannerhistorias']);
  }





}




import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MAHU';


  imagenes = [
    { url: 'ruta-imagen-1.jpg', descripcion: 'Descripción de la imagen 1' },
    { url: 'ruta-imagen-2.jpg', descripcion: 'Descripción de la imagen 2' },
    // Agrega más imágenes según sea necesario
  ];

  relatos = [
    { titulo: 'Historia 1', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { titulo: 'Historia 2', contenido: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    // Agrega más relatos según sea necesario
  ];



  
}

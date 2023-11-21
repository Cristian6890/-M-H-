import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  searchTerm: string = '';
  buscar() {
    // Lógica de búsqueda: Puedes implementar la lógica de búsqueda aquí
    console.log('Realizando búsqueda: ', this.searchTerm);
    // También puedes emitir un evento o realizar una acción específica al hacer clic en el botón de búsqueda.
  }

  constructor(private router: Router) {}

  irAInicio() {
    this.router.navigate(['/']); // '/' es la ruta de inicio
}


}

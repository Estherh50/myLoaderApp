import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente HomePage.
 *
 * Este componente representa la página principal de la aplicación,
 * donde se puede activar un loader.
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  isLoading = false;
  loaderConfig: 'config1' | 'config2' = 'config1';

  constructor(private router: Router) { }

   /**
   * Método para mostrar el loader.
   * Si no se ha especificado un tipo de carga válida, muestra una alerta.
   */

  showLoader() {
    if (this.loaderConfig) {
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/success']);
      }, 20000);

    }else {
      alert('Elige un tipo de carga')
    }

  }
}

import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente LoaderComponent.
 *
 * Este componente muestra una serie de imágenes con texto asociado,
 * cambiando automáticamente cada 5 segundos. El conjunto de imágenes
 * mostrado depende de la configuración (`config1` o `config2`) que se
 * puede especificar como una entrada.
 */

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() config: 'config1' | 'config2' = 'config1';
  images: { src: string, text: string }[] = [];
  currentIndex: number = 0;
  intervalId: any;

  config1 = [
    { src: 'assets/images/emoji-1.png', text: 'Cargando...' },
    { src: 'assets/images/emoji-2.png', text: 'Espere un poco más...' },
    { src: 'assets/images/emoji-3.png', text: 'Ya casi...' },
  ];

  config2 = [
    { src: 'assets/images/imagen-1.png', text: 'El comienzo de algo nuevo...' },
    { src: 'assets/images/imagen-2.png', text: 'Cada logro cuenta...' },
    { src: 'assets/images/imagen-3.png', text: 'Tienes una carrera que ganar...' },
  ];


    /**
   * Método del ciclo de vida OnInit.
   *
   * Se llama automáticamente después de que Angular ha inicializado
   * todas las propiedades del componente. Asigna el arreglo de imágenes
   * según la configuración especificada (`config1` o `config2`) y
   * comienza el intervalo para cambiar las imágenes automáticamente.
   */
  ngOnInit() {
    this.images = this.config === 'config1' ? this.config1 : this.config2;
    this.startLoader();
  }


   /**
   * Inicia el intervalo para cambiar las imágenes automáticamente cada 5 segundos.
   * El intervalo cambia el índice de la imagen actual para mostrar la siguiente imagen.
   */
  startLoader() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }


   /**
   * Método del ciclo de vida OnDestroy.
   *
   * Se llama automáticamente justo antes de que Angular destruya el componente.
   * Limpia el intervalo para evitar fugas de memoria al detener la animación.
   */
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

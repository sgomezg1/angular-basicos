import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  heroeBorrado: string = ''
  ngOnInit() {
    
  }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || ''
  }
}

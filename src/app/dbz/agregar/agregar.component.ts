import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  constructor( private dbz: DbzService ) { }

  ngOnInit(): void {
  }
  
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return
    }
    if (this.nuevo.poder == 0) {
      return
    }
    this.dbz.agregarNuevoPersonaje( this.nuevo )
    // this.onNuevoPersonaje.emit( this.nuevo )
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}

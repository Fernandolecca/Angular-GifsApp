import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild("txtBuscar")
  // non-null assertion operator
  txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  ){}

  buscar() {
    
    const value = this.txtBuscar.nativeElement.value;
    
    if(value.trim().length !== 0) {
      this.gifsService.buscarGifs(value.trim().toLowerCase());

    }

    this.txtBuscar.nativeElement.value = "";
  }

}

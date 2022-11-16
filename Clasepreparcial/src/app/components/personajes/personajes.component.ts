import { Component, OnInit } from '@angular/core';
import { Personaje, RespPersonaje } from 'src/app/classes/RespPersonaje';
import { ApiRickMortyService } from 'src/app/service/api-rick-morty.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  listaPersonajes:Personaje[];
  
  constructor(private Api:ApiRickMortyService) { }

  async ngOnInit(): Promise<void> {
    var resp = await this.Api.Personajes() as RespPersonaje;
    this.listaPersonajes=resp.results;
  }

}

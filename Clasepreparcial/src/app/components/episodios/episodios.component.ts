import { Component, OnInit } from '@angular/core';
import { Episodio,RespEpisodio } from 'src/app/classes/RespEpisodio';
import { ApiRickMortyService } from 'src/app/service/api-rick-morty.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {
  
  listaEpisodios:Episodio[];
  
  constructor(private Api:ApiRickMortyService) { }

  async ngOnInit(): Promise<void> {
    var resp = await this.Api.Episodios() as RespEpisodio;
    this.listaEpisodios=resp.results;
  }


}

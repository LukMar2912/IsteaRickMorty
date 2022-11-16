import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Episodio } from '../classes/RespEpisodio';

@Injectable({
  providedIn: 'root'
})
export class ApiRickMortyService {

  private urlEpisode="https://rickandmortyapi.com/api/episode";
  private urlPersonajes="https://rickandmortyapi.com/api/character";

  constructor(private http:HttpClient) { }

  public async Episodios(){
    var value = this.http.get(this.urlEpisode)
    return await lastValueFrom(value);
  }

  public async Personajes(){
    var value = this.http.get(this.urlPersonajes)
    return await lastValueFrom(value);
  }
}

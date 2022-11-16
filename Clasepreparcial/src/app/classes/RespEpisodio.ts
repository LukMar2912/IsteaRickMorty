export interface RespEpisodio {
  info: Info
  results: Episodio[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}

export interface Episodio {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}
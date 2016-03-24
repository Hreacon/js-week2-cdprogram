
export class Cd {
  constructor(public title:string, public artist: string, public genre: string, public price:number) {

  }
}


export interface ICd {
  name: string;
  artist: string;
  price: number;
  genre: string;
}

export class Common {
  name: string;
}

export class Resort {

    coord: Coordinate;
    name: string;

    constructor(coord: Coordinate, name: string ) {
      this.coord = coord;
     this.name = name;
     }

}

export class Coordinate {

   lat: number;
   lon: number;

   constructor(lat: number, lon: number) {
      this.lat = lat;
      this.lon = lon;
   }

}

export class Common {
  name: string;
}

export class Resort {

    name: string;
    coordinate: Coordinate;
    stateProv: string;

    constructor(coordinate: Coordinate, name: string, stateProv: string ) {
      this.coordinate = coordinate;
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

package com.henry.model;

/**
 * Created by henry.noerdlinger on 3/22/17.
 */
public class Resort {

    Geo _coordinates;
    String _name;
    String _stateProv;

    public Resort(double lat, double lon, String name, String stateProv) {
            this._coordinates = new Geo(lat, lon);
            this._name = name;
            this._stateProv = stateProv;
    }

    public Geo getCoordinates() {
        return this._coordinates;
    }


    //39.938059, -105.584732
    //584732
    //3 is meter, 7 is 10 meters (decameter), 4 is hundred meters (hectometer), 8 is kilometer
    public static class Geo {
        double _lat;
        double _lon;

        public Geo(double lat, double lon) {
            this._lat = lat;
            this._lon = lon;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Geo geo = (Geo) o;

            if (Double.compare(geo._lat, _lat) != 0) return false;
            return Double.compare(geo._lon, _lon) == 0;

        }

        @Override
        public int hashCode() {
            int result;
            long temp;
            temp = Double.doubleToLongBits(_lat);
            result = (int) (temp ^ (temp >>> 32));
            temp = Double.doubleToLongBits(_lon);
            result = 31 * result + (int) (temp ^ (temp >>> 32));
            return result;
        }
    }

}

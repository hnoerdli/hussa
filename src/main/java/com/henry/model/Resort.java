package com.henry.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by henry.noerdlinger on 3/22/17.
 */
public class Resort {

    Geo _coordinate;
    List<String> _aliases = new ArrayList<>();
    String _name;
    String _stateProv;

    public Resort(double lat, double lon, String name, String stateProv) {
            this._coordinate = new Geo(lat, lon);
            this._name = name;
            this._stateProv = stateProv;
    }

    public int distance(double x2, double y2) {
        //double distance = Math.hypot(x1-x2, y1-y2);
        Double dist = Math.sqrt(
                    Math.pow(this._coordinate.getLat() - x2, 2) +
                    Math.pow(this._coordinate.getLon() - y2, 2)
        );
        return dist.intValue();
    }

    public void addAliases(String ... aliases) {
        this._aliases.addAll(Arrays.asList(aliases));
    }
    public Geo getCoordinate() {
        return this._coordinate;
    }
    public String getName() {
        return this._name;
    }

    public String getStateProv() {
        return this._stateProv;
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

        public double getLat() {
            return _lat;
        }

        public double getLon() {
            return _lon;
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

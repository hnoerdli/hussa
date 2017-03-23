package com.henry.factory;

import com.henry.model.Resort;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by henry.noerdlinger on 3/22/17.
 */
public class ResortFactory {


    public static Map<Resort.Geo, Resort> getResorts() {

        Map<Resort.Geo, Resort> resortMap = new HashMap<>();
        Resort winterPark = new Resort(39.8855619,-105.7619686, "Winter Park", "CO");
        resortMap.put(winterPark.getCoordinates(), winterPark);

        Resort copper = new Resort(39.500009, -106.1570558, "Copper", "CO");
        resortMap.put(copper.getCoordinates(), copper);

        Resort eldora = new Resort(39.938059, -105.584732, "Eldora", "CO");
        resortMap.put(eldora.getCoordinates(), eldora);

        //loveland
        //vail
        //keystone
        //

        return resortMap;
    }


}

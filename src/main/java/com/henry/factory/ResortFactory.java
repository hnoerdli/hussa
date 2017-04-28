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
        winterPark.addAliases("Winter Park Resort","WINTER PARK RESORT");
        resortMap.put(winterPark.getCoordinates(), winterPark);

        Resort eldora = new Resort(39.938059, -105.584732, "Eldora", "CO");
        eldora.addAliases("ELDORA MOUNTAIN RESORT");
        resortMap.put(eldora.getCoordinates(), eldora);

        Resort copper = new Resort(39.500009, -106.1570558, "Copper", "CO");
        copper.addAliases("COPPER MOUNTAIN RESORT", "Copper Mountain Resort", "Copper Mountain");
        resortMap.put(copper.getCoordinates(), copper);

        //loveland
        //vail
        //keystone
        //breckenridge

        return resortMap;
    }


}

package com.henry;

import com.henry.factory.ResortFactory;
import com.henry.model.Resort;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@RestController
public class SpringBootAngular2StarterApplication {

    // Match everything without a suffix (so not a static resource)
    @RequestMapping(value = "/{[path:[^\\.]*}")
    public ModelAndView redirect() {
        // Forward to home page so that route is preserved.
        return new ModelAndView("forward:/");
    }

    @RequestMapping(value = "/get-random-number")
    public Integer getRandomNumber() {
        return (int) (Math.random() * 10);
    }

    @RequestMapping(value = "/resort-proximity", produces="application/json; charset=UTF-8")
    public List<Resort> getAllWithinProximity(@RequestParam("lat") double lat, @RequestParam("lon") double lon) {

        return new ArrayList<>();
    }

    @RequestMapping(value = "/resort", produces="application/json; charset=UTF-8")
    public List<Resort> getAll() {

        return new ArrayList(ResortFactory.getResorts().values());
    }

    public static void main(String[] args) {
		SpringApplication.run(SpringBootAngular2StarterApplication.class, args);
	}


}

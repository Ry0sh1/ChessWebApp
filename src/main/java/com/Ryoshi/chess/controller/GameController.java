package com.Ryoshi.chess.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GameController {

    @GetMapping("")
    public String getHome(){
        return "index";
    }

    @GetMapping("/game")
    public String getGame(){
        return "Game";
    }

}

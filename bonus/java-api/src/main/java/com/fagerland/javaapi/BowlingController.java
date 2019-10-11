package com.fagerland.javaapi;


import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BowlingController {

    @GetMapping("/healthy")
    public String healthy() {
        return "healthy";
    }

    @PostMapping("/api/post_score")
    public JSONObject postScore(@RequestBody List<Integer> scoreList) {
        JSONObject result = new JSONObject();
        result.put("score", Bowling.getScore(scoreList));
        return result;
    }
}

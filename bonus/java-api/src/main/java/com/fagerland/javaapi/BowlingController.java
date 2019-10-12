package com.fagerland.javaapi;


import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
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

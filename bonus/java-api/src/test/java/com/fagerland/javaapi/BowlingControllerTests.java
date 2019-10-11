package com.fagerland.javaapi;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(BowlingController.class)
public class BowlingControllerTests {

    @Autowired
    private MockMvc mvc;

    @Test
    public void testHello() throws Exception {
        mvc.perform(get("/healthy")).andExpect(status().isOk());
    }

    @Test
    public void testAllMiss() throws Exception {
        JSONObject expectedResult = new JSONObject();
        expectedResult.put("score", 0);

        JSONArray scoreList = new JSONArray();
        for(int i = 0; i < 20; i++) {
            scoreList.add(0);
        }

        mvc.perform(post("/api/post_score").contentType(MediaType.APPLICATION_JSON).content(scoreList.toJSONString()))
            .andExpect(status().isOk())
            .andExpect(content().json(expectedResult.toJSONString()));
    }

    @Test
    public void testAllOnes() throws Exception {
        JSONObject expectedResult = new JSONObject();
        expectedResult.put("score", 20);

        JSONArray scoreList = new JSONArray();
        for(int i = 0; i < 20; i++) {
            scoreList.add(1);
        }

        mvc.perform(post("/api/post_score").contentType(MediaType.APPLICATION_JSON).content(scoreList.toJSONString()))
            .andExpect(status().isOk())
            .andExpect(content().json(expectedResult.toJSONString()));
    }

    @Test
    public void testSplitOnes() throws Exception {
        JSONObject expectedResult = new JSONObject();
        expectedResult.put("score", 10+1+18);

        JSONArray scoreList = new JSONArray();
        for(int i = 0; i < 20; i++) {
            scoreList.add(1);
        }
        scoreList.add(0, 5);
        scoreList.add(1, 5);

        mvc.perform(post("/api/post_score").contentType(MediaType.APPLICATION_JSON).content(scoreList.toJSONString()))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedResult.toJSONString()));
    }

    @Test
    public void testStrikeOnes() throws Exception {
        JSONObject expectedResult = new JSONObject();
        expectedResult.put("score", 10+1+1+18);

        JSONArray scoreList = new JSONArray();
        for(int i = 0; i < 19; i++) {
            scoreList.add(1);
        }
        scoreList.add(0, 10);

        mvc.perform(post("/api/post_score").contentType(MediaType.APPLICATION_JSON).content(scoreList.toJSONString()))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedResult.toJSONString()));
    }

    @Test
    public void testAllStrikes() throws Exception {
        JSONObject expectedResult = new JSONObject();
        expectedResult.put("score", 300);

        JSONArray scoreList = new JSONArray();
        for(int i = 0; i < 12; i++) {
            scoreList.add(10);
        }

        mvc.perform(post("/api/post_score").contentType(MediaType.APPLICATION_JSON).content(scoreList.toJSONString()))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedResult.toJSONString()));
    }
}

import React from "react";
import Bowling from "./Bowling";

export default function Java() {
    return <Bowling api="http://localhost:8080/api/post_score"/>
}
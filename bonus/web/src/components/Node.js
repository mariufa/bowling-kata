import React from "react";
import Bowling from "./Bowling";

export default function Node() {
    return <Bowling api="http://localhost:3001/api/post_score"/>
}
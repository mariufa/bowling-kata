import React from "react";
import Bowling from "./Bowling";

export default function Python() {
    return <Bowling api="http://localhost:5000/api/post_score"/>
}
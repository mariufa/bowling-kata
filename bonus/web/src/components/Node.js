import React from "react";
import Bowling from "./Bowling";
import { NODE_API } from "../AppConfig";

export default function Node() {
    return <Bowling api={`${NODE_API}/api/post_score`}/>
}
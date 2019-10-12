import React from "react";
import Bowling from "./Bowling";
import { JAVA_API } from "../AppConfig";

export default function Java() {
    return <Bowling api={`${JAVA_API}/api/post_score`}/>
}
import React from "react";
import Bowling from "./Bowling";
import { PYTHON_API } from "../AppConfig";

export default function Python() {
    return <Bowling api={`${PYTHON_API}/api/post_score`}/>
}
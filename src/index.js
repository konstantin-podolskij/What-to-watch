import React from "react";
import ReactDom from "react-dom";

import App from "./components/app/App";
import {filmCards} from "./components/mock-data";

ReactDom.render(
    <App filmCards = {filmCards}/>,
    document.getElementById(`root`),
);

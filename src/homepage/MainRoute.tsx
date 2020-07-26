import React from "react";
import { Switch, Route } from "react-router-dom";
import { CharacterGrid } from "./CharacterGrid";
import { CharacterDetail } from "../character/CharacterDetail";

const MainRoute = () => (
    <main>
        <Switch>
            <Route exact path="/" component={CharacterGrid} />
            <Route exact path="/:character" component={CharacterDetail} />
            <Route path="/AboutSamSho" />
            <Route path="/About" />
        </Switch>
    </main>
);

export default MainRoute;
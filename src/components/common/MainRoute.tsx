import React from "react";
import { Switch, Route } from "react-router-dom";
import { CharacterGrid } from "../CharacterGrid";
import { CharacterDetail } from "../CharacterDetail";

const MainRoute = () => (
    <main>
        <Switch>
            <Route exact path="/" component={CharacterGrid} />
            <Route exact path="/about-game" />
            <Route exact path="/about-site" />
            <Route exact path="/:character" component={CharacterDetail} />
        </Switch>
    </main>
);

export default MainRoute;
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Films from "./pages/Films";
import FilmsDetail from "./pages/FilmsDetail";
import People from "./pages/People";
import PeopleDetail from "./pages/PeopleDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/films">
          <Films />
        </Route>
        <Route exact path="/films/:filmid">
          <FilmsDetail />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route exact path="/people/:peopleid">
          <PeopleDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

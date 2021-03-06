import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";

// Route Components
import Routes from "routes/Routes";
// Layout Components
import { Toolbar } from "components";

const history = createBrowserHistory();

const Layout = {
  Toolbar: Toolbar,
};

const App = () => (
  <>
    <CssBaseline />
    <Routes Layout={Layout} history={history} />
  </>
);

export default App;

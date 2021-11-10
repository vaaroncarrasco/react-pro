import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React logo"/>
          <ul>
            <li>
              <NavLink to="/lazy1" activeClassName="nav-active" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" activeClassName="nav-active" exact>About</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <LazyPage1 />
          </Route>
          <Route path="/users">
            <LazyPage2 />
          </Route>
          <Route path="/">
            <LazyPage3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
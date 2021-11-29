import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import {
  RegisterPage,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  FormikAbstraction
} from '../03-forms/pages';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React logo"/>
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" activeClassName="nav-active" exact>Formik Abstraction</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/formik-abstraction">
            <FormikAbstraction />
          </Route>
          <Route path="/formik-components">
            <FormikComponents />
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
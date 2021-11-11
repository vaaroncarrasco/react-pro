import { lazy, LazyExoticComponent } from "react"
import NoLazy from "../01-lazyload/pages/NoLazy";

// component: // () => JSX.Element; // type JSXComponent = () => JSX.Element;

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
  children?: Route[];
}

// ? Lazyload
// const LazyPage1 = lazy( () => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1') );

export const routes: Route[] = [
  {
    path: '/lazyload',
    component: lazy( () => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout') ),
    name: 'LazyLoadin Nested',
  },
  {
    path: '/no-lazy',
    component: NoLazy,
    name: 'No lazy loading',
  }
]
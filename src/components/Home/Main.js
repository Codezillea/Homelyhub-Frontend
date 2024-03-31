import React from 'react';
import { Outlet } from 'react-router-dom';

import {Header} from "./Header";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <>
        <Header/>
       {/*An <Outlet> should be used in parent route elements to render their child route elements.
        This allows nested UI to show up when child routes are rendered.
        If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */}
        <Outlet/>{/* Whenever you are working with nested route use "Outlet" to render the child routes */}
        <Footer/>
    </>
  )
}

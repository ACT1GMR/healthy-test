import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from './features/home/Home';
import Layout from './features/layout/Layout';
import NotFound from './features/layout/NotFound';
import Favourites from './features/favourites/Favourites';
const baseURL = document.location.host === "github.com" ? "https://act1gmr.github.io/healthy-test/" : ""
const router = createBrowserRouter(createRoutesFromElements(
    <Route path={baseURL} element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="favourites" element={<Favourites isHomePage={false}/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Route>
))

export default function App() {
  return <RouterProvider router={router}/>
}
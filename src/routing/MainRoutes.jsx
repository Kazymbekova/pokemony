import React from "react";
import { Routes, Route } from "react-router-dom";
import PokemonsListPage from "../pages/PokemonsListPage";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/pokemons",
      element: <PokemonsListPage />,
    },
  ];

  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;

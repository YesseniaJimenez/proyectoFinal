import React from "react";
import Layout from "./Routes/Layout";
import Login from "./Routes/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { routes } from "./Navigation/Routes";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import ContextLoginProvider from "./Context/LoginContext";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ContextLoginProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route element={<Layout />}>
                {routes.map(({ id, path, Component }) => {
                  return <Route key={id} path={path} element={<Component />} />;
                })}
              </Route>
            </Route>
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </ContextLoginProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

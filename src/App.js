//App.js
import { Authenticator } from "@aws-amplify/ui-react";

import { Protected } from "./component/Protected";
import { RequireAuth } from "./RequireAuth";
import { Login } from "./component/login";
import { ProtectedSecond } from "./component/ProtectSecond";
import { Home } from "./component/Home";
import { Layout } from "./component/Layout";
import { Navbar } from "./component/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function MyRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;

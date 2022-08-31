// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import { Home } from "./Home";

export function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();
  return (
    <>
      <View >
        {route === 'authenticated' ? 
      <Home /> : 'Please Login!'}
      </View>

      <Outlet />
    </>
  );
}
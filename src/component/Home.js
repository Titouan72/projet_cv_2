// components/Home.js
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Button, Heading, useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

export function Home() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const screenW = window.screen.width;
  const navigate = useNavigate();
  function logOut() {
    signOut();
    navigate("/login");
  }
  return (
    <>
        <Header />
    <div style={{background: 'white', height: '100vh'}}>

      <Button onClick={() => logOut()}>Logout</Button>
      
      <Heading level={3}>
        Please use the buttons at the top to test out protected routes!
      </Heading>
    </div>

    </>
  );
}

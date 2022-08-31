import React from "react";
import Grid from "@mui/material/Grid";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <>
      <header
        style={{
          width: "100%",
          background: "lightgrey",
          position: "absolute",
          top: "0",
          left: "0",
          height: "10%",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={1.7}><Navbar /></Grid>


          <Grid item xs={1.7}></Grid> 
          
          <Grid item xs={1.7}></Grid>
          <Grid item xs={1.7}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1280px-Facebook_New_Logo_%282015%29.svg.png"
              height="70px"
              //style={{ position: "absolute", left: "1.71.7%", top: "0" }}
            ></img>
          </Grid>
          <Grid item xs={1.7}></Grid>
          
          <Grid item xs={1.7}></Grid>
          <Grid item xs={1.7}></Grid>
        </Grid>
      </header>
    </>
  );
}

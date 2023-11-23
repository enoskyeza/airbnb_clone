import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./App.css";

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Card
            img="katie-zaferes.png"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
        />

    </>
  );
}

export default App;

/*
Contacts - prop exercise

// import Contact from "./components/Contacts";

function App() {
  return (
    <>
      <div className="contacts">
        <Contact
          img="mr-whiskerson.png"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img="fluffykins.png"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img="felix.png"
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact
          img="pumpkin.png"
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div>
    </>
  );
}
*/


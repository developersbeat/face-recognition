import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import Rank from "./Components/Rank/Rank";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import { Particles } from "react-particles-js";

const ParticlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area:300 
      }
    },
    size: {
      value: 4,
    },
  },
 
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },

};
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={ParticlesOptions} />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognation /> */}
      </div>
    );
  }
}

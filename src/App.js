import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import Rank from "./Components/Rank/Rank";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import { Particles } from "react-particles-js";
import Clarifai from "clarifai";
// import axios from "axios"
const app = new Clarifai.App({
  apiKey:'348067f3d03f408fba3df5bc04ce73d0' // enter your API key here
}) ;


const ParticlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 300,
      },
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
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    };
  }
  onInputChange = (event) => {
    this.setState({input : event.target.value});
  };
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(width,height)
    console.log(clarifaiFace)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width- (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  displayFaceBox = (box) => {
    this.setState({box: box})
    console.log(box)
  }
  onButtonSubmit = () => {
    this.setState({imageUrl : this.state.input })

    app.models.predict(Clarifai.FACE_DETECT_MODEL , this.state.input)
    .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err=> console.log(err));
      

  }
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={ParticlesOptions} />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

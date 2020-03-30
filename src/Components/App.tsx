import * as React from "react";
import "../styles.css";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Exercises />
        <Footer />
      </React.Fragment>
    );
  }
}

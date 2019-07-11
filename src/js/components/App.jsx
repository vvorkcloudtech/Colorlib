import React, { Component } from "react";
import Nav from "./Nav";
import data from "./Data";
import Header from "./Header";
import Gallery from "./Gallery";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

class App extends Component {
  state={
    data: data,
  }
  render() {
    return(
      <div>
        <Nav data={this.state.data}/>
        <Header data={this.state.data}/>
        <Gallery data={this.state.data}/>
        <Newsletter data={this.state.data}/>
        <Footer data={this.state.data}/>

      </div>
    )
  }
}
export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
//import AllTheBooks from "./components/AllTheBooks.jsx";
import { Component } from "react";
import BookList from "./components/BookList.jsx";

class App extends Component {
  state = {
    categoria: "fantasy",
  };
  
  // funzione che modifica lo state categoria grazie al eventKey
  selectCategory = eventKey => {
   this.setState({ categoria: eventKey })
   };
  render() {
    return (
      <>
        <MyNav claim="Bellissima" setCategory={this.selectCategory} />

        <Welcome sottotitolo="Sito Bello" />
        <BookList category={this.state.categoria}/>

        {/* <AllTheBooks category={this.state.categoria}/> */}
        <MyFooter />
      </>
    );
  }
}

export default App;

import React, { Component } from "react";

import Search from "./components/Search";
import MovieList from "./components/MovieList";
import NominationList from "./components/NominationList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: "",
      nominations: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNomination = this.handleNomination.bind(this);
  }

  componentDidMount() {
    const nominations = localStorage.getItem("nominations")
      ? JSON.parse(localStorage.getItem("nominations"))
      : [];
    this.setState({ nominations: nominations });
  }

  handleSearch = (results) => {
    this.setState({
      results: results,
    });
  };

  handleInputChange = (event, callback) => {
    this.setState({
      query: event.target.value,
    });
    if (this.state.query !== "") {
      callback(this.state.query, this.handleSearch);
    }
  };

  handleNomination = (e, movie, action) => {
    let nominations = [...this.state.nominations];
    if (action === "add" && this.state.nominations.length < 5) {
      nominations.push(movie);
    }
    if (action === "remove") {
      nominations = nominations.filter((nom) => nom.id !== movie.id);
    }
    this.setState(
      () => ({
        nominations: nominations,
      }),
      () => {
        localStorage.setItem(
          "nominations",
          JSON.stringify(this.state.nominations)
        );
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="">
          <h1>The Shoppies</h1>
          <Search
            handleSearch={this.handleSearch}
            handleInputChange={this.handleInputChange}
            query={this.state.query}
          />
        </header>
        <div className="container">
          <section className="list-container">
            {this.state.query.length > 0 ? (
              <MovieList
                query={this.state.query}
                results={this.state.results}
                handleNomination={this.handleNomination}
                nominations={this.state.nominations}
              />
            ) : (
              <p className="m-0">Results will show here</p>
            )}
          </section>
          <section className="list-container">
            {this.state.nominations.length > 0 ? (
              <NominationList
                nominations={this.state.nominations}
                handleNomination={this.handleNomination}
              />
            ) : (
              <p className="m-0">No nominations yet</p>
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import SingleBook from "./SingleBook";
import booksData from "../data/fantasy.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import history from "../data/history.json";
import scifi from "../data/scifi.json";
import romance from "../data/romance.json";

class BookList extends Component {
  state = {
    searchTerm: "",
    horror: [...horror],
    history: [...history],
    scifi: [...scifi],
    fantasy: [...fantasy],
    romance: [...romance],
  };
  render() {
    //const { books } = this.props;
    const { searchTerm } = this.state;

    const filteredBooks = this.state[this.props.category].filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div>
        <Container>
          <InputGroup className="mb-3">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
          </InputGroup>
          <Row>
            {filteredBooks.map((book, index) => (
              <Col>
                <SingleBook key={index} book={book} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookList;

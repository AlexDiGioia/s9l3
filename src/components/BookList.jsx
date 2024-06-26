import React, { Component } from "react";
import SingleBook from "./SingleBook";
import booksData from "../data/fantasy.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

class BookList extends Component {
  state = {
    searchTerm: "",
  };
  render() {
    //const { books } = this.props;
    const { searchTerm } = this.state;

    const filteredBooks = booksData.filter((book) =>
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

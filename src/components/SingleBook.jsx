import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ width: "18rem", border: selected ? "2px solid red" : "none" }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Button variant="primary">{book.price}€</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

import { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import BooksData from "../data/fantasy.json";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import history from "../data/history.json";
import scifi from "../data/scifi.json";
import romance from "../data/romance.json";

class AllTheBooks extends Component {
  state = {
    horror: [...horror],
    history: [...history],
    scifi: [...scifi],
    fantasy: [...fantasy],
    romance: [...romance],
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            {this.state[`${this.props.category}`].map((book) => {
              return (
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Button variant="primary">{book.price}€</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;

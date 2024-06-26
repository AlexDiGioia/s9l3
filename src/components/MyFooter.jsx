import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MyFooter = (props) => (
  <Card className="fixed-bottom">
    <Card.Header className="text-center">My Footer Bello</Card.Header>
    <Card.Body>
      <Card.Title className="text-center">Titolo Bello</Card.Title>
      <Card.Text className="text-center">Testo Bello</Card.Text>
      <div className="d-flex justify-content-center">
        <Button variant="primary">Bottone Bello</Button>
      </div>
    </Card.Body>
  </Card>
);

export default MyFooter;


import { Card, Button } from "react-bootstrap";
import mac1 from "../assets/apple-macbook-air-mree2sa-a-i5-8gb-128gb-133-gold-7-2-600x600.jpg";
import mac2 from "../assets/images.jpg";

export default function Bai3() {
  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={mac1} />
        <Card.Body>
          <Card.Title>MacBook Air 2018</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a vitae natus, iure unde consectetur dolor distinctio.
          </Card.Text>
          <Button variant="primary">Xem chi tiết</Button>
          <span style={{ marginLeft: 20 }}>30.000.000 đ</span>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={mac2} />
        <Card.Body>
          <Card.Title>MacBook Pro 2019</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a vitae natus, iure unde consectetur dolor distinctio.
          </Card.Text>
          <Button variant="primary">Xem chi tiết</Button>
          <span style={{ marginLeft: 20 }}>30.000.000 đ</span>
        </Card.Body>
      </Card>
    </div>
  );
}
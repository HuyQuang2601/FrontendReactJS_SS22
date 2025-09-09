import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Bai8() {
  return (
    <div
      style={{
        padding: 20,
        width: 500,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Form>
        <div style={{ display: "flex", gap: 20 }}>
          <Form.Group style={{ flex: 1 }} className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control size="sm" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group style={{ flex: 1 }} className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control size="sm" type="password" placeholder="Password" />
          </Form.Group>
        </div>
        <Form.Group style={{ flex: 1 }} className="mb-3">
          <Form.Label>Ho va Ten</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Vi du: Nguyen Van A"
          />
        </Form.Group>
        <Form.Group style={{ flex: 1 }} className="mb-3">
          <Form.Label>Dia chi</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Vi du: Thanh Xuan, Ha Noi"
          />
        </Form.Group>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Form.Label>Thanh pho</Form.Label>
          <Form.Label>Quan</Form.Label>
          <Form.Label>Ma buu dien</Form.Label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: 5,
            height: 31,
            paddingBottom: 10,
          }}
        >
          <FormGroup style={{ flex: 1 }} className="mb-3">
            <Form.Select
              style={{ width: 150 }}
              aria-label="Default select example"
            >
              <option>Ha Noi</option>

              <option value="2">Nghe An</option>
              <option value="3">HCM</option>
            </Form.Select>
          </FormGroup>

          <FormGroup style={{ flex: 1 }} className="mb-3">
            <Form.Select
              style={{ width: 150 }}
              aria-label="Default select example"
            >
              <option value="1">Thanh Xuan</option>
              <option value="2">Hoai Duc</option>
              <option value="3">Ba Dinh</option>
            </Form.Select>
          </FormGroup>

          <FormGroup style={{ flex: 1 }} className="mb-3">
            <Form.Control
              style={{ width: 150, height: 37 }}
              size="sm"
              type="text"
            />
          </FormGroup>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <Button style={{ width: 300 }} variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

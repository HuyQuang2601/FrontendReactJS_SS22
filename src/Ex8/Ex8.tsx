import Toast from "react-bootstrap/Toast";
export default function Bai7() {
  return (
    <div>
      <Toast className="d-inline-block m-1" bg="light">
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Canh bao</strong>
        </Toast.Header>
        <Toast.Body>Loi ket noi may chu</Toast.Body>
      </Toast>
    </div>
  );
}
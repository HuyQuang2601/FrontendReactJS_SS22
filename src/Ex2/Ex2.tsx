import "react-bootstrap";
export default function Bai2() {
  return (
    <div>
      <div className="input-group input-group-sm mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Input co be"
        />
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Input co trung"
        />
      </div>

      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Input co lon"
        />
      </div>
    </div>
  );
}

import Dropdown  from 'react-bootstrap/Dropdown';

export default function Bai4() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Nguyen Van Nam
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cai dat</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Doi mat khau</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Dang xuat</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
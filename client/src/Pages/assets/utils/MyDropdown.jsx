import { useState } from "react";
import { Dropdown } from "react-bootstrap";

function MyDropdown(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (event) => {
    const option = event.target.textContent;
    setSelectedOption(option);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-light dropdown-toggle"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        type="button"
        fdprocessedid="m6i41"
      >
        {props.defaultText}
      </button>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {selectedOption || props.defaultText}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {props.options.map((option) => (
            <Dropdown.Item key={option} onClick={handleOptionClick}>
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default MyDropdown;

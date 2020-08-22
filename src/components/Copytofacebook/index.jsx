import React, { useRef } from "react";
import { Button, Container, FormGroup, FormControl } from "react-bootstrap";

const Copytofacebook = (props) => {
  const contentRef = useRef();

  const copyToClicpboard = (e) => {
    contentRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    alert("Copy thành công");
  };

  return (
    <Container>
      <div className="mt-5 mb-5">
        <h3 className="text-center">Nội dung đã duyệt</h3>
      </div>

      <FormGroup>
        <FormControl
          ref={contentRef}
          as="textarea"
          value={props.location.state.content}
          onChange={() => {}}
          rows={5}
        ></FormControl>
      </FormGroup>

      <div className="text-center">
        <Button onClick={copyToClicpboard}>Copy</Button>
      </div>
    </Container>
  );
};

export default Copytofacebook;

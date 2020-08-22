import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authentication/authenticationActions";
import { useHistory } from "react-router-dom";
import {
  Spinner,
  Container,
  FormGroup,
  FormControl,
  FormText,
} from "react-bootstrap";

const Authentication = () => {
  const [contentState, setContentState] = useState("");
  const [loadingState, setLoadingSate] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const authenticate = () => {
    setLoadingSate(true);
    dispatch(login(contentState, history));
  };

  return (
    <main id="mainContent">
      <Container>
        <div className="text-center mt-5 p-0">
          <h3>Chứng thực</h3>
          <FormGroup className="mt-3">
            <FormControl
              as="input"
              className="bottom-border-only"
              id="content"
              rows="5"
              onChange={(e) => setContentState(e.target.value)}
              placeholder="Nhập nôi dung ở đây..."
            ></FormControl>
            <FormText id="contentHelpBlock" className="text-muted">
              Viết gì đó để chứng minh rằng bạn là quản trị viên. Nếu đúng bạn
              có thể vào trang quản lý bài viết.
            </FormText>
          </FormGroup>
          <button className="btn btn-dark" onClick={authenticate}>
            {loadingState ? <Spinner animation="border"></Spinner> : "Xác nhận"}
          </button>
        </div>
      </Container>
    </main>
  );
};
export default Authentication;

import React, { useState, useRef } from "react";
import {
  Spinner,
  Container,
  FormGroup,
  FormControl,
  FormText,
  Button,
} from "react-bootstrap";
import Axios from "axios";

const Home = () => {
  const [contentState, setContentState] = useState();
  const [loadingState, setLoadingSate] = useState(false);
  const contentRef = useRef();

  const sendConfession = () => {
    setLoadingSate(true);
    Axios.post("/api/confession", {
      content: contentState,
    }).then((result) => {
      if (result.data.success) {
        setLoadingSate(false);
        alert(
          "Bài viết của bạn có số thứ tự là " +
            result.data.message._id +
            ". Chờ ban quản trị duyệt nhé!"
        );

        setContentState("");
        contentRef.current.value = "";
      }
    });
  };

  return (
    <main id="mainContent">
      <Container>
        <div className="mt-5">
          <h3 className="mb-3 text-center">Gửi confession</h3>

          <FormGroup>
            <FormControl
              ref={contentRef}
              as="textarea"
              className="bottom-border-only"
              placeholder="Nhập nội dung bài viết tại đây..."
              defaultValue=""
              rows="5"
              onChange={(e) => setContentState(e.target.value)}
            ></FormControl>

            <FormText
              id="contentHelpBlock"
              className="form-text text-muted text-justify"
            >
              <b>Lưu ý:</b> sử dụng ngôn ngữ phù hợp, hạn chế nhắc tên cụ thể
              một bạn nào đó để tránh gây phiền phức. Quan trọng nhất, viết tắt
              thì một số quản trị viên sẽ xóa bài.
            </FormText>
          </FormGroup>

          <div className="text-center">
            <Button
              variant="dark"
              disabled={loadingState}
              onClick={sendConfession}
            >
              {loadingState ? (
                <Spinner animation="border"></Spinner>
              ) : (
                "Gửi bài viết"
              )}
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default Home;

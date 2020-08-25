import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import {
  Spinner,
  Row,
  Col,
  Table,
  Container,
  Button,
  ButtonGroup,
  Modal,
} from "react-bootstrap";

const Manager = () => {
  const [contentState, setContentState] = useState();
  const [checkedState, setCheckedState] = useState();
  const [loadingState, setLoadingSate] = useState("");
  const [showModalSate, setShowModalSate] = useState({
    isShow: false,
    action: "",
  });

  const history = useHistory();

  const jwt = useSelector((state) => state.token);

  const renderConfessionSkeleton = () => {
    var skeletons = [];
    for (let i = 0; i < 5; i++) {
      skeletons.push(
        <tr key={i}>
          <td>
            <Skeleton height={16} width={16}></Skeleton>
          </td>
          <td>
            <Skeleton count={3} width="75vw"></Skeleton>
          </td>
        </tr>
      );
    }

    return skeletons;
  };

  const fetchConfession = () => {
    if (jwt) Axios.defaults.headers.common["Authorization"] = jwt;
    Axios.get("/api/confession").then((result) => {
      if (result.data.success) {
        setContentState(result.data.message);
        setCheckedState([]);
      }
    });
  };

  const selectChangeHandle = (e) => {
    const isChecked = e.target.checked;
    const id = parseInt(e.target.value);
    setCheckedState((prevSate) => {
      if (isChecked) return prevSate.filter((f) => f !== id).concat([id]);
      else return prevSate.filter((f) => f !== id);
    });
  };

  const acceptConfession = () => {
    setLoadingSate("accept");
    if (jwt) Axios.defaults.headers.common["Authorization"] = jwt;

    Axios.delete("/api/confession", { data: { id: checkedState } }).then(
      (result) => {
        if (result.data.success) {
          setLoadingSate("");
          const acceptedConfession = contentState.filter((f) =>
            checkedState.includes(f._id)
          );

          const contentList = acceptedConfession.map(
            (p) =>
              "#" +
              p._id +
              "\r\n" +
              new Date(p.createdAt).toLocaleString("vi-VN") +
              "\r\n" +
              p.content +
              "\r\n------"
          );

          history.push({
            pathname: "/Copytofacebook",
            state: { content: contentList.join("\r\n") },
          });
        }
      }
    );
  };

  const deleteConfession = () => {
    setLoadingSate("delete");
    if (jwt) Axios.defaults.headers.common["Authorization"] = jwt;
    Axios.delete("/api/confession", { data: { id: checkedState } }).then(
      (result) => {
        if (result.data.success) {
          fetchConfession();
          setLoadingSate("");
        }
      }
    );
  };

  const modalConfirm = () => {
    setShowModalSate(false);
    if (showModalSate.action === "accept") {
      acceptConfession();
    } else {
      deleteConfession();
    }
  };

  useEffect(() => {
    fetchConfession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="mt-5">
        <h3 className="text-center">Quản lý</h3>

        <div className="information mb-4 mt-4">
          <Row>
            <Col sm={4}>
              {contentState ? (
                <div className="panel panel-danger text-danger">
                  <small>Chưa duyệt</small>
                  <h4>{contentState ? contentState.length : "..."}</h4>
                </div>
              ) : (
                <Skeleton height={70}></Skeleton>
              )}
            </Col>

            <Col sm={4}>
              {checkedState ? (
                <div className="panel panel-success text-success">
                  <small>Đã chọn</small>
                  <h4> {checkedState.length} </h4>
                </div>
              ) : (
                <Skeleton height={70}></Skeleton>
              )}
            </Col>

            <Col sm={4}>
              {checkedState && contentState ? (
                <div className="panel">
                  <small>Còn lại</small>
                  <h4>{contentState.length - checkedState.length}</h4>
                </div>
              ) : (
                <Skeleton height={70}></Skeleton>
              )}
            </Col>
          </Row>
        </div>

        <Table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nội dung</th>
            </tr>
          </thead>
          <tbody>
            {contentState
              ? contentState.map((confession) => (
                  <tr key={confession._id}>
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          value={confession._id}
                          id={"customCheck" + confession._id}
                          onChange={selectChangeHandle}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={"customCheck" + confession._id}
                        ></label>
                      </div>
                    </td>
                    <td>
                      {"#" + confession._id} <br />
                      {new Date(confession.createdAt).toLocaleString("vi-VN")}
                      <br />
                      {confession.content}
                    </td>
                  </tr>
                ))
              : renderConfessionSkeleton()}
          </tbody>
        </Table>

        <Modal
          show={showModalSate.isShow}
          onHide={() => setShowModalSate({ isShow: false, action: "" })}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Bạn đang thực hiện{" "}
              {showModalSate.action === "accept" ? "duyệt" : "xóa"} confession
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lưu ý, hành động không thể hoàn tác, chuối cũng không cứu được đâu
            :))
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowModalSate({ isShow: false, action: "" })}
            >
              Dừng lại
            </Button>
            <Button variant="primary" onClick={modalConfirm}>
              Tiếp tục
            </Button>
          </Modal.Footer>
        </Modal>

        <ButtonGroup className="btn-manager-tools" role="group">
          <Button
            disabled={checkedState ? checkedState.length === 0 : false}
            onClick={() => setShowModalSate({ isShow: true, action: "accept" })}
          >
            {loadingState === "accept" ? (
              <Spinner animation="border"></Spinner>
            ) : (
              "Duyệt"
            )}
          </Button>
          <Button
            disabled={checkedState ? checkedState.length === 0 : false}
            variant="danger"
            onClick={() => setShowModalSate({ isShow: true, action: "delete" })}
          >
            {loadingState === "delete" ? (
              <Spinner animation="border"></Spinner>
            ) : (
              "Xóa"
            )}
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};

export default Manager;

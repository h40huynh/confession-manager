import React, { useState } from "react";

const Authentication = () => {
  const [contentState, setContentState] = useState("");

  const onchangeContent = (e) => {
    setContentState(e.target.value);
  };

  const authenticate = (e) => {
    alert(contentState);
  };

  return (
    <main id="mainContent">
      <div className="container">
        <div className="text-center mt-5 p-0">
          <h3>Chứng thực</h3>
          <div className="form-group mt-3">
            <input
              className="form-control bottom-border-only"
              id="content"
              rows="5"
              onChange={onchangeContent}
              placeholder="Nhập nôi dung ở đây..."
            ></input>
            <small id="contentHelpBlock" className="form-text text-muted">
              Viết gì đó để chứng minh rằng bạn là quản trị viên. Nếu đúng bạn
              có thể vào trang quản lý bài viết.
            </small>
          </div>

          <button className="btn btn-dark" onClick={authenticate}>
            Xác nhận
          </button>
        </div>
      </div>
    </main>
  );
};
export default Authentication;

import React, { useState, useEffect } from "react";

const Home = () => {
  const [categoryState, setCategoryState] = useState([]);
  const [contentState, setContentState] = useState("");

  useEffect(() => {
    setCategoryState(["Học tập", "K10", "K11", "K12", "Không biết"]);
  }, []);

  const onchangeContent = (e) => {
    setContentState(e.target.value);
  };

  const sendConfession = () => {
    alert(contentState);
  };

  return (
    <main id="mainContent">
      <div className="container">
        <div className="mt-5">
          <h3 className="mb-3 text-center">Gửi confession</h3>

          <div className="form-group">
            <select
              className="form-control custom-select bottom-border-only"
              defaultValue={-1}
              id="type"
            >
              <option value={-1} disabled>
                Chọn thể loại
              </option>
              {categoryState.map((category, index) => (
                <option key={index} value={index}>
                  {category}
                </option>
              ))}
            </select>

            <small
              id="typeHelpBlock"
              className="form-text text-muted text-justify"
            >
              Hãy chọn thể loại mà bạn nghĩ bài viết của bạn thuộc về.
            </small>
          </div>

          <div className="form-group">
            <textarea
              className="form-control bottom-border-only"
              id="content"
              rows="5"
              onChange={onchangeContent}
              placeholder="Nhập nội dung bài viết tại đây..."
            ></textarea>
            <small
              id="contentHelpBlock"
              className="form-text text-muted text-justify"
            >
              <b>Lưu ý:</b> sử dụng ngôn ngữ phù hợp, hạn chế nhắc tên cụ thể
              một bạn nào đó để tránh gây phiền phức. Quan trọng nhất, viết tắt
              thì một số quản trị viên sẽ xóa bài.
            </small>
          </div>

          <div className="text-center">
            <button className="btn btn-dark" onClick={sendConfession}>
              Gửi bài viết
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;

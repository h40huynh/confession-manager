import React, { useState, useEffect } from "react";

const Manager = () => {
  const [contentState, setContentState] = useState([]);

  useEffect(() => {
    setContentState([
      {
        id: "6789",
        content:
          "Dạ cho em xin một chút review sương sương về trường Nguyễn Việt Dũng ạ :vvvv",
      },
      {
        id: "67894",
        content:
          "Chào ad Mấy em ơi, chị mới thi xong và còn dư tài liệu các môn, e nào muốn lấy thì để lại. Chị sẽ ib cho mấy bạn nha",
      },
      {
        id: "67895",
        content:
          "Chào ad và các bạn NVD ! Hiện tại đang có cuộc thi bình chọn thư viện trên cả nước, trong 200 trường thì Đại học Cần Thơ(CTU) đã có mặt tại bán kết 😎 Chỉ còn vài tiếng nữa thôi trận bán kết sẽ kết thúc và CTU đang có nguy cơ bị đối thủ lội ngược dòng, các bạn yêu thích CTU thì hãy dành 30s vote cho CTU nha 😗 Rất hân hạnh chào đón các bạn đến với CTU và là thành viên của CTU trong tương lai ❤ Link vote đây các bạn ơi, đăng nhập bằng facebook mới được tính nha các bạn: https://topsinhvien.com/camapaign/match/5f325520e8e7c305170a89a7?zdlink=Uo9XRcHoRsba8ZeYOszjBdHlS7DfRcXsQMLk8YmYQMzp8Zfx8dDZQ6LjPLzrScmYEY9wOMnlBJ4oCpGrEbmlN2yYB29XS71fP28w8Z4oCpGr8drz&fbclid=IwAR1ft4LRo2b4I",
      },
      {
        id: "67896",
        content:
          "Chào ad và mọi người. Chị vừa thi xong nên muốn tặng lại cho các em khoá sau một ít tài liệu về các môn khoa học xã hội và khoa học tự nhiên. Em nào cần thì để lại bình luận chị sẽ tự động inbox cho các em.",
      },
      {
        id: "67812",
        content:
          "Chào ad và mọi người. Chị vừa thi xong nên muốn tặng lại cho các em khoá sau một ít tài liệu về các môn khoa học xã hội và khoa học tự nhiên. Em nào cần thì để lại bình luận chị sẽ tự động inbox cho các em.",
      },
    ]);
  }, []);

  return (
    <div className="container">
      <div className="mt-5">
        <h3 className="text-center">Quản lý</h3>

        <div className="information mb-4 mt-4">
          <div className="row">
            <div className="col-sm-4">
              <div className="panel panel-danger text-danger">
                <small>Chưa duyệt</small>
                <h4>10</h4>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel panel-success text-success">
                <small>Đã chọn</small>
                <h4>7</h4>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel">
                <small>Còn lại</small>
                <h4>3</h4>
              </div>
            </div>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="checkAll"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="checkAll"
                  ></label>
                </div>
              </th>
              <th scope="col">Nội dung</th>
            </tr>
          </thead>
          <tbody>
            {contentState.map((confession) => (
              <tr key={confession.id}>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={"customCheck" + confession.id}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={"customCheck" + confession.id}
                    ></label>
                  </div>
                </td>
                <td>{confession.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn-group btn-manager-tools" role="group">
          <button type="button" className="btn btn-primary">
            Duyệt
          </button>
          <button type="button" className="btn btn-danger">
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manager;

import { useEffect, useState } from "react";
import VisitComponent from "./VisitComponent";
import "./VisitPage.css";
import { ReactComponent as MyIcon } from "../../assets/user-circle.svg";

export default function VisitPage({ name, id }) {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  const [board, setBoard] = useState([]);
  const [newBoard, setNewBoard] = useState({
    createdBy: "Guest",
    contents: "",
    writtenDate: "2023-11-17",
  });
  const { createdBy, contents } = newBoard;

  const onChange = (event) => {
    const { value, name } = event.target;
    setNewBoard({
      ...newBoard,
      [name]: value,
    });
  };


  const handleAddButton = (e) => {
    e.preventDefault();
    if (newBoard.contents === "") {
      alert("내용을 입력해주세요!");
    } else {
      newBoard.writtenDate = formattedDate;
      setBoard([...board, newBoard]);
      setNewBoard({ createdBy: "Guest", contents: "", writtenDate: "" });
    }
  };

  const handleDelete = (index) => {
    const updateBoard = [...board];
    updateBoard.splice(index, 1);
    setBoard(updateBoard);
  };

  return (
    <div className="container-name">
      <h3 className="title-h3">{name}님을 방문한 사람들</h3>
      <form className="form-container">
        <div className="form-wrapper">
          <div className="writer-span">
            <MyIcon className="my-icon" />
          </div>
          <br />
          <div className="contents-container">
            <textarea
              className="visit-input text-area"
              name="contents"
              cols="70"
              rows="9"
              placeholder="방명록 작성란..."
              value={contents}
              onChange={onChange}
            />
          </div>
          <button className="save-button" onClick={handleAddButton}>
            방명록 작성
          </button>
        </div>
      </form>
      <div className="visitcomponent-container">
        {board.map((content, index) => (
          <VisitComponent
            key={index}
            name={content.createdBy}
            date={content.writtenDate}
            contents={content.contents}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

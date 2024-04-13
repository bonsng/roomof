import { useState } from "react";
import "./EnterRoom.css";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";
import RoomThumbnail from "../../components/RoomComponents/RoomThumbnail";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EnterRoom() {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("구본승");
  const [searchRoomIds, setSearchRoomIds] = useState([1]);
  const [checkPwd, setCheckPwd] = useState(true);
  const [searchpwd, setSearchpwd] = useState("");
  const [checkId, setCheckId] = useState(1);

  const handleSearch = async () => {
    alert("현재 이 서비스는 이용하실 수 없습니다.")
  };
  const handleButton = (id, ifPublic) => {
    if (ifPublic) {
      setCheckPwd(false);
      setCheckId(id);
    } else {
      navigate(`/ExampleRoom`);
    }
  };
  const handlePasswordButton = async (id) => {
    try {
      const token = localStorage.getItem("access-token");
      const search_id = id;
      let body = {
        roomId: `${search_id}`,
        roomPwd: searchpwd,
      };
      const response = await axios.post(
          "",
          body,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );
      if (response.data.result.ifCorrect === true) {
        navigate(`/userRoom?id=${search_id}`);
      } else {
        alert("비밀번호가 틀립니다!");
      }
    } catch (e) {
      console.log(e);
      alert("비밀번호가 틀렸습니다!");
    }
  };

  if (!checkPwd) {
    return (
        <>
          <div className="bg"></div>
          <div className="pwd-container">
            <div className="pwd-header">해당 방의 비밀번호를 입력하세요</div>
            <input
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                className="pwd-input"
                value={searchpwd}
                onChange={(e) => setSearchpwd(e.target.value)}
            />
            <Button
                variant="filled"
                onClick={() => handlePasswordButton(checkId)}
            >
              확인
            </Button>
          </div>
        </>
    );
  }
  return (
      <>
        <div className="bg"></div>
        <div className="enter-container">
          <div className="enterroom-title">
            <h3 className="enter-h3">방 검색하기</h3>
            <p className="enter-p">들어가고 싶은 방을 검색해보세요.</p>
          </div>
          <div className="search-container">
            <Input
                color="neutral"
                placeholder="이름을 입력해 주세요."
                size="md"
                variant="soft"
                sx={{width: "230px"}}
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
            />
            <Button
                variant="filled"
                onClick={handleSearch}
                sx={{color: "white"}}
            >
              검색
            </Button>
          </div>
          <div className="result-container">
            {searchRoomIds
                ? searchRoomIds.map((item, index) => (
                    <RoomThumbnail
                        key={index}
                        name={searchName}
                        birthDate={"20000624"}
                        onClick={() => handleButton(1, false)}
                        ifPublic={false}
                    />
                ))
                : null}
          </div>
        </div>
      </>
  );
}

export default EnterRoom;

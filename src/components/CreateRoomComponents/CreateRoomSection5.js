import "./CreateRoomSection5.css";
import PageNumber from "../PageNumber";
import { userDetails } from "./CreateRoomSection1";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userFormData } from "./CreateRoomSection1";
import { roomPwdDetail, scopeDetail } from "./CreateRoomSection4";
import { userFormData_new } from "./CreateRoomSection2";
function Checkbox({ children, disabled, checked, onChange, classname }) {
  return (
    <label className={classname}>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
  );
}

const MAN = "남자";
const WOMAN = "여자";

function CreateRoomSection5() {
  console.log(roomPwdDetail);
  console.log(scopeDetail);
  console.log(userDetails);

  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);

  const userValidateDetails = { ...userDetails };
  console.log(userValidateDetails);
  const userValidateName = userValidateDetails.name;
  console.log(userValidateName);
  const userValidateGender = (gender) => {
    if (gender === "man") {
      return MAN;
    } else {
      return WOMAN;
    }
  };

  const userValidateBirth = `${userValidateDetails.birthYear} - ${userValidateDetails.birthMonth} - ${userValidateDetails.birthDay}`;
  const userDeathDate = (death) => {
    if (death !== null) {
      return (
        <li>
          사망년일 : {userValidateDetails.deathYear} -{" "}
          {userValidateDetails.deathMonth} - {userValidateDetails.deathDay}
        </li>
      );
    }
  };
  const userValidateRelationship = `${userValidateDetails.relationship}`;

  let values = userFormData_new.values();
  for (const pair of values) {
    console.log(pair);
  }

  const handleButton = async (e) => {
    e.preventDefault();
    alert("현재 해당 서비스는 점검중입니다.");
    navigate('/');
  };

  return (
    <>
      <section className="section1">
        <div className="section-box1">
          <div className="form-value1">
            <PageNumber num={5} />
            <div>
              <h2 className="info">정보</h2>
            </div>
            <div className="list-container">
              <ul className="detail-list">
                <li>이름 : {userValidateName}</li>
                <li>성별 : {userValidateGender(userValidateDetails.gender)}</li>
                <li>생년월일 : {userValidateBirth}</li>
                {userDeathDate(userValidateDetails.deathYear)}
                <li>관계 : {userValidateRelationship}</li>
              </ul>
            </div>
            <div className="checkbox">
              <Checkbox checked={agree} onChange={setAgree}>
                위의 내용을 숙지하였고, 위와 같은 내용을 방을 생성하시겠습니까?
              </Checkbox>
            </div>
            <div>
              <button onClick={handleButton} disabled={!agree}>
                방 생성하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateRoomSection5;

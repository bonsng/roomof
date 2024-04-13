import styles from "./HomePage.module.css";
import CustomButton from "../components/Button/CustomButton";
import Container from "../components/Constants/Container";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ExampleButton from "../components/Button/ExampleButton";


function HomePage() {
  const navigate = useNavigate();
  const loginId = "local";
  const handleCreate = (e) => {
    if (!loginId) {
      alert("로그인을 먼저 해주세요.");
      navigate({ pathname: "/login" });
    } else {
      navigate({ pathname: "/createRoom/1" });
    }
  };
  const handleEnter = () => {
    if (!loginId) {
      alert("로그인을 먼저 해주세요.");
      navigate({ pathname: "/login" });
    } else {
      navigate({ pathname: "/enterRoom" });
    }
  };
  return (
    <>
      <div className={styles.bg} />
      <Container>
          <ExampleButton/>
          <div className={styles.text_group}>
            <div>
              <h1 className={styles.title1}>사랑하는 사람과의 재회</h1>
              <p className={styles.subtitle}>
                사랑하는 사람을 만날 수 있는 3D 가상 공간
              </p>
            </div>
            <div className={styles.button_group}>
                <div className={styles.button}>
                  {/* <CustomButton onClick={handleCreate}>
                    추모공간 생성하기
                  </CustomButton> */}
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleCreate}
                    sx={{
                        fontSize: "16px",
                        width: "240px",
                        height: "63px",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.8)",
                        boxShadow: "0 0 10px rgba(0,0,0,0.8)",
                        marginBottom: "10px",
                        "&:hover": {
                            border: "1px solid rgba(255,255,255,1)",
                        },
                    }}
                  >
                    추모공간 생성하기
                  </Button>
                </div>
                <div className={styles.button}>
                  {/* <CustomButton onClick={handleEnter}>
                    추모공간 입장하기
                  </CustomButton> */}
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleEnter}
                    sx={{
                        fontSize: "16px",
                        width: "240px",
                        height: "63px",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.8)",
                        boxShadow: "0 0 10px rgba(0,0,0,0.8)",
                        marginBottom: "10px",
                        "&:hover": {
                            border: "1px solid rgba(255,255,255,1)",
                        },
                    }}
                  >
                    추모공간 입장하기
                  </Button>
                </div>
            </div>
          </div>


      </Container>
    </>
  );
}

export default HomePage;

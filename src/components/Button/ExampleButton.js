import './ExampleButton.css'
import {useNavigate} from "react-router-dom";
const ExampleButton = () => {
    const navigate = useNavigate();

    const enterExampleRoom = () => {
        navigate({pathname:"/exampleRoom"})
    }

    return (
        <div className="floating-button" onClick={enterExampleRoom}>
            <div className="example-title">ROOMOF</div>
            <div className="example-p">
                예시공간
                <br />
                보기
            </div>
            <img className="example-img" alt="Vector" src="https://c.animaapp.com/5GSItYbF/img/vector.svg"/>
        </div>
    );
};

export default ExampleButton;
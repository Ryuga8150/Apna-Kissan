import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { IoMdArrowBack } from "react-icons/io"; 


function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      <IoMdArrowBack/>
      <span>Back</span>
    </Button>
  );
}

export default BackButton;
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NameContext } from "../context/NameContext";
import NameForm from "./form/NameForm"

const AddName = () => {
  const navigate = useNavigate();
  const { naames, setNaames } = useContext(NameContext);

  const handleOnSubmit = (naame) => {
    setNaames([naame, ...naames]);
    navigate('/listn');
  }

  return (
    <div className="addForm">
      <NameForm handleSubmit={handleOnSubmit} />
    </div>
  )
}

export default AddName
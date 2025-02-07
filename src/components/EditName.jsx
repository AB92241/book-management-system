import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NameContext } from "../context/NameContext";
import NameForm from "./form/NameForm"

const EditName = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { naames, setNaames } = useContext(NameContext);
  const naameToEdit = naames.filter(naames => naames.id === id);

  const handleOnSubmit = (naame) => {
    const filteredNaame = naames.filter(naame => naame.id !== id);
    setNaames([naame, ...filteredNaame]);
    navigate('/listn');
  }

  return (
    <div className="addForm">
      <NameForm naame={naameToEdit[0]} handleSubmit={handleOnSubmit} />
    </div>
  )
}

export default EditName
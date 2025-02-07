import { useContext } from "react";
import { NameContext } from "../context/NameContext";
import Name from "./Name";

const ListName = () => {
  const { naames, setNaames } = useContext(NameContext);

  const handleRemoveNaame = (id) => {
    const filteredNaames = naames.filter(naame => naame.id !== id);
    setNaames(filteredNaames)
  }

  return (
    <div className="listBook">
      {naames.length ? naames.map(naame => (
        <Name naame={naame} key={naame.id} handleRemoveNaame={handleRemoveNaame} />
      )) : (
        <p className="noData">No borrowers at the moment!</p>
      )}
    </div>
  )
}

export default ListName
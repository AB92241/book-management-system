import { useNavigate } from "react-router-dom";

const Name = ({ naame, handleRemoveNaame }) => {
  const navigate = useNavigate();
  const { id, name, bookname, issue, returnn } = naame;

  return (
    <div className="book">
      <h2>{name}</h2>
      <div className="bookDetail">
        <p>Bookname: {bookname}</p> 
        <p>Date Of Issue: {issue}</p>
        <p style={{color:'red'}}>Date Of Return: {returnn}</p>
      </div>
      <div className="buttons">
        <button onClick={() => navigate(`/modify/${id}`)}>Edit</button>
        <button onClick={() => handleRemoveNaame(id)}>Delete</button>
      </div>
    </div>
  )
}

export default Name
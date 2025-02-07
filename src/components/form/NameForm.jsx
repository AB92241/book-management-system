import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const NameForm = ({ naame, handleSubmit }) => {
  const [naameState, setNaameState] = useState({
    name: naame ? naame.name : '',
    bookname: naame ? naame.bookname : '',
    issue: naame ? naame.issue : '',
    returnn: naame ? naame.returnn : '',
  });

  const handleChange = (e) => {
    setNaameState({
      ... naameState,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      id: uuidv4(),
      date: new Date(),
      ...naameState
    });
    setNaameState({ name: '',bookname:'', issue: '', returnn: ''})
  }

  const renderInputField = (label, placeholder, name) => (
    <div className="inputField">
      <label>{label}</label>
      <input value= {naameState[name]} onChange={handleChange} name={name} type="text" placeholder={placeholder} />
    </div>
  );

  
  return (
  <form onSubmit={onSubmit} className="form">
    {renderInputField('Name', 'Enter name of borrower...', 'name')}
    {renderInputField('Book Name', 'Enter name of book...', 'bookname')}
    {renderInputField('Book Issue Date', 'Enter issue date...', 'issue')}
    {renderInputField('Book Return Date', 'Enter return date...', 'returnn')}
    <button type="submit" className="btnForm" > {naame ? 'Update' : 'Submit'}</button>
  </form>
  )
}

export default NameForm
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const BookForm = ({ book, handleSubmit }) => {
  const [bookState, setBookState] = useState({
    name: book ? book.name : '',
    category: book ? book.category : '',
    author: book ? book.author : '',
    price: book ? book.price : '',
    details: book ? book.details : '',
  });

  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      id: uuidv4(),
      date: new Date(),
      ...bookState
    });
    setBookState({ name: '',category:'', author: '', price: '',details:''})
  }

  const renderInputField = (label, placeholder, name) => (
    <div className="inputField">
      <label>{label}</label>
      <input value={bookState[name]} onChange={handleChange} name={name} type="text" placeholder={placeholder} />
    </div>
  );

  const disabledSubmit = !bookState.name || !bookState.author || !bookState.price || !bookState.details || !bookState.category 

  return (
    <form onSubmit={onSubmit} className="form">
      {renderInputField('Book Name', 'Enter name of book...', 'name')}
      {renderInputField('Book Category', 'Enter category of book...', 'category')}
      {renderInputField('Book Author', 'Enter name of author...', 'author')}
      {renderInputField('Book Price', 'Enter price of book...', 'price')}
      {renderInputField('Book Details', 'Enter details of book...', 'details')}
      

      <button type="submit" className="btnForm" style={{color:'Black'}} disabled={disabledSubmit}>{book ? 'Update' : 'Submit'}</button>
    </form>
  )
}

export default BookForm
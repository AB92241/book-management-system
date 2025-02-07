import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'
import Header from './components/Header'
import ListBook from './components/ListBook'
import BookProvider from './context/BookContext'
import ListName from './components/ListName'
import AddName from './components/AddName'
import EditName from './components/EditName'
import NameProvider from './context/NameContext'


function App() {

  return (
    <div className="container" >
    <NameProvider>
      <BookProvider>
      
        <Header />
        <Routes>
          <Route path='/' element={<ListBook />} />
          <Route path='/add' element={<AddBook />} />
          <Route path='/edit/:id' element={<EditBook />} />
          <Route path='/listn' element={<ListName />} />
          <Route path='/add2' element={<AddName />} />
          <Route path='/modify/:id' element={<EditName />} 
          />

          

          
        </Routes>
        
      </BookProvider>
      </NameProvider>
    
    
    </div>
  )
}

export default App

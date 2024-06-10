import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook.Jsx'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'


const App = () => {
  return (
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books/create' element={<CreateBook />}/>
        <Route path='/books/details/:id' element={<ShowBook />}/>
        <Route path='/books/edit/:id' element={<EditBook />}/>
        <Route path='/books/delete/:id' element={<DeleteBook />}/>
     </Routes>
   //<div className='bg-red-500 text-white'> ggd</div>
  )
}

export default App
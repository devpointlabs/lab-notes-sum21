import React, {useState, useEffect } from 'react';
import axios from 'axios';

export const BookContext =  React.createContext();

export const BookConsumer = BookContext.Consumer;

const BookProvider = ({ children }) => {
    // this will grab all the books and fill the array up with books from database
    const [books, setBooks] = useState([])
    useEffect( () => {
        axios.get('/api/books')
        .then( res => setBooks(res.data))
        .catch(err => console.log(err))
    }, [])

   const addBook = (book) => {
       axios.post('/api/books', { book })
        .then( res => {
            setBooks([...books, res.data])
        })
        .catch( err => console.log(err))
   }

   const updateBook = (id, book) => {
       axios.put(`/api/books/${id}`, { book })
        .then(res => {
            const updatedBooks = books.map( b => {
                if (b.id === id) {
                    return res.data
                }
                return b
            })
            setBooks(updatedBooks)
        })
        .catch( err => console.log(err) )
   }

   const deleteBook = (id) => {
       axios.delete(`/api/books/${id}`)
        .then( res => {
            setBooks(books.filter(b => b.id !== id))
            alert(res.data.message)
        })
        .catch( err => console.log(err) )

   }
   
    return (
        <BookContext.Provider value={{
            books, 
            addBook: addBook,
            updateBook: updateBook,
            deleteBook: deleteBook,


        }}>
            { children }
        </BookContext.Provider>
    )
}
export default BookProvider;
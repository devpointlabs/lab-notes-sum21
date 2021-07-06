import Book from './Book';

const BookList = ({ books, updateBook, deleteBook}) => (
  <>
    { books.map( b => 
      <>
        <Book {...b} updateBook={updateBook} deleteBook={deleteBook} />
        <hr />
      </>
    )}
  </>
)
export default BookList;
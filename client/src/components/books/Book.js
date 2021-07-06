// import Days from "../days/Days";

const Book = ({ id, title, descript, updateBook, deleteBook }) => {
  return(
    <>
      <h1>{title}</h1>
      <h3>Description: {descript}</h3>
      <button onClick={ () => deleteBook(id) }>Delete Book</button>
      {/* <Days bookId={id} /> */}
    </>
  )
}
export default Book;
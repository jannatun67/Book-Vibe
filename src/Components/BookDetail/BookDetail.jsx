import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../Utility/AddToDb";


const BookDetail = () => {
   const {bookId}= useParams()
   const id = parseInt(bookId)
   const data = useLoaderData()
   const book = data.find(book => book.bookId === id)
   const {bookId:currantBookID,image,bookName,author,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book
  const handelRead = (id) => {
    addToStoreReadList(id)
  }

    return (
        <div className="card card-side bg-base-100 shadow-xl mt-10 p-3 gap-5">
  <figure className="card bg-gray-400 rounded-xl">
    <img className=" rounded-xl px-2"
      src={image}
      alt={bookName} />
  </figure>
  <div className="card space-y-2">
    <h2 className="card-title">{bookName}</h2>
    <p>By: {author}</p>
    <hr />
    <p>{category}</p>
    <hr />
    <p>Review: {review}</p>
    <p>Tag: </p>

    <div className="card-actions justify-end">
      <button onClick={() =>handelRead(bookId)} className="btn outline ">Read</button>
      <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetail;
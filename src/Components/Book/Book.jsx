

const Book = ({book}) => {
     const {image, bookName, category, rating,author,tags} = book;

    return (
        <div className="card bg-base-100 w-96 shadow-xl  border p-2">
        <figure className="bg-gray-400 rounded-xl">
          <img className="  h-[166px] rounded-xl py-4"
            src={image}
            alt={bookName} />
        </figure>
        <div className="card-body space-y-2">
          <div className="flex  gap-14 ">
            {
              tags.map(tag => <button className="btn bg-green-100 font-medium rounded-3xl text-green-600">{tag}</button>)
            }
          </div>
          <h2 className="card-title">
            {bookName}
            
          </h2>
          <p>By: {author}</p>
          <div className="border border-dashed"></div>
          <div className="card-actions justify-between ">
            <div className="badge-outline font-medium">{category}</div>
           <div className="flex gap-2 font-medium">
           <div className=" badge-outline">{rating}</div>
          <div className="rating">
          <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Book;
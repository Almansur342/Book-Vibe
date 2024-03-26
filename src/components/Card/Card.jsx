const Card = ({ item }) => {
  const { bookId, bookName, image, rating, category, tags } = item;
  return (
    <div className="border-2 p-6 card shadow-xl">
      <figure className=""><img className="h-60  object-cover object-center" src={image} alt="Shoes" /></figure>
      <div className="my-5">
        <div className="flex items-center gap-4">
           <div className="bg-red-600">heloo</div>
           <div className="bg-yellow-500">fs</div>
        </div>
        <h1>The Catcher in the Rye</h1>
        <p>By : Awlad Hossain</p>
         <hr className="border-dashed my-5" />
      </div>
      <div>
         <h1>finction</h1>
         <div className="flex justify-between items-center">
            <p>690</p>
            <img className="text-white" src="/rating.png" alt="" />
         </div>
      </div>
    </div>
  );
};

export default Card;
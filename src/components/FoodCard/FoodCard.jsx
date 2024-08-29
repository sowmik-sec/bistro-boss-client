function FoodCard({ item }) {
  const { image, price, recipe, name } = item;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
        ${price}
      </p>
      <div className="card-body text-center flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-orange-400 bg-slate-100 border-0 border-b-4 mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;

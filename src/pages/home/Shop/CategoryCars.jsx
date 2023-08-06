import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const CategoryCars = ({ car }) => {
  const { name, picture, price, rating } = car;

  return (
    <div className="card card-compact w-full  bg-inherit shadow-2xl shadow-stone-950">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{name}</h2>
        <p className="text-lg font-semibold">Price : {"$ " + price} k</p>
        <Rating
          readOnly
          style={{ maxWidth: 120 }}
          value={rating}
          itemStyles={myStyles}
        />
        <div className="card-actions justify-end">
          <Link to="/viewDetails">
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCars;

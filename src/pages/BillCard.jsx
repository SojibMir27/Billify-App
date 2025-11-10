import { Eye, Heart } from "lucide-react";
import { Link } from "react-router";

const BillCard = ({ bill }) => {
  const { title, category, location, description, image, amount, date, _id } =
    bill;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-500 rounded">
      <figure className="h-48 overflow-hidden">
        <img
          src={image ? image : "https://i.ibb.co/Q3ScKmQ2/download.jpg"}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center md:text-left">
          <span className="text-lg font-semibold">Name :</span> {title}
        </h2>
        <h2 className="text-xs rounded-full">
          <span className="text-lg font-semibold bg-none">Category :</span>{" "}
          <span className="badge bg-pink-900/40">{category}</span>
        </h2>
        <p className="line-clamp-2">
          <span className="text-lg font-semibold">Location :</span> {location}
        </p>
        <p className="line-clamp-2">
          <span className="text-lg font-semibold">Description :</span>{" "}
          {description}
        </p>
        <p className="font-semibold">
          <span className="text-lg font-semibold">Amount :</span> {amount} (BDT)
        </p>
        <p className="text-sm">
          <span className="text-lg font-semibold">Date :</span> {date}
        </p>
        <div className="card-actions justify-between items-center mt-4">
          <Link
            to={`/bill-details/${_id}`}
            className="btn text-white mt-4 rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 w-full"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillCard;

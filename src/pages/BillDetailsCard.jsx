// import { Eye, Heart } from "lucide-react";
// import { Link } from "react-router";
import PayBill from "./PayBill";

const BillDetailsCard = ({ bill }) => {
  const { title, category, location, description, image, amount, date, _id } =
    bill;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-500/20 rounded-xl flex flex-col md:flex-row justify-between items-stretch mx-auto w-11/12 md:w-full max-w-6xl my-10">
      {/* Image - 40% */}
      <div className="md:w-2/5 w-full h-64 md:h-auto">
        <figure className="h-full overflow-hidden p-5">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>
      </div>

      {/* Details - 60% */}
      <div className="card-body md:w-3/5 w-full mr-2 flex flex-col justify-between ">
        <div className="space-y-3">
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
            <span className="text-lg font-semibold">Amount :</span> {amount}{" "}
            (BDT)
          </p>
          <p className="text-sm">
            <span className="text-lg font-semibold">Date :</span> {date}
          </p>
          {/* pay-bill modal */}
          <PayBill bill={bill} isDisabled={!date.includes("2025-11")} />
        </div>
      </div>
    </div>
  );
};

export default BillDetailsCard;

import { Link } from "react-router-dom";
import RatingStar from "./RatingStar";

export default function ProductCard({ thumbnail, title, price, rating, id }) {
  const r = Math.round(rating);
  return (
    <div className="my-5 w-80 max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full flex flex-col items-center justify-start">
        <Link to={`${id}`}>
          <img
            className="rounded-t-lg object-fill min-h-[250px] max-h-[250px] max-w-xs"
            src={thumbnail}
            alt={title}
          />
        </Link>
      </div>

      <div className="px-5 py-5">
        <Link to={`${id}`}>
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            {title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          {[...Array(5)].map((_, i) => {
            const color = r >= i + 1 ? "yellow" : "grey";
            return <RatingStar color={color} id={i + 1} key={i} />;
          })}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Link
            to={`${id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

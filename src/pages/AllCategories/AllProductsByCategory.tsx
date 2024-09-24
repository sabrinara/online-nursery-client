import { useParams } from "react-router-dom";
import { useGetAllProductsCategoriesQuery } from "@/redux/api/api";
import { TProducts } from "@/types";
import { FaHeart } from "react-icons/fa";
import Loading from "../shared/Loading";

const AllProductsByCategory = () => {
  const { name } = useParams<{ name?: string }>();
  const queryName = name ?? 'defaultCategory';
  const { data, isLoading } = useGetAllProductsCategoriesQuery(queryName);

  if (isLoading) {
    return (
        <div className="flex justify-center items-center h-screen mt-10">
          <Loading />
        </div>
    );
}
  const { data: products } = data;



  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {
        products.length > 0 ? products?.map((product: TProducts) => (
          <div key={product._id} className="pr-2 md:p-4 rounded-md bg-green-50">
            <img src={product.imageUrl} alt={product.title} className="w-full h-40 md:h-80 object-cover rounded-md mb-2  transform hover:scale-105 transition-transform duration-300" />
            <h2 className="text-xl font-bold hover:animate-bounce pl-4 md:pl-0">{product.title}</h2>
            <p className="text-gray-600 pl-4 md:pl-0">{product.description.slice(0, 90)}...</p>
            <div className="flex justify-between items-center pl-4 md:pl-0">
              <p className="text-green-900 font-bold">$ <span className="text-green-700">{product.price}</span></p>
              <div className="text-green-900 flex items-center gap-1 font-bold mb-4 md:mb-0"><FaHeart /> <span className="text-green-700">{product.rating}</span></div>
            </div>
          </div>
        )) : <p className="max-w-full">No products found</p>
      }
    </div>
  );
};

export default AllProductsByCategory;

import { useGetCategoriesQuery } from "@/redux/api/api";
import { TCategories } from "@/types";
import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { VscOpenPreview } from "react-icons/vsc";


const AllCategoryCard = () => {
  const {data , isLoading } = useGetCategoriesQuery({});
  if (isLoading) {
    return <div>Loading</div>;
  }
  const {data: categories} = data;
    return (
       <div className="mt-10 mx-6">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
              {categories.map((item : TCategories) => (
                    <div className="rounded-2xl mb-5 flex gap-2  bg-green-50 " key={item._id}>
                        <div className="relative group bg-orange-50">
                            <img src={item.imageUrl} alt={item.name} className="w-56 h-60 rounded-l-2xl" />
                            <div className="absolute inset-0 flex items-center justify-center gap-4 top-3/4 bg-green-200 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {/* <FaRegHeart className="text-2xl hover:bg-green-800 hover:text-white hover:rounded-full hover:p-[7px] " title="Add To Rating"/> */}
                                < VscOpenPreview className="text-2xl hover:bg-green-800 hover:text-white hover:rounded-full hover:p-[7px] " title="View Details" />
                                <IoCartOutline className="text-2xl hover:bg-green-800 hover:text-white hover:rounded-full hover:p-[7px] " title="Add To Cart" />
                            </div>
                            {/* <div className="absolute flex items-center justify-center gap-1 top-4 right-4 ">
                                <FaRegHeart className="text-center text-xl mt-1" />
                                <h5 className="text-xl font-semibold">{item.rating}</h5>
                            </div> */}
                        </div>
                      <div className="flex flex-col   text-start">
                        <h1 className=" mt-4 font-bold text-green-950 text-2xl mr-2">{item.name}</h1>
                      {/* <h3 className=" my-1 font-bold text-black text-lg">{item.title}</h3>
                      <p className=" font-bold  text-md  text-green-700">$ {item.price}</p>
                      <div className="flex  gap-1 items-center">
                                <FaRegHeart className=" text-xl mt-1" />
                                <h5 className="text-xl font-semibold">{item.rating}</h5>
                            </div> */}
                      <button>
                      <IoCartOutline className= "text-2xl " title="Add To Cart" />
                      </button>

                      {/* view details button */}
                      <button className="bg-green-900 text-white px-2 py-1 rounded mt-2 hover:bg-green-800 w-32">View Details</button>

                      </div>
                    </div>
                ))}
        </div>
       </div>
    );
};

export default AllCategoryCard;
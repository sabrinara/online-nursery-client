import { VscOpenPreview } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
const ProductCard = () => {
    const data = [
        {
            id: 1,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Leopard Lily",
            price: 200,
        },
        {
            id: 2,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Calathea Plant",
            price: 200,
        },
        {
            id: 3,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Spring Plant",
            price: 200,
        },
        {
            id: 4,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 200,
        },
        {
            id: 5,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 200,
        },
        {
            id: 6,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 200,
        },
        {
            id: 7,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 200,
        },
    ]
    return (
        <div className="my-10">
            <div className="grid grid-cols-4 gap-4">
                {data.map((item) => (
                    <div className="rounded-2xl mb-5 " key={item.id}>
                        <div className="relative group">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-auto" />
                            <div className="absolute inset-0 flex items-center justify-center gap-4 top-3/4 bg-green-200 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <FaRegHeart className="text-2xl hover:bg-green-800 hover:text-white hover:rounded-full hover:p-[7px] " />
                                < VscOpenPreview className="text-2xl hover:bg-green-800 hover:text-white hover:rounded-full hover:p-[7px] "  />
                                <IoCartOutline className="text-2xl hover:bg-green-800 hover:text-white hover:rounded-full hover:p-[7px] "  />
                            </div>
                        </div>
                        <h3 className="text-center mt-4 font-bold text-black text-lg">{item.title}</h3>
                        <p className="text-center font-bold  text-md  text-green-700">$ {item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
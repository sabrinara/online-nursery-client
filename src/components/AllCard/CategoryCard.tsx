
import { FaArrowRight } from "react-icons/fa";


const CategoryCard = () => {
    const data = [
        {
            id: 1,
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-7.jpg",
            title: "Leopard Lily",
            category: "Indoor plant",
            rating: 5,
        },
        {
            id: 2,
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-8.jpg",
            title: "Calathea Plant",
            category: "Indoor plant",
            rating: 5,
        },
        {
            id: 3,
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-9.jpg",
            title: "Spring Plant",
            category: "Indoor plant",
            rating: 5,
        },
        {
            id: 4,
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-8.jpg",
            title: "Tulip",
            category: "Outdoor plant",
            rating: 5,
        },
        {
            id: 5,
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-9.jpg",
            title: "Tulip",
            category: "Home Decore plant",
            rating: 5,
        },
        {
            id: 6,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            category: "Indoor plant",
            rating: 5,
        },
        {
            id: 7,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            category: "Indoor plant",
            rating: 5,
        },
    ]
    return (
        <div className="my-10 md:my-28">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {data.map((item , index) => (
                    <div   className={`rounded-2xl mb-5 ${index % 2 === 0 ? 'translate-y-0 md:translate-y-10' : 'translate-y-0 md:-translate-y-10'}`} 
                    key={item.id}>
                        <div className="relative group">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-96 " />
                            <div className="absolute inset-0 flex items-center justify-center gap-4 top-3/4 bg-green-200 bg-opacity-20  ">
                               <div className="flex justify-center items-center gap-1 hover:animate-wobble" title="Show more">
                               <h1 className="text-xl text-gray-600">{item.category} </h1>
                               <FaArrowRight className="text-2xl text-gray-600 mt-1"  />
                               </div>
                            </div>
                        </div>
                        {/* <h3 className="text-center mt-4 font-bold text-black text-lg">{item.title}</h3>
                    <p className="text-center font-bold  text-md  text-green-700">$ {item.price}</p> */}
                    </div>
                ))}
            </div>
        </div>



    );
};

export default CategoryCard;
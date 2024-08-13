
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
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/themes/flacio/images/newsletter-image.jpg",
            title: "Variety Plant",
            category: "Home Decore plant",
            rating: 5,
        },
      
        {
            id: 4,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba22.jpg?v=1662954220",
            title: "Grass",
            category: "Decor plant",
            rating: 5,
        },
        {
            id: 5,
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-9.jpg",
            title: "Saculla Plant",
            category: "Gift plant",
            rating: 5,
        },
        {
            id: 6,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba8.png?v=1662622937",
            title: "Spring Plant",
            category: "Office Decore plant",
            rating: 5,
        },
        {
            id: 7,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba21.jpg?v=1662954220",
            title: "Bonsie",
            category: "Indoor plant",
            rating: 5,
        },
    ]
    return (
        <div className="my-10 md:my-28">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {data.slice(0, 7).map((item, index) => (
                    <div className={`rounded-2xl mb-5 ${index % 2 === 0 ? 'translate-y-0 md:translate-y-10' : 'translate-y-0 md:-translate-y-10'}`}
                        key={item.id}>
                        <div className="relative group">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-96 " />
                            <div className="absolute inset-0 flex items-center justify-center gap-4 top-3/4 bg-green-200 bg-opacity-20  ">
                                <div className="flex justify-center items-center gap-1 hover:animate-wobble" title="Show more">
                                    <h1 className="text-xl text-gray-600">{item.category} </h1>
                                    <FaArrowRight className="text-2xl text-gray-600 mt-1" />
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
                <div>
                    <div className="flex items-center justify-center gap-4 my-20 md:my-0 md:mt-28 hover:animate-wobble">
                        <button className="relative flex items-center justify-center border-2 border-green-800 text-green-900  px-6 py-3 rounded-ss w-20 h-20 bg-white shadow-lg hover:bg-green-50 transition duration-300">


                        </button>
                        <h1 className="absolute font-semibold text-xl  ml-6 mr-4 bg-white py-1">
                            View More Categories
                        </h1>
                        <FaArrowRight className="  text-green-900 text-lg mt-1 ml-36" />
                    </div>
                </div>
            </div>
        </div>



    );
};

export default CategoryCard;
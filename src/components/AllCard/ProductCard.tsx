import { VscOpenPreview } from "react-icons/vsc";
import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const ProductCard = () => {
    const data = [
        {
            id: 1,
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-7.jpg",
            title: "Leopard Lily",
            price: 200,
            rating: 2.5,
            category: "Indoor plant",
            details: "Leopard Lily is known for its striking spotted leaves and easy maintenance, making it a popular choice for indoor spaces."
        },
        {
            id: 2,
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/themes/flacio/images/newsletter-image.jpg",
            title: "Variety Plant",
            price: 28,
            rating: 3.5,
            category: "Indoor plant",
            details: "This variety plant offers a mix of textures and colors, perfect for adding diversity and vibrancy to any room."
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Foliage Plant",
            price: 10,
            rating: 1.55,
            category: "Outdoor plant",
            details: "The Green Foliage plant is admired for its lush, vibrant leaves that add a refreshing, natural touch to any space."
        },
        {
            id: 4,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba22.jpg?v=1662954220",
            title: "Grass",
            price: 50,
            rating: 5,
            category: "Decor plant",
            details: "Decorative grass brings a touch of nature indoors with its sleek and minimalist design, perfect for modern interiors."
        },
        {
            id: 5,
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-9.jpg",
            title: "Saccula Plant",
            category: "Gift plant",
            price: 20,
            rating: 5,
            details: "Saculla plants are known for their lush green foliage and are often gifted for their elegance and easy care."
        },
        {
            id: 6,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba8.png?v=1662622937",
            title: "Spring Plant",
            category: "Office Decor plant",
            price: 25,
            rating: 5,
            details: "Spring plants bring a refreshing vibe to office spaces with their bright green leaves and minimal upkeep requirements."
        },
        {
            id: 7,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba21.jpg?v=1662954220",
            title: "Bonsai",
            price: 40,
            rating: 1,
            category: "Indoor plant",
            details: "Bonsai is the Japanese art of cultivating miniature trees, emphasizing patience, balance, and natural beauty."
        },
        {
            id: 8,
            imageUrl: "https://images.unsplash.com/photo-1578687595593-31fafb682273?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Westwood Gardens succulents",
            price: 40,
            rating: 1,
            category: "Outdoor plant",
            details: "Westwood Gardens succulents are known for their hardy, low-maintenance plants that thrive in various environments. They are perfect for beginners and seasoned gardeners."
        },
        {
            id: 9,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 40,
            rating: 1,
            category: "Outdoor plant",
            details: "Tulip flowers are a favorite choice for gardeners, offering bright colors and graceful shapes that enhance outdoor spaces."
        }
    ];
    return (
        <div className="my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {data.slice(0, 7).map((item) => (
                    <div className="rounded-2xl mb-5 " key={item.id}>
                        <div className="relative group bg-orange-50">
                            <Link to={`/allproducts/${item.id}`}>
                            <img src={item.imageUrl} alt={item.title} className="w-full h-80 " />
                            </Link>
                            <div className="absolute inset-0 flex items-center justify-center gap-4 top-3/4 bg-green-200 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {/* <FaRegHeart className="text-2xl hover:bg-green-800 hover:text-white hover:rounded-full hover:p-[7px] " title="Add To Rating"/> */}
                               <Link to={`/allproducts/${item.id}`}>
                               < VscOpenPreview className="text-2xl hover:bg-green-800 hover:text-white hover:rounded-full hover:p-[7px] " title="View Details" />
                               </Link>
                                <IoCartOutline className="text-2xl hover:bg-green-800 hover:text-white hover:rounded-full hover:p-[7px] " title="Add To Cart" />
                            </div>
                            <div className="absolute flex items-center justify-center gap-1 top-4 right-4 ">
                                <FaRegHeart className="text-center text-xl mt-1" />
                                <h5 className="text-xl font-semibold">{item.rating}</h5>
                            </div>
                        </div>
                        <h3 className="text-center mt-4 font-bold text-black text-lg">{item.title}</h3>
                        <p className="text-center font-bold  text-md  text-green-700">$ {item.price}</p>
                    </div>
                ))}

                   <Link to={"/allproducts"} >
                   <div className="flex items-center justify-center gap-4 my-20 md:my-0 md:mt-28 hover:animate-wobble ">
                        <button className="relative flex items-center justify-center border-2 border-green-800 text-green-900  px-6 py-3 rounded-full w-20 h-20 bg-white shadow-lg transition duration-300">


                        </button>
                        <h1 className="absolute font-semibold text-xl  ml-6 mr-4 bg-white py-1">
                            View More Products
                        </h1>
                        <FaArrowRight className="  text-green-900 text-lg mt-1 ml-36" />
                    </div>
                   </Link>
                
            </div>
        </div>
    );
};

export default ProductCard;
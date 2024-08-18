import {
    Table,
    TableBody,
    TableCell,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { VscOpenPreview } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";



const AllProductsTable = () => {
    const data = [
        {
            id: 1,
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-7.jpg",
            title: "Leopard Lily",
            price: 200,
            rating: 2.5,
            quantity: 4, 
            category: "Indoor plant",
            details: "Leopard Lily is known for its striking spotted leaves and easy maintenance, making it a popular choice for indoor spaces."
        },
        {
            id: 2,
            imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/themes/flacio/images/newsletter-image.jpg",
            title: "Variety Plant",
            price: 28,
            rating: 3.5,
            quantity: 4,
            category: "Indoor plant",
            details: "This variety plant offers a mix of textures and colors, perfect for adding diversity and vibrancy to any room."
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Foliage Plant",
            price: 10,
            rating: 1.3,
            quantity: 2,
            category: "Outdoor plant",
            details: "The Green Foliage plant is admired for its lush, vibrant leaves that add a refreshing, natural touch to any space."
        },
        {
            id: 4,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba22.jpg?v=1662954220",
            title: "Grass",
            price: 50,
            rating: 5,
            quantity: 4,
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
            quantity: 4,
            details: "Saculla plants are known for their lush green foliage and are often gifted for their elegance and easy care."
        },
        {
            id: 6,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba8.png?v=1662622937",
            title: "Spring Plant",
            category: "Office Decor plant",
            price: 25,
            rating: 5,
            quantity: 4,
            details: "Spring plants bring a refreshing vibe to office spaces with their bright green leaves and minimal upkeep requirements."
        },
        {
            id: 7,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba21.jpg?v=1662954220",
            title: "Bonsai",
            price: 40,
            rating: 1,
            quantity: 4,
            category: "Indoor plant",
            details: "Bonsai is the Japanese art of cultivating miniature trees, emphasizing patience, balance, and natural beauty."
        },
        {
            id: 8,
            imageUrl: "https://images.unsplash.com/photo-1578687595593-31fafb682273?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Westwood Gardens succulents",
            price: 40,
            rating: 1,
            quantity: 4,
            category: "Outdoor plant",
            details: "Westwood Gardens succulents are known for their hardy, low-maintenance plants that thrive in various environments. They are perfect for beginners and seasoned gardeners."
        },
        {
            id: 9,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 40,
            rating: 1,
            quantity: 4,
            category: "Outdoor plant",
            details: "Tulip flowers are a favorite choice for gardeners, offering bright colors and graceful shapes that enhance outdoor spaces."
        }
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortByRating, setSortByRating] = useState<boolean>(false);
    const [sortByPrice, setSortByPrice] = useState<boolean>(false);
    const [cart, setCart] = useState([])
    const navigate = useNavigate();

    const itemsPerPage = 5;

    const handleAddToCart = (product ) => {
        // Check if the item is already in the cart
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            // If item already exists and has available quantity, increment the quantity
            if (existingItem.quantity < product.quntity) {
                setCart((prevCart) =>
                    prevCart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                );
            }
            navigate("/cart");
        } else {
            // If item is not in the cart, add it with initial quantity 1
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    };

    const isOutOfStock = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        return existingItem && existingItem.quantity >= product.quntity;
    };



    // Filter the data based on search term (title and category)
    const filteredData = data.filter(
        (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort the filtered data based on the selected sort criteria
    const sortedData = [...filteredData].sort((a, b) => {
        if (sortByRating && sortByPrice) {
            return b.rating - a.rating || b.price - a.price;
        } else if (sortByRating) {
            return b.rating - a.rating;
        } else if (sortByPrice) {
            return b.price - a.price;
        }
        return 0; // No sorting if no criteria is selected
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const toggleSortByRating = () => {
        setSortByRating((prev) => !prev);
    };

    const toggleSortByPrice = () => {
        setSortByPrice((prev) => !prev);
    };

    return (
        <div className="container w-full">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 my-4">
                <div className="border border-green-900 px-3 py-2 rounded-none font-semibold hover:bg-green-900 hover:text-white">
                    <button>Add Products</button>
                </div>

                {/* Sort Select */}
                <div className="flex my-2 md:my-10 md:ml-40 space-x-4 ">
                    <button
                        onClick={toggleSortByRating}
                        className={`border border-green-900 px-3 py-2 rounded-none font-semibold ${sortByRating ? "bg-green-900 text-white" : ""
                            }`}
                    >
                        Top Rating
                    </button>
                    <button
                        onClick={toggleSortByPrice}
                        className={`border border-green-900 px-3 py-2 rounded-none font-semibold ${sortByPrice ? "bg-green-900 text-white" : ""
                            }`}
                    >
                        In Budget
                    </button>
                </div>

                <div className="flex  relative hover:bg-green-900 hover:text-white">
                    <input
                        type="text"
                        placeholder="Search by title or category..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border border-green-900 px-3 py-2 rounded-none hover:bg-green-900 hover:text-white    pl-10"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 hover:bg-green-900 hover:text-white" />

                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className="text-center">
                        <TableHead className="w-[100px]"></TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="pl-11">Image</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead> Details </TableHead>
                        <TableHead >
                            Delete
                        </TableHead>
                        <TableHead >Edit</TableHead>
                        <TableHead >Cart</TableHead>
                        <TableHead className="text-right">Price</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody className="">
                    {currentData.map((item, index) => (
                        <TableRow key={item.id} className={`${index % 2 === 0 ? "bg-green-50 hover:bg-green-50" : "bg-white"}`}>
                            <TableCell className="font-medium">
                                {indexOfFirstItem + index + 1}
                            </TableCell>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell className="">
                                <Link to={`/allproducts/${item.id}`}>
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-24 h-24 object-cover"
                                    />
                                </Link>
                            </TableCell>
                            <TableCell>{item.rating}</TableCell>
                            <TableCell>
                                <Link to={`/allproducts/${item.id}`}>
                                    < VscOpenPreview className="text-xl  " title="View Details" />
                                </Link>
                            </TableCell>
                            <TableCell className="">
                                <AiFillDelete className="text-red-600 text-xl" />
                            </TableCell>
                            <TableCell >
                                <CiEdit className="text-green-950 text-xl"></CiEdit>
                            </TableCell>
                            <TableCell>
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    disabled={isOutOfStock(item)}
                                    className={`text-xl ${isOutOfStock(item) ? "text-gray-400 cursor-not-allowed" : "text-green-600"}`}
                                    title={isOutOfStock(item) ? "Out of Stock" : "Add to Cart"}
                                >
                                    <IoCartOutline />
                                </button>
                            </TableCell>
                            <TableCell className="text-right">
                                {item.price}$
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="my-6 md:my-10">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={() => handleClick(currentPage - 1)}
                                disabled={currentPage === 1}
                            />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href="#"
                                    isActive={currentPage === index + 1}
                                    onClick={() => handleClick(index + 1)}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={() => handleClick(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default AllProductsTable;
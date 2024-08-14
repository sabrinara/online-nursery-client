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



const AllProductsTable = () => {
    const data = [
        {
            id: 1,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Leopard Lily",
            price: 200,
            rating: 2.5,
            category: "Indoor plant",
        },
        {
            id: 2,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Calathea Plant",
            price: 28,
            rating: 3.5,
            category: "Indoor plant",
        },
        {
            id: 3,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Spring Plant",
            price: 10,
            rating: 1.55,
            category: "Indoor plant",
        },
        {
            id: 4,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 50,
            rating: 5,
            category: "Gift plant",
        },
        {
            id: 5,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 20,
            rating: 5,
            category: "Indoor plant",
        },
        {
            id: 6,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 25,
            rating: 5,
            category: "Office plant",
        },
        {
            id: 7,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 40,
            rating: 1,
            category: "Outdoor plant",
        },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortByRating, setSortByRating] = useState<boolean>(false);
    const [sortByPrice, setSortByPrice] = useState<boolean>(false);

    const itemsPerPage = 5;

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
        <div className="container w-full ">
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
                      <TableHead >
                        Delete
                        </TableHead>
                        <TableHead >Edit</TableHead>
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
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-24 h-24 object-cover"
                                />
                            </TableCell>
                            <TableCell>{item.rating}</TableCell>
                            <TableCell className="">
                            <AiFillDelete className="text-red-500 "/>
                            </TableCell>
                            <TableCell >
                                <CiEdit></CiEdit>
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
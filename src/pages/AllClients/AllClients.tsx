import { useGetOrdersQuery } from "@/redux/api/api";
import { TOrders } from "@/types";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const AllClients = () => {
    const { data, isLoading } = useGetOrdersQuery([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOrder, setSelectedOrder] = useState<TOrders | null>(null); // Store selected order data
    const itemsPerPage = 8;

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen mt-10">
                <p className="text-4xl text-green-500">Loading...</p>
            </div>
        );
    }

    const { data: orders } = data || {};
    const totalItems = orders?.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginatedOrders = orders?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleClick = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const viewOrderDetails = (order: TOrders) => {
        setSelectedOrder(order);
    };

    const closeModal = () => {
        setSelectedOrder(null);
    };

    return (
        <div className="p-6">
            {selectedOrder && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={closeModal}
                >
                    <div
                        className="bg-transparent backdrop-blur-md p-10 rounded-none max-w-md w-full text-green-50"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <img
                            src={selectedOrder.userImage}
                            alt="User"
                            className="w-full h-80 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-2xl font-bold mb-2">{selectedOrder.name}</h2>
                        <p className="text-lg mb-1"><strong>Email:</strong> {selectedOrder.email}</p>
                        <p className="text-lg mb-1"><strong>Phone:</strong> {selectedOrder.phoneNumber}</p>
                        <p className="text-lg mb-1"><strong>Address:</strong> {selectedOrder.address}</p>
                        <button
                            className="absolute top-4 right-4 font-bold text-green-50"
                            onClick={closeModal}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
                <Masonry gutter="16px">
                    {paginatedOrders?.map((order: TOrders, index: number) => (
                        <div
                            key={order._id}
                            className="relative cursor-pointer"
                            onClick={() => viewOrderDetails(order)} // Open modal with order details
                        >
                            <img
                                src={order.userImage}
                                alt=""
                                style={{
                                    width: "100%",
                                    display: "block",
                                    height: index % 2 === 0 ? "280px" : "340px",
                                    objectFit: "cover",
                                    margin: "10px 0",
                                }}
                            />
                            <div className="absolute bottom-3 left-0 right-0 bg-green-900 bg-opacity-20 p-4 text-center">
                                <p className="text-white text-lg font-bold">{order.name}</p>
                            </div>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            <div className="my-6 md:my-10 flex justify-center">
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

export default AllClients;

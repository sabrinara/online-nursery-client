import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { VscOpenPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";

const CartCheckout = () => {
    const [cartItems, setCartItems] = useState([
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
        }
    ]);

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    };

    const handleQuantityChange = (id, action) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id
                ? {
                      ...item,
                      quantity:
                          action === "increment"
                              ? item.quantity + 1
                              : item.quantity - 1 > 0
                              ? item.quantity - 1
                              : 1,
                  }
                : item
        );
        setCartItems(updatedCart);
    };

    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="relative w-full h-[30vh] md:h-[60vh] bg-no-repeat bg-center bg-cover" 
    style={{ 
        backgroundImage: `url("./public/cart.jpg")` ,
       
        }}>
      <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
       
        <h2 className="hidden md:flex text-3xl md:text-5xl font-bold md:mb-2 text-green-950">
        Products In Cart.
        </h2>
        <h2 className="flex md:hidden text-3xl md:text-5xl font-bold mt-5 text-green-950">
       Cart
        </h2>
        <h5 className="font-jost text-sm md:text-lg font-medium md:pb-2 tracking-widest text-green-950 mt-2">That Helps to heal life.</h5>
       
      </div>
    </div>
            {/* <h1 className="text-2xl font-semibold text-center mb-6">Your Cart</h1> */}
            <div className="overflow-x-auto mt-10">
                <Table className="text-center">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left">Products</TableHead>
                            <TableHead className="text-left">Details</TableHead>
                            <TableHead className="text-left">Remove</TableHead>
                            <TableHead className="text-center">Quantity</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                           
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <TableRow key={item.id} className="border-b">
                                    <TableCell className="flex items-center space-x-4">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="w-16 h-16 object-cover"
                                        />
                                        <span className="font-medium">{item.title}</span>
                                    </TableCell>
                                    <TableCell className="text-left">
                                       <Link to={`/allproducts/${item.id}`}>
                                            < VscOpenPreview className="text-xl  " title="View Details" />
                                        </Link>
                                        </TableCell>
                                    <TableCell className="text-left">
                                        <AiFillDelete
                                            className="text-red-600 cursor-pointer"
                                            onClick={() => handleRemoveItem(item.id)}
                                        />
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <div className="flex items-center justify-center space-x-2">
                                            <button
                                                onClick={() =>
                                                    handleQuantityChange(item.id, "decrement")
                                                }
                                                className="px-2 py-1 border border-gray-300 rounded"
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    handleQuantityChange(item.id, "increment")
                                                }
                                                className="px-2 py-1 border border-gray-300 rounded"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </TableCell>

                                    <TableCell className="text-right">${item.price}</TableCell>
                                    <TableCell className="text-right">
                                        ${item.price * item.quantity}
                                    </TableCell>
                                   
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-4">
                                    Your cart is empty.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Cart Total and Checkout Button */}
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-lg font-semibold">
                    Total: ${calculateTotal().toFixed(2)}
                </div>
              <Link to="/payments">
              <button className="mt-4 md:mt-0 bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700">
                    Proceed to Checkout
                </button>
              </Link>
            </div>
        </div>
    );
};

export default CartCheckout;

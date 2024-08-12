import ProductCard from "../AllCard/ProductCard";


const TopProducts = () => {
    return (
        <div className="my-10 md:my-16">
            <div>
            <h2 className="text-2xl my-4 md:text-4xl font-bold text-center ">Best selling <span className="text-green-600">Products</span></h2>
            {/* <h5 className="text-base md:text-xl mt-6  mb-2 font-bold text-center">Our top demanding products</h5> */}
            <hr className="border-2 border-green-600 w-2/12 mx-auto"/>
            </div>

            <ProductCard />
        </div>
    );
};

export default TopProducts;
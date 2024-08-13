import { Button } from "@/components/ui/button";

const AllProducts = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] bg-no-repeat bg-center bg-cover" 
    style={{ 
        backgroundImage: `url("https://gabtor-store-demo.myshopify.com/cdn/shop/files/collection.jpg?v=1662605082")` ,
     
        }}>
      <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
       
        <h2 className="text-3xl md:text-6xl font-bold md:mb-2 text-green-50">
        Products
        </h2>
        <h5 className="font-jost text-sm md:text-lg font-medium md:pb-2 tracking-widest text-green-100 mt-2">That Helps to heal life.</h5>
       
      </div>
    </div>
  );
};

export default AllProducts;

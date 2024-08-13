import { Button } from "@/components/ui/button";

const AllProducts = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] bg-no-repeat bg-center bg-cover" 
    style={{ 
        backgroundImage: `url("https://gabtor-store-demo.myshopify.com/cdn/shop/files/collection.jpg?v=1662605082")` ,
     
        }}>
      <div className="absolute flex flex-col items-center justify-center left-1/3 bottom-10  md:bottom-28   ">
        <h5 className="font-jost text-xs md:text-lg font-medium md:pb-2 tracking-widest text-green-700">The  Garden</h5>
        <h2 className="text-xl md:text-6xl font-bold md:mb-2 text-green-100">
        Deliciosa Plant
        </h2>
        <p className="text-xs md:text-base font-medium md:mt-4 text-white">
        It is a long established fact that a reader will be <br/> distracted by the readable content
        </p>
        <Button className="border-2  border-white text-white text-xs md:text-base px-[6px] md:px-6 py-0 md:py-6 font-bold rounded-none bg-transparent  mt-2 md:mt-4 hover:bg-green-950 hover:text-white">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default AllProducts;

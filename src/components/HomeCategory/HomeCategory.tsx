
import CategoryCard from '../AllCard/CategoryCard';

const HomeCategory = () => {
    return (
        <div className="my-10 md:my-16">
        <div>
        <h2 className="text-2xl md:text-4xl font-bold my-4 text-center ">Some Propular <span className="text-green-600">Categories</span></h2>
        {/* <h5 className="text-base md:text-xl mt-6  mb-2 font-bold text-center">Our top selling products</h5> */}
        <hr className="border-2 border-green-800 w-5/12 md:w-1/12 mx-auto mb-10"/>
        </div>

        <CategoryCard />
    </div>
    );
};

export default HomeCategory;
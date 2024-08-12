import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MosaicImageGallery = () => {
    const [view, setView] = useState(null);

    const data = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            name: "image 1"
        },
        {
            id: 2,
            name: "image 2",
            image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 3,
            name: "image 3",
            image: "https://images.unsplash.com/photo-1553830591-2f39e38a013c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 4,
            name: "image 4",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 5,
            name: "image 5",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHx1c2VyfGVufDB8fDB8fHww"
        },
        {
            id: 6,
            name: "image 6",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 7,
            name: "image 7",
            image: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 8,
            name: "image 8",
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHx1c2VyfGVufDB8fDB8fHww"
        },
        {
            id: 9,
            name: "image 9",
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHx1c2VyfGVufDB8fDB8fHww"
        },
        {
            id: 10,
            name: "image 6",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
        }
    ];

    const viewImage = (img) => {
        setView(img);
    };

    const closeModal = () => {
        setView(null);
    };

    return (
        <div className="my-4 md:my-10">
            <div>
                <h2 className="text-2xl my-4 md:text-4xl font-bold text-center ">Our Happy <span className="text-green-600">Client's</span></h2>
                {/* <h5 className="text-base md:text-xl mt-6  mb-2 font-bold text-center">Our top demanding products</h5> */}
                <hr className="border-2 border-green-600 w-5/12 md:w-1/12 mx-auto" />
            </div>

            {view && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
                    <div className="relative">
                        <img src={view} alt="Full view" className="max-h-screen max-w-screen rounded-xl" />
                        <button className="absolute top-0 right-2 m-4 font-bold text-green-50" onClick={closeModal}>X</button>
                    </div>
                </div>
            )}
            <div className="py-10">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4, 1500: 5 }}
                >
                    <Masonry gutter="24px" className="">
                        {data.slice(0, 7).map((item, index) => {

                            if (index % 2 === 0) {
                                return (
                                    <div key={item.id} className="flex flex-col space-y-2 ">
                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt=""
                                                style={{
                                                    width: "100%",
                                                    display: "block",
                                                    height: index % 4 === 0 ? "300px" : "200px",
                                                    objectFit: "cover",
                                                    margin: "10px 0",
                                                }}
                                                onClick={() => viewImage(item.image)}
                                            />
                                            <div className="absolute bottom-3 left-0 right-0 bg-green-900 bg-opacity-20 p-4 text-center">
                                                <p className="text-white text-lg font-bold">{item.name}</p>
                                            </div>
                                        </div>
                                        {data[index + 1] && (
                                            <div className="relative">
                                                <img
                                                    src={data[index + 1].image}
                                                    alt=""
                                                    style={{
                                                        width: "100%",
                                                        display: "block",
                                                        height: index % 4 === 0 ? "200px" : "300px",
                                                        objectFit: "cover",
                                                    }}
                                                    onClick={() => viewImage(data[index + 1].image)}
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 bg-green-900 bg-opacity-20 p-4 text-center">
                                                    <p className="text-white text-lg font-bold">{data[index + 1].name}</p>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                );
                            }
                            return null;
                        })}
                    </Masonry>

                </ResponsiveMasonry>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 mb-16 hover:animate-wobble">
                <button className="relative flex items-center justify-center border-2 border-green-800 text-green-900  px-6 py-3 rounded-full w-20 h-20 bg-white shadow-lg hover:bg-green-50 transition duration-300">
                    
                    
                </button>
                <h1 className="absolute font-semibold text-xl  ml-6 bg-white py-1">
                        View Our More Client's
                    </h1>
                <FaArrowRight className="  text-green-900 text-lg mt-1 ml-40" />
            </div>
        </div>
    );
};

export default MosaicImageGallery;

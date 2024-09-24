

const Loading = () => {
    return (
        <div>
             <div className="flex flex-col justify-center items-center h-screen duration-5000">

            <div className="flex md:ml-5 items-center animate-bounce">
            <img src="./navlogo.png" className="h-32 mr-2" alt="" />
            {/* <h1  className=" text-3xl md:text-6xl font-bold bg-gradient-to-r from-orange-200 via-orange-500 to-orange-600 bg-clip-text text-transparent  ">FiTFlex</h1 > */}
          </div>
          <p className="text-3xl text-green-800 font-mono">Loading...</p>
            </div>
        
        </div>
    );
};

export default Loading;
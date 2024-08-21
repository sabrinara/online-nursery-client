import { FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
    return (
        <div>
           <div className="flex flex-col items-center justify-center mt-10">
            <FaQuestionCircle className="text-5xl"/>
            <h1 className="font-serif mt-2 text-5xl">Frequently Asked Questions</h1>
           </div>
        </div>
    );
};

export default FAQ;
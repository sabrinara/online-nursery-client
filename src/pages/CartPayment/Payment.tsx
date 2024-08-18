import Lottie from "lottie-react";
import payment from "../../../public/payment.json";
import { toast } from "sonner";

const Payment = () => {
   const handleSubmit = () => {
        
        toast.success("Payment Successfull");
    }
    return (
        <div className="flex flex-col md:flex-row items-center justify-center ">
            <div className="w-1/2">
                <Lottie animationData={payment} loop={true} />
            </div>
            <div className="w-1/2 flex flex-col gap-4 mx-10">
                <h1 className="text-3xl font-bold">Payment: $</h1>
                <input className="border border-green-900 px-3 py-2 rounded"  type="number" placeholder="Enter the Payment Amount"

                />
                <button onClick={handleSubmit} className="border border-green-900 px-3 py-2 rounded bg-green-800 text-white hover:bg-green-950 hover:text-white">
                    Done</button>
            </div>
        </div>
    );
};

export default Payment;
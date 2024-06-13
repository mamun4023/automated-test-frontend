import { useState } from "react";

export default function TermsAndCondition() {
    const [agree, setAgree] = useState(false)
    return (
        <div>
            <div className=" ">
                <input 
                    className=" w-full"
                    type="checkbox" 
                    onClick={()=>setAgree(prev=> !prev)}
                />
               <h1> Agree to Terms and Conditions </h1>
            </div>
            <div>
                <button 
                 disabled = {!agree}
                 onClick={()=>console.log("clicked")}
                className={` w-full  rounded-md mt-2 ${agree? "bg-orange-900 text-white p-2": "bg-orange-100 text-white p-2" }`}> Submit </button>
            </div>
        </div>
    );
}

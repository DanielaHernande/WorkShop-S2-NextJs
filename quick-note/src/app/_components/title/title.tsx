"use client"

import { useRouter } from "next/navigation";

const Title = () => {
    const router = useRouter();

    return ( 
        <div className="flex shadow-md  sm:justify-start md:justify-start lg:justify-center p-4">
            <h1 className="text-2xl font-bold text-[#B4C3CC] cursor-pointer" onClick={() => router.push("/")}>Quick-<span className="font-medium text-[#F4FEFE]">Note</span></h1>
        </div>
    );
}
 
export default Title;

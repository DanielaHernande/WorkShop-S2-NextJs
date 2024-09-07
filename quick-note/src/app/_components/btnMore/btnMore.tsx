"use client"

import { useRouter } from "next/navigation"

export default function BtnMore() {
    const router = useRouter()

    return (
        <div className="p-3 flex rounded-md text-wrap w-60 h-36 items-center" >
            <button className="bg-red-200 h-9 w-40 rounded-md font-semibold" onClick={() => router.push('/create')}>Crear una nueva nota</button>
        </div>
    );
};
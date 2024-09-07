"use client";

import { useRouter } from "next/navigation";

export default function BtnBack() {
  const router = useRouter();

  return (
    <button
      className="bg-red-600 text-white py-2 px-4 rounded p-4"
      onClick={() => router.push("/")}
    >
      Volver atras
    </button>
  );
}

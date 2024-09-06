import Image from "next/image";

export default function SideBar() {
  return (
    <div className="hidden bg-[#3e4046] w-1/6 h-dvh md:w-1/4 xl:w-1/6 sm:block rounded-r-lg">
      <div className="flex justify-center p-8">
        <Image
          src="/img2.png"
          alt="referencia"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
      </div>

      <div className="text-center">
        <h2 className="font-semibold">Nombre</h2>
        <h3 className="font-semibold">Mas opciones muy pronto</h3>
      </div>
    </div>
  );
}

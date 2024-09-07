export default function CardNote() {

    return (
        <div className="flex flex-wrap p-4">

            <div className="p-4 bg-[#5e585c] rounded-md text-wrap w-60 h-36">
                <h2 className="truncate font-bold text-2xl border-b border-b-[#30333A]">Titulo</h2>
                <p className="truncate text-base mt-3 border-b border-b-[#30333A]">Parar, respirar, contemplar</p>
                <span className="flex justify-end mt-3 text-gray-800">hora</span>
            </div>
        </div>
    );
};
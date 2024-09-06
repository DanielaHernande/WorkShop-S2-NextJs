export default async function CardNote() {

    const res = await fetch('http://localhost:8080/api/v1/notes');
    const json = await res.json;
    console.log(json);
    console.log("hola");

    return (
        <div className="flex flex-wrap p-4">

            <div className="p-4 bg-[#5e585c] rounded-md text-wrap w-60 h-36">
                <h2 className="truncate font-bold text-2xl border-b border-b-[#30333A]">Titulo</h2>
                <p className="truncate text-base mt-3 border-b border-b-[#30333A]">Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere, eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit amet.
                    elit. Quis, quasi!
                </p>
                <span className="flex justify-end mt-3 text-gray-800">hora</span>
            </div>
        </div>
    );
};
import BtnBack from "../_components/btnBack/btnBack";

export default function NoteDetail() {
  const note = {
    title: "Mi Nota Importante",
    content:
      "Esta es una nota creada para mostrar cómo funciona la página de notas sin rutas dinámicas.",
    time: "10:00 AM",
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl font-bold">{note.title}</h1>
        <p className="mt-4">{note.content}</p>
        <span className="text-gray-500">{note.time}</span>

        <div className="mt-4">
          <BtnBack />
        </div>
      </div>
    </>
  );
}

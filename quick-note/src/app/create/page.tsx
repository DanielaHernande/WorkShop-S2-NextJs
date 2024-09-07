"use client";

import { useState } from "react";
import { createNote } from "@/app/_api/notes";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await createNote({ title, content });
      alert("Nota creada exitosamente");
      setTitle("");
      setContent("");
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 p-4 ">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          className="border p-2 w-full rounded-lg"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenido"
          className="border p-2 w-full rounded-lg"
        ></textarea>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          >
            Crear Nota
          </button>

          <button
            className="bg-red-600 text-white py-2 px-4 rounded"
            onClick={() => router.push("/")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

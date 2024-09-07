// Get Id
export const getId = async (id: number) => {
    const res = await fetch('http://localhost:8080/api/v1/notes/${id}');

    if(!res.ok) throw new Error('Error al encontrar la Nota');

    return res.json();
};

// Get All
export const getAll = async (id: number) => {
    const res = await fetch('http://localhost:8080/api/v1/notes');

    if(!res.ok) throw new Error('Error al encontrar las Notas');

    return res.json();
};

// Create
export const createNote = async (note: {title: string; content: string}) => {

    const res = await fetch('http://localhost:8080/api/v1/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(note),
    });

    if(!res.ok) throw new Error('Error al crear la Nota');

    return res.json();
};

// Update
export const update = async (id: number, note: {title: string, content: string}) => {

    const res = await fetch('http://localhost:8080/api/v1/notes/${id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(note),
    });

    if(!res.ok) throw new Error('Error al actualizar la Nota');

    return res.json();
};

// Delete
const deleteNote = async (id: number) => {

    const res = await fetch('http://localhost:8080/api/v1/notes/${id}', {
        method: 'DELETE',
    });

    if(!res.ok) throw new Error('Error al eliminar la Nota');
};
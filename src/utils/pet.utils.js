const baseApiUrl = "http://127.0.0.1:8000/api/";


export const createOrUpdatePet = async (values) => {
    //console.log(values);
    const formData = new FormData();
    formData.append('photo', values.photo.file);

    const res = await fetch(`${baseApiUrl}pet?name=${values.name}&photo`, {
        method: 'POST',
        body: formData
    })
    const json = await res.json();

    console.log(json);
}

export const getPets = async (id = '') => {
    const res = await fetch(`
        ${baseApiUrl}pet/${id}
    `)
    const json = await res.json();

    return json.pets;
}

export const deletePet = async (id) => {
    await fetch(`${baseApiUrl}pet/{id}`, {
        method: 'DELETE'
    })
}
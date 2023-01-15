const baseApiUrl = "http://127.0.0.1:8000/api/";

export const createOrUpdatePet = async (values) => {
  //console.log(values);
  let photoParam = "";
  let idParam = values.id ? `id=${values.id}` : "";
  const formData = new FormData();
  if (typeof values.photo === "object") {
    formData.append("photo", values.photo.file);
    photoParam = "photo";
  }

  const res = await fetch(`${baseApiUrl}pet?name=${values.name}&${photoParam}&${idParam}`, {
    method: "POST",
    body: formData,
  });
  const json = await res.json();

  console.log(json);
};

export const getPets = async (id = "") => {
  const res = await fetch(`
        ${baseApiUrl}pet/${id}
    `);
  const json = await res.json();

  return json.pets;
};

export const deletePet = async (id) => {
  //console.log(`${baseApiUrl}pet/${id}`);
  await fetch(`${baseApiUrl}pet/${id}`, {
    method: "DELETE",
  });
};

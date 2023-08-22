const btnGetApi = document.querySelector('#btnGetApi');
const btnPost = document.querySelector('#btnPost');
const btnGetImg = document.querySelector('#btnGetImg');
const imageContainer = document.querySelector('#image');

// 1- Obtener Datos de una API
const json_placeholder = 'https://jsonplaceholder.typicode.com/posts';
const via_placeholder = 'https://via.placeholder.com/150';
const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';

const getFromApi = () => {

    fetch(json_placeholder,
        {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((post) => console.log(post.slice(0, 3)))
        .catch((error) => console.error(error))
}

btnGetApi.addEventListener('click', () => {
    getFromApi();
})

// 2- Enviar Datos al Servidor
const postToApi = (newPost) => {
    fetch(json_placeholder,
        {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((post) => console.log(post))
        .catch((error) => console.error(error))
}
btnPost.addEventListener('click', () => {
    const newPost = {
        title: 'Título',
        body: 'Cuerpo del POST'
    }
    postToApi(newPost);
})

// 3- Descargar una Imagen
const imgRender = (url) => `
    <img src=${url}>
`;
const downloadImageFromApi = () => {
    fetch(cors_anywhere + via_placeholder,
        {
            method: 'GET'
        })
        .then((response) => response.blob())
        .then((image) => {
            const objectUrl = URL.createObjectURL(image);
            imageContainer.innerHTML = imgRender(objectUrl)
        })
        .catch((error) => console.error(error))
}
btnGetImg.addEventListener('click', () => {
    downloadImageFromApi();
})
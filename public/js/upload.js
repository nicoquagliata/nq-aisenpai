// vars
title.innerHTML = "Header";
subtitle.innerHTML = "working on it";

// check remote api
const remoteApi = "https://q-starternodeapp.mybluemix.net/api/v1/classify/image";

function requestName() {
    let formData = new FormData();

    let fileField = document.querySelector('#inputImage');
    let divRespuesta = document.querySelector('#response');

    formData.append('imagen', fileField.files[0]);
    console.log(formData);

    fetch(remoteApi, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(async response => {
            //console.log('Respuesta reconocer():', response);
            //mostrarImagen(fileField);
            let persona = response.images[0].classifiers[0].classes[0].class;
            //let datos = await buscarDiscovery(persona);

            divRespuesta.innerHTML = `
                <div class="alert alert-info">Imagen subida con éxito, se reconoció a ${persona}</div>
            `
        })
        .catch(error => console.error('Error:', error));
}
# Exploración del Método Fetch en JavaScript

## Instrucciones:
En esta tarea, explorarán el método `fetch` en JavaScript, que es una interfaz moderna para realizar solicitudes de red y obtener recursos a través de la web. Deberás investigar tanto los aspectos teóricos como aplicarlos en ejemplos prácticos.

## Parte 1: Aspectos Teóricos
Investiga y responde las siguientes preguntas de manera detallada:
1. ¿Qué es el método `fetch` en JavaScript y cuál es su propósito en el desarrollo web?
2. Describe la sintaxis básica del método `fetch` y menciona los parámetros más
comunes que acepta.
3. Explica cómo se manejan las respuestas obtenidas mediante el método `fetch`,
incluyendo el uso de los métodos `json()`, `text()` y `blob()`.
4. ¿Cuál es la ventaja de utilizar `fetch` en comparación con enfoques tradicionales
como XMLHttpRequest?
5. Habla sobre la importancia de los encabezados (headers) en las solicitudes `fetch`.
¿En qué situaciones podrían ser útiles?

## Parte 2: Ejemplos Prácticos

#### Implementa los siguientes ejemplos utilizando el método `fetch`:
#### 1. Obtener Datos de una API:
Realiza una solicitud `GET` a la siguiente API de muestra y muestra por consola los primeros tres elementos del array obtenido: `https://jsonplaceholder.typicode.com/posts`
#### 2. Enviar Datos al Servidor:
Crea una solicitud `POST` a la misma API de muestra, enviando un objeto JSON con un título y un cuerpo de contenido. Muestra por consola la respuesta obtenida.
#### 3. Descargar una Imagen:
Realiza una solicitud `GET` para obtener una imagen de muestra desde esta URL: `https://via.placeholder.com/150`. Luego, muestra la imagen en una etiqueta `<img>` en tu página.
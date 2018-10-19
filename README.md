# RED SOCIAL: ConectApp

![replica](public/img/img003.png)

### Analisis Proyecto

ConectApp es una red social a nivel de curso, para agilizar el proceso de comunicación entre apoderados y profesores.

¿Por qué es necesario ésta red Social?
	
 Es sabido que actualmente, uno de los medios más eficaces, para lograr comunicación entre los apoderados de un mismo curso y profesores, es el grupos de wsp, pero...¿no son bien molestas todas las notificaciones a altas horas de la noche?, ¿llegar tarde a la conversación y estar perdido de todos los acuerdo?. Es por ello que  ha llegado Conectapp, que es una forma fácil de comunicación entre profesor/apoderador, de manera simple, intuitiva y directa.

 ¿qué nos diferencia del resto?

 Con conectapp, sólo podrás encontrar temas relacionados con la convivencia escolar,teniendo un amplio panorama de :
 -Reuniones de apoderados
 -Actividades
 -Salidas a terreno
 -Calendario de actividades
 -chat y mucho más.  
 Proyectando de ésta manera una red social al servicio de la comunidad escolar.
 Para más información al respecto, puede descargar directamente nuestra aplicacion, en la página web de GitHub: https://github.com/nahytar/scl-2018-05-bc-core-am-socialnetwork.
 App: https://red-social-lab-2018.firebaseapp.com/#.


 ## Hipotesis

 Nos dimos cuenta, que los apoderados poseen un sistema de comunicación externo que no satisface todas sus necesidades, a la hora de estar en conocimiento sobre las actividades del curso y/o del colegio.

##objetivo general

 Generar una plataforma mobile, que facilite la comunicación entre apoderados y profesor, vincular paginas de actividades con botones de contenidos, seleccionar dichos botones de contenidos, y que nos muestre la página estipulada, visualizando las diferentes plataformas desde un mismo HTML.

## Medios para la fabricación de la plataforma

 1.- Creación de un HTML, que contenga las diferentes pantallas a mostrar,(mediante un archivo .js, utilizamos una funcion para crear los display block y none, que se encargan de mostrar y ocultar las paginas seleccionadas).

 2.- Creación del chat, mediante la creacion de funciones en Js, muestran un listado de contactos, en donde se pueden enviar mensajes privados, como tambien sera posible, ver una pequeña notificacion(cambiara de color el usuario que envio dicho mensaje).

 3.- Creación de tablero(muro), mediante la creacion de funciones en Js, Podran publicar, más de un usuario a la vez, acceder a me gusta, eliminar publicaciones y subir imagenes.
    

### User Experience Design

## Usuario
Apoderados: Mujeres y hombres que desean estar informados de las actividades a realizar en los cursos de sus pupilos, y que quieran ser parte de la comunidad educativa.

Profesoras y profesores: Hombres y mujeres con un grado educativo de docente, que posean una jefatura.

## Cuáles son los objetivos de estos usarios en relación con el producto.

Objetivos: Lograr visualizar y manipular una app que les permita establecer una comunicación eficiente y ordenada con otros apoderados del curso.

## Cuáles son los datos más relevantes que el usuario quiere ver en la interfaz y por qué. Cómo los descubriste.
Datos relevantes: 
1.- Chatear entre padres / puesto que actualmente lo hacen por medio de wsp
2.- compartir información relevante para el curso( como actas de cuotas)/ actualmente se muestran en la reunión.
3.- Actividades y salidas a terreno / puesto que los alumnos olvidan estar pendiente de éstos temas.

(Datos extraidos mediante entrevista).

 
#### Sketch de la solución 

El scketch se realizó en base a los datos proporcionados por los diferentes usuarios, apoderados y profesores, desglosando la app entre las diferentes actividades, de las que querían tener conocimiento, para así proporcionar un estado de comodidad al usuario.

#### Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

 Para realizar las visualizaciones de nuestro proyecto, en formato de alta fidelidad, ocupamos 2 programas:
 Atomic.io: para hacer el responsive para formato de celular.
 Ai: para generar el formato web.
 
 Ambos protoripos fueron evaluados con apoderados y profesores, para asi validar nuestra hipotesis, colores e interfaz.


## Implementación de la Interfaz de Usuario (HTML/CSS/JS)

1. Generar una interfaz que cumpla con las necesidades de nuestros usuarios.
2. Permitir al usuario ingresar mediante correo, google o facebook.
3. Permitir al usuario seleccionar una pantalla de los botones de actividades.
4. Permitir al usuario acceder a cada una de las pantallas informativas, poder establecer comunicación.
5. desplegar acciones mediante boton de hamburguesas.
6. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops.
(datos de UX, en carpeta adjunta).
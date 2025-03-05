# Amigo-Secreto 🎁
![Portada_amigo_secreto](https://github.com/user-attachments/assets/c7071970-20c8-426f-9778-505e0a32c0dd)

Amigo Secreto |  Primer reto de Principiante en Programación de Alura Latam

Este es un proyecto (_Challenge 1_) que permite ingresar nombres de amigos y realizar un serteo aleatorio para determinar quién será el "amigo secreto".

# 📌 Descripción

El desafío está diseñado para poner en practica las habilidades en lógica de programacion vistas en los cursos de la formación.  La aplicación permite a los usuarios:

- Agregar nombres de amigos a una lista.

- Validar que los nombres ingresados sean correctos.

- Realizar un sorteo aleatorio para determinar quién es el "amigo secreto"

# 🚀  Tecnologías Utilizadas

-  HTML5: Estructura del sitio.

- CSS3: Estilos y diseño responsivo.

- JavaScript: Lógica para la validación de nombres y el sorteo.

  # 📂  Estructura del Proyecto

    📁 AmigoSecreto <br>
      │-- 📁 assets (Imágenes y recursos)\
      │-- 📄 index.html (Estructura del proyecto)\
      │-- 📄 style.css (Estilos y apariencia)\
      │-- 📄 app.js (Lógica de la aplicación)\
      │-- 📄 README.md (Este archivo)

  # 🛠️ Cómo Usarlo

1. Clona este repositorio en tu máquina local:

```
git clone https://github.com/lcas-cas/Amigo-Secreto.git
```
2. Abre el archivo `index.html` en tu navegador.
3. Escribe los nombres de los participantes y presiona "Añadir".
4. Cuando hayas ingresado todos los nombres, presiona "Sortear amigo".
5. La aplicación mostrará aleatoriamente quién es el "amigo secreto".

# 🎯 Funcionalidades

- ✔️ Agregar nombres de amigos a la lista.
- ✔️ Validar que los nombres ingresados sean correctos con expresiones regulares.
- ✔️ Mostrar la lista de nombres ingresados.
- ✔️ Validar que la lista de nombres no este vacía
- ✔️ Sortear aleatoriamente a un "amigo secreto".

# 🔧 Implementación Técnica

**Captura y validación de entrada**

- Se obtiene el valor del campo de entrada con `document.getElementById()`.

- Se valida que el campo no esté vacío; si lo está, se muestra un `alert` con el mensaje: "Por favor, inserte un nombre.".

- Si el valor es válido, se agrega al array `nombreAmigos usando` `.push()`.

- Se limpia el campo de entrada después de añadir el nombre.

# **Actualización de la lista de amigos**

- Se obtiene la lista usando `document.getElementById()`.

- Se limpia la lista antes de actualizar (`lista.innerHTML = ""`).

- Se recorre el array con un `for` y se crean elementos `<li>` con cada nombre agregado.

- Se añaden los elementos a la lista visible en la interfaz.


# **Sorteo del amigo secreto**

- Antes de realizar el sorteo, se valida que la lista no esté vacía.

- Se genera un índice aleatorio con `Math.random()` y `Math.floor()`.

- Se obtiene el nombre correspondiente en el array usando el índice aleatorio.

- Se actualiza el contenido en la interfaz con el nombre sorteado usando `document.getElementById()` e `innerHTML`.

# 🔧 Cosas por Mejorar

- 📱 Adaptabilidad móvil: Actualmente, la aplicación no está optimizada para dispositivos móviles. Se puede mejorar el diseño con CSS responsivo para que se adapte mejor a diferentes tamaños de pantalla.

- 🎨 Diseño y experiencia de usuario: Se pueden agregar estilos más atractivos y animaciones para mejorar la experiencia.

- 🔄 Reiniciar sorteo: Implementar una función para reiniciar el sorteo sin necesidad de recargar la página.











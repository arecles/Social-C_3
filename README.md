# Social-C_3
# Sistema Social-C

## 1. Introducción

Este sistema está dirigido para el público en general que busca un acceso rápido y fluido al paquete de mensajería rápida. Además de compartir publicaciones, comentar y crear grupos de interés.

### 1.1. Propósito

El propósito de este documento es describir el comportamiento del Sistema Social-C definiendo las especificaciones funcionales y no funcionales. El documento incluye documentación de casos de uso textual que describen las interacciones entre el usuario y el administrador con el sistema.

### 1.2. Alcance

Con Social-C, una red social en plataforma móvil, los usuarios podrán interactuar mediante publicaciones, comentarios y un chat. Además, podrán modificar sus perfiles.

### 1.3 Definiciones, acrónimos y abreviaturas

- RF: Requisitos Funcionales
- RNF: Requisitos No Funcionales

### 1.4 Referencias

[IEEE. 2008. “Especificación de Requisitos según el estándar de IEEE 830”](https://www.fdi.ucm.es/profesor/gmendez/docs/is0809/ieee830.pdf)

## 2. Descripción general

En esta sección se presentan las características del sistema, incluyendo sus funcionalidades, agentes de uso y restricciones.

### 2.1. Perspectiva del producto

El sistema Social-C será implementado para ser navegado en una plataforma móvil, lo que permitirá un acceso y uso sencillos por parte del usuario.

### 2.2. Funcionalidad del producto

El sistema debe:

- Permitir chatear con otros participantes con el rol de usuario.
- Moderar las publicaciones y usuarios que infrinjan las reglas del sitio con el rol de administrador.
- Permitir almacenar y modificar publicaciones, comentarios y perfiles.
- Notificar al usuario sobre algún evento ocurrido en su cuenta (mensajes, publicaciones, anuncios del sistema).

### 2.3. Características de los usuarios

- **Administrador:** Encargado de moderar (prohibir, eliminar) publicaciones y usuarios.
- **Usuario:** Realizar cambios (publicar, comentar, editar, chatear) y navegar.

### 2.4. Restricciones

- Interfaz para ser usada con conexión a internet.
- El sistema se diseñará con arquitectura MVP (Model View Controller).
- Lenguajes y tecnologías: Android, Kotlin, Frameworks.
- Sistema de mensajería de Google Gmail.

### 2.5. Suposiciones y dependencias

- Se asume que los requisitos descritos son estables dentro del alcance del sistema.
- Los equipos en los que se ejecutará el sistema deben cumplir con los requisitos tecnológicos del sistema para su correcto funcionamiento.

## 3. Requisitos específicos
### 3.1. Requisitos Funcionales 

| Designación                | RF01                       |
|----------------------------|----------------------------|
| Nombre                     | Login                      |
| Prioridad                  | Alta                       |
| Descripción                | Permite iniciar sesión mediante un nombre de usuario y contraseña. |
| Acontecimiento desencadenante | El usuario desea interactuar con el sistema. |
| Actores                    | Usuario, Administrador     |
| Pre-condición              | El usuario/administrador debe estar registrado. |
| Post-condición             | Validar el login RF02.     |
| Resultado                  | Inicio de sesión en el sistema |
| Escenario principal        | El usuario/administrador ingresa su nombre de usuario y contraseña. El usuario/administrador valida su registro con un captcha. El sistema valida los datos ingresados. El usuario/administrador entra al sistema.|                          
| Escenario alternativo      | El usuario/administrador ingresa su nombre de usuario o contraseña incorrecta. 1a1.  El sistema notifica los datos incorrectos al usuario/administrador. El usuario/administrador no resuelve de manera correcta el captcha. 2a1.  El sistema notifica error de login. |
| Escenarios de excepción    | El usuario/administrador no ingresa ningún dato. |


| Designación                | RF03                       |
|----------------------------|----------------------------|
| Nombre                     | Registro                   |
| Prioridad                  | Alta                       |
| Descripción                | Permite al usuario registrar una cuenta. |
| Acontecimiento desencadenante | El usuario desea interactuar con el sistema. |
| Actores                    | Usuario                    |
| Pre-condición              | El usuario no tiene una cuenta. |
| Post-condición             | Validar registro RF04.     |
| Resultado                  | El usuario tiene una cuenta. |
| Escenario principal        | El usuario ingresa al registro. Se llenan los campos correspondientes. El sistema valida el registro. El usuario tiene una cuenta nueva. |
| Escenario alternativo      | El usuario completa de manera incorrecta los campos. 1a1. El sistema notifica error al llenar campos. El usuario ingresa un correo o número de teléfono inaccesibles. 2a1. El sistema no procesa el registro. |
| Escenarios de excepción    | El usuario completa los campos en blanco. |


| Designación                | RF05                       |
|----------------------------|----------------------------|
| Nombre                     | Chatear Usuario            |
| Prioridad                  | Alta                       |
| Descripción                | Permite interactuar directamente con uno o varios usuarios. |
| Acontecimiento desencadenante | El usuario desea interactuar con otro usuario en un chat. |
| Actores                    | Usuario                    |
| Pre-condición              | El permiso de chat entre usuarios concedido. |
| Post-condición             | Envío y recepción de mensajes. |
| Resultado                  | El usuario interactúa mediante mensajes con otro usuario. |
| Escenario principal        | El usuario selecciona el apartado de “chats”. El usuario selecciona el usuario para chatear. El sistema notifica el estado de conexión del otro usuario. El usuario envía un mensaje. |
| Escenario alternativo      | El sistema detecta que el permiso de chat entre usuarios no está concedido. 3a1. El sistema notifica los pasos para poder chatear. |
| Escenarios de excepción    | El usuario abandona el sistema. |


| Designación                | RF06                       |
|----------------------------|----------------------------|
| Nombre                     | Enviar y recibir mensaje   |
| Prioridad                  | Alta                       |
| Descripción                | Permite la comunicación directa de un usuario con otro a través del chat. |
| Acontecimiento desencadenante | El usuario desea iniciar una conversación/abrir chat. |
| Actores                    | Usuario                    |
| Pre-condición              | El permiso de chat entre usuarios concedido. Módulo de chat abierto.     |
| Post-condición             | Ninguna.                   |
| Resultado                  | El usuario interactúa mediante mensajes con otro usuario. |
| Escenario principal        | El usuario recibe el mensaje de otro usuario. El usuario envía el mensaje al otro usuario. El sistema verifica el envío y la llegada del mensaje. El otro usuario recibe el mensaje. |
| Escenario alternativo      | El sistema no detecta la llegada o el envío del mensaje. 3a1. El sistema notifica al usuario con “Error de envío/llegada” |
| Escenarios de excepción    | El usuario abandona el sistema. |


### 3.2. Requisitos No Funcionales 

| Designación           | RNF01                      |
|-----------------------|-----------------------------|
| Nombre                | Interfaz del sistema       |
| Prioridad             | Alta                        |
| Características       | El sistema presentará una interfaz de usuario sencilla, y con pocos elementos decorativos, para permitir una buena interacción entre usuario e interfaz. |
| Descripción           | La interfaz debe ser lo menos compleja posible. |


| Designación           | RNF02                      |
|-----------------------|-----------------------------|
| Nombre                | Compatibilidad             |
| Prioridad             | Alta                        |
| Características       | El sistema proporcionará un entorno adecuado para los distintos navegadores y dispositivos. |
| Descripción           | El sistema debe ser capaz de adaptarse a todo tipo de medio. |


| Designación           | RNF03                      |
|-----------------------|-----------------------------|
| Nombre                | Seguridad                  |
| Prioridad             | Alta                        |
| Características       | La seguridad del sistema se enfocará en proteger información crítica, valiosa o sensible para la organización. |
| Descripción           | El sistema garantiza seguridad con respecto a los datos del usuario que se impliquen en el sistema. |


| Designación           | RNF04                      |
|-----------------------|-----------------------------|
| Nombre                | Desempeño                  |
| Prioridad             | Alta                        |
| Características       | El sistema garantiza la interacción de los usuarios de manera eficiente. |
| Descripción           | El sistema debe almacenar las interacciones de los usuarios (publicaciones, comentarios, perfiles, chats) sin que afecte al tiempo de respuesta. |








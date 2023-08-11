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




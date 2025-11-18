# ejercicio-Api-restfull

Este proyecto es una API REST construida con Node.js, Express, TypeScript y MongoDB (Mongoose).
Permite gestionar una colección de libros mediante operaciones CRUD (crear, leer, actualizar y eliminar).

📚 La API incluye:

Conexión a MongoDB usando Mongoose

Rutas organizadas en un router independiente

Controladores separados

Validación de ObjectId

Respuestas estructuradas con success, message y data

Manejo básico de errores

🚀 Tecnologías utilizadas

Node.js
Express
TypeScript
MongoDB + Mongoose
dotenv
Cors

📦 Instalación y ejecución del proyecto

1️⃣ Clonar el repositorio
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo


2️⃣ Instalar dependencias
npm install

3️⃣ Crear archivo .env
En la raíz del proyecto crear un archivo .env con:

PORT=4324290
URI_DB=tu_conexion_a_mongodb

4️⃣ Iniciar el servidor en modo desarrollo con:
npm run dev



📚 Endpoints de la API

GET    | /books       | Obtiene todos los libros
GET    | /books/:id   | Obtiene un libro por ID
POST   | /books       | Crea un nuevo libro
PATCH  | /books/:id   | Actualiza un libro
DELETE | /books/:id   | Elimina un libro



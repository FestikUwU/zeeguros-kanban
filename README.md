# Zeeguros Kanban App

Aplicación web tipo Kanban creada como prueba técnica para Zeeguros.

Permite gestionar tareas en columnas To Do / Doing / Done con autenticación básica.

---

## 🚀 Demo

Frontend: https://zeeguros-kanban.vercel.app
Backend API: https://zeeguros-kanban-2.onrender.com

Credenciales:
Email: [test@test.com](mailto:test@test.com)
Password: 1234

## ⚠ Nota importante

El backend está desplegado en Render con plan gratuito.
Puede tardar 20-40 segundos en responder la primera vez.

Si la app no carga, abre primero:

https://zeeguros-kanban-2.onrender.com/tasks

Después vuelve a la app frontend.


---

## 🛠 Tecnologías

Frontend:

* Angular standalone
* TypeScript
* CSS

Backend:

* Node.js
* Express
* SQLite

Deploy:

* Render (backend)
* Vercel (frontend)

---

## ▶ Cómo ejecutar en local

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

```bash
cd frontend
npm install
ng serve
```

Abrir http://localhost:4200

---

## ✅ Funcionalidades

* Login con email y password
* Crear tarea
* Editar estado
* Mover entre columnas
* Eliminar tarea
* Persistencia en base de datos SQL

---

## ⚠ Limitaciones

* Autenticación básica sin JWT
* Sin drag & drop
* Sin tests automáticos

---

## 🤖 Uso de AI

Se utilizó ChatGPT para:

* Explicaciones técnicas
* Ayuda con Angular y Express
* Debug de deploy

Todo el código fue revisado y entendido antes de usar.

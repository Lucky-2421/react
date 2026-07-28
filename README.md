# Employee Management App (React + json-server)

Ye ek React app hai jo employees ki list dikhata hai aur Add / Update / Delete / View (Info)
ka poora CRUD support karta hai. Backend ke liye **json-server** use hota hai jo `db.json`
file ko database ki tarah serve karta hai.

## Project Structure
- `src/components/list.js` – Employee list page (`/`)
- `src/components/AddEmployee.js` – Add new employee (`/add`)
- `src/components/UpdateEmployee.js` – Update employee (`/update/:id`)
- `src/components/ViewEmployee.js` – Employee details (`/view/:id`)
- `src/services/employeeService.js` – Axios API calls (talks to `http://localhost:4000/employees`)
- `db.json` – Fake database used by json-server

## Setup / Run karne ka tarika

1. Dependencies install karein:
   ```
   npm install
   ```

2. **Do terminals** khol lein, kyunki 2 servers chalane honge:

   **Terminal 1 – Backend API (json-server), port 4000 par:**
   ```
   npm run server
   ```
   Ye `http://localhost:4000/employees` par API serve karega.

   **Terminal 2 – React app, port 3000 par:**
   ```
   npm start
   ```
   Browser me `http://localhost:3000` khul jayega.

> Note: Pehle is project me React app aur API dono `localhost:3000` use kar rahe the,
> jisse conflict ho raha tha. Ab API `port 4000` par chalta hai (json-server ke through)
> aur React app `port 3000` par — dono alag-alag chalte hain.

## Features
- Employee list (GET)
- Add Employee (POST) – "+ Add Employee" button se
- Update Employee (PUT) – "Update" button se
- Delete Employee (DELETE) – "Delete" button se (confirm dialog ke saath)
- View Info (GET by id) – "Info" button se

## Available Scripts
- `npm start` – React dev server (port 3000)
- `npm run server` – json-server backend (port 4000)
- `npm run build` – Production build
- `npm test` – Tests run karta hai

# TourHive

🚧 In-Progress Guided Learning Project

TourHive is a REST API and small static site built while following  
Jonas Schmedtmann’s **“Node.js, Express, MongoDB & More – The Complete Bootcamp”**.

This repository represents a **guided learning project**, built step-by-step
to understand how a real-world backend API is structured and developed.
The project is **not finished yet** and will evolve as the course progresses.

---

## 📌 Project Status

- Actively under development
- Core tour API functionality implemented
- User features and advanced backend concepts coming later

---

## 🧩 What’s Implemented Right Now

### Tech Stack

- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB (Atlas)
- **Utilities**: dotenv, morgan

### API Routes

#### Tours (`/api/v1/tours`)

- `GET /` — list tours with filtering, sorting, field limiting, and pagination
- `POST /` — create a new tour
- `GET /:id` — get a tour by ID
- `PATCH /:id` — update a tour
- `DELETE /:id` — delete a tour

#### Users (`/api/v1/users`)

- Routes exist (`GET /`, `POST /`, `PATCH /`, `DELETE /`)
- Currently return placeholder responses
- No authentication or user logic implemented yet

### Data Model

- **Tour model** with fields such as:
  - `name`, `duration`, `maxGroupSize`, `difficulty`
  - `ratingsAverage`, `ratingsQuantity`, `price`
  - `summary`, `description`
  - `imageCover`, `images`
  - `createdAt`, `startDates`

### Static Frontend

- Static files served from the `public/` directory
- Includes:
  - tours overview page
  - single tour detail page
- Pages are currently static and **not yet connected to the API**

### Development Utilities

- Script located at `dev-data/data/import-dev-data.js`
- Used to import or delete sample tour data in MongoDB:
  ```bash
  node import-dev-data.js --import
  node import-dev-data.js --delete
  ```

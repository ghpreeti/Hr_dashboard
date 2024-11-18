# HR Dashboard - MERN Stack Application

A full-stack web application for managing HR, job postings, and student applications, built using the MERN (MongoDB, Express, React, Node.js) stack.

---

## Features

### **For HR**
- Register/Login with company details.
- Manage job postings.
- Upload and manage resumes of candidates.

### **For Students**
- Register/Login to their profiles.
- Browse and apply for jobs.
- Track application status.

### **Backend**
- User authentication (JWT-based).
- Role-based functionality for HR and students.
- RESTful API endpoints.
- Secure file uploads using `multer`.

### **Frontend**
- User-friendly dashboard for HRs and students.
- Responsive design with modern UI.

---

## Tech Stack

### **Frontend**
- React
- Axios
- CSS/Tailwind CSS

### **Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

### **Middleware**
- JWT for authentication.
- Multer for file uploads.

---

## Installation and Setup

### Prerequisites
- Node.js installed on your system.
- MongoDB server (local or cloud-based).

### **Backend Setup**
1. Clone the repository and navigate to the `backend` folder:
    ```bash
    git clone <repository_url>
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and configure the following variables:
    ```env
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### **Frontend Setup**
1. Navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `frontend` directory and configure the following variables:
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

4. Start the React development server:
    ```bash
    npm start
    ```

---

## Directory Structure

### Backend

---

## API Endpoints

### **Auth Routes**
- `POST /api/auth/signup` - Register HR
- `POST /api/auth/login` - HR login

### **HR Routes**
- `GET /api/hr/jobs` - Get all job postings
- `POST /api/hr/jobs` - Create a new job
- `PUT /api/hr/jobs/:id` - Update a job
- `DELETE /api/hr/jobs/:id` - Delete a job

### **Student Routes**
- `GET /api/student/profile` - Get student profile
- `PUT /api/student/profile` - Update student profile
- `POST /api/student/apply` - Apply for a job

---

## Deployment

### **Backend**
1. Deploy the backend to platforms like Heroku, Render, or AWS.
2. Ensure the `MONGO_URI` and `JWT_SECRET` are configured in the deployment environment.

### **Frontend**
1. Build the React app:
    ```bash
    npm run build
    ```
2. Deploy the `build` folder to platforms like Vercel or Netlify.
3. Update the `REACT_APP_API_URL` to point to the live backend.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Added feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Create a pull request.

---


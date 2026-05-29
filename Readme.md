# GitHub Profile Analyzer API 🚀

A backend API that fetches GitHub user data using the GitHub API and stores it in a MySQL database for analysis and retrieval.

---

## 🛠 Tech Stack
![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Express](https://img.shields.io/badge/Express.js-black)
![MySQL](https://img.shields.io/badge/MySQL-blue)
- Node.js
- Express.js
- MySQL
- GitHub REST API

---

## 📌 Features

- Fetch GitHub user data by username
- Store profiles in MySQL database
- Prevent duplicate entries using UNIQUE constraint
- Retrieve all stored profiles
- Search profiles using partial username match
- Retrieve profile by ID
- Pagination support (LIMIT & OFFSET)
- RESTful API design with clean MVC architecture
- Clean error handling system (ApiError / ApiResponse)

---

## 📡 API Endpoints

### 1. Analyze GitHub User (Fetch + Store)
```
GET /api/v1/github/analyze/:username
```
Example:
```
GET /api/v1/github/analyze/octocat
```
---

### 2. Get All Profiles (with pagination)
```
GET /api/v1/profiles?page=1&limit=5
```
#### Query Params

| Param | Type   | Description              |
|------|--------|--------------------------|
| page | number | Page number (default: 1) |
| limit| number | Items per page (default: 5) |

---
### 3. 🔎 Search Profiles by Username
```
GET /api/v1/profiles/search?username=
```
Example:
```
GET /api/v1/profiles/search?username=octo
```
--- 

### 4. Get Profile by ID
```
GET /api/v1/profiles/:id
```
Example:
```
GET /api/v1/profiles/1
```
---

## 🗄 Database Schema (MySQL)
```sql
CREATE TABLE profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    followers INT,
    following INT,
    public_repos INT,
    avatar_url TEXT,
    profile_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
---

## ⚙️ Setup Instructions

### 1. Clone repo
```bash
git clone <your-repo-url>
cd github-profile-analyzer
```
---

### 2. Install dependencies
```bash
npm install
```
---

### 3. Create .env file
```
DB_USER=root
DB_PASSWORD=
DB_NAME=github_analyzer
PORT=8000
```
---

### 4. Run server
```bash
npm run dev
```
---

## 📦 Project Flow

GitHub API → Service Layer → Controller → MySQL DB → API Response

---

## 🧠 Concepts Covered

- REST API design
- External API integration (GitHub)
- MySQL CRUD operations
- Error handling with custom classes
- SQL LIKE operator for partial search
- Pagination using LIMIT & OFFSET
- Backend architecture structure

---

## 🔥 Example Response
```json
{
  "statusCode": 200,
  "data": {
    "username": "octocat",
    "followers": 22786,
    "following": 9,
    "public_repos": 8,
    "avatar_url": "...",
    "profile_url": "..."
  },
  "message": "User data fetched successfully",
  "success": true
}
```
---

## 🚀 Future Improvements

- Add caching (Redis)
- Add authentication (JWT)
- Add rate limiting
- Add search & sorting for profiles

---
## 📌 Highlights

- Built a real-world API with GitHub API integration
- Designed RESTful backend with MySQL
- Implemented search, pagination, and error handling

---

## 👨‍💻 Author
**Aarya Vikas Boya** 
- Full-Stack Developer (MERN Stack)  
Backend focused on API design & database systems

Built as a task & backend learning project focused on real-world API design and database integration.
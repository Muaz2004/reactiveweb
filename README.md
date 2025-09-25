# Realp Project

Short description: A charity-based web application for a volunteer organization. The project combines a **React frontend** with a **Django + DRF backend**, providing a flexible website for volunteering, donations, and general information pages.

## Features

### Frontend (React)
- Modern, responsive UI using React
- Pages: Home, About Us, Contact Us
- Volunteer project listings
- Donation forms and integration
- Interactive components and navigation

### Backend (Django + DRF)
- REST API endpoints for projects, donations, and volunteers
- User authentication and authorization
- Data handling for volunteers, donations, and projects
- Integration with frontend React app

## Tech Stack
- Frontend: React, HTML, CSS, JavaScript
- Backend: Python, Django, Django REST Framework (DRF), SQLite
- Optional: Additional libraries for styling or API calls

## How to Run

### Backend
1. Navigate to backend folder (`jenet`):
   ```bash
   cd jenet

pip install -r requirements.txt
Apply migrations:

bash
Copy code
python manage.py migrate
Run server:

bash
Copy code
python manage.py runserver
Backend API is available at http://localhost:8000

Frontend
Navigate to frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Run development server:

bash
Copy code
npm start
Open browser at http://localhost:3000 to view frontend.

Notes
Designed for volunteer organizations to manage projects, donations, and general information.

Flexible pages like Home, About Us, Contact Us, and project/donation sections.

Integration between frontend and backend allows real-time updates and dynamic content.

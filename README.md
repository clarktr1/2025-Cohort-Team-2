# Smart Living

Smart Living is a platform designed to improve apartment complex management by enhancing tenant experience and retention. It provides tools for both landlords and tenants to efficiently manage rental tasks, community functions, and day-to-day interactions.

---

## Table of Contents
1. [Overview](#overview)  
2. [Features](#features)  
3. [Technical Details](#technical-details)  
4. [Getting Started](#getting-started)  
5. [Running the Project Locally](#running-the-project-locally)  
6. [Contributing](#contributing)  
7. [Project Team](#project-team)  

---

## Overview

- **Goal**: Streamline apartment complex management by digitizing leases, providing secure access controls, simplifying complaint reporting, and improving communication.  
- **Audience**: Landlords (apartment managers) and tenants.

### Project Objectives
- Increase tenant satisfaction through quick communication and complaint resolution.
- Reduce administrative workload for landlords by automating tasks such as lease management.
- Enhance security and convenience with smart key access and digital management of package lockers and parking.

---

## Features

1. **Digital Lease Management**  
   - Landlords can create, manage, and renew leases.  
   - Tenants can digitally sign lease agreements, reducing paperwork.

2. **Access Controls**  
   - Landlords and tenants can generate temporary digital keys for guests.  
   - Integrates with smart package lockers for secure package pickups.  
   - Temporary parking permits can be issued via the app.

3. **Complaint Management**  
   - Tenants can report disturbances with a single tap.  
   - Landlords can address complaints by sending individual notifications to relevant parties.

4. **Communication Tools**  
   - Landlords can broadcast community-wide alerts and announcements.  
   - Tenants receive real-time notifications for updates or emergencies.

---

## Technical Details

- **Frontend**  
  - Built with [React](https://reactjs.org/) + [Vite](https://vitejs.dev/).  
  - Deployed on [Netlify](https://www.netlify.com/) for both development and production.
  - **Development Frontend**: [dsd-team2-dev.netlify.app](https://dsd-team2-dev.netlify.app/)  
  - **Production Frontend**: [dsd-team2.netlify.app](https://dsd-team2.netlify.app/)

- **Backend**  
  - Developed using [Python](https://www.python.org/) and [Django](https://www.djangoproject.com/).  
  - Hosted on [Render](https://render.com/) for production.
  - **Production Backend**: [two025-cohort-team-2.onrender.com](https://two025-cohort-team-2.onrender.com/)


- **Database**:  
  - **SQLite** (Django’s default).

---

## Getting Started

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/clarktr1/2025-Cohort-Team-2.git


## Running the Project Locally

### Frontend Setup

1. **Navigate to the frontend directory**  
   ```bash
   cd 2025-Cohort-Team-2/frontend
2. **Install Dependencies**  
   ```bash
   npm install
3. **Start the Development Server**  
   ```bash
   npm run dev 
   
- The React + Vite app typically runs at http://localhost:3000.

### Backend Setup

1. **Navigate to the backend directory**  
   ```bash
   cd ../backend
2. **Create and Activate a Virtual Environment (recommended)**  
   ```bash
   python -m venv venv
   
   On macOS/Linux
   source venv/bin/activate

   On Windows
   venv\Scripts\activate

3. **Install Python Dependencies**  
   ```bash
   pip install -r requirements.txt

4. **Run Migrations**  
   ```bash
   python manage.py migrate

4. **Start the Django Server**  
   ```bash
   python manage.py runserver

- The backend runs by default on http://localhost:8000.


### Connect Frontend and Backend

Make sure the frontend is set up to make API requests to [http://localhost:8000](http://localhost:8000).  
Adjust any environment variables or configuration files in the frontend (e.g., `.env`) if needed.

Once everything is running:

- **Frontend**: [http://localhost:3000](http://localhost:3000)  
- **Backend**: [http://localhost:8000](http://localhost:8000)

---

## Contributing

1. **Fork the Repository**
2. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
3. **Make Your Changes**
4. **Commit Changes**
   ```bash
   git commit -m "Add your feature"
4. **Push to Your Branch**
   ```bash
   git push origin feature/your-feature-name


## Project Team

- **Kaled Garner** ([GitHub](https://github.com/kgarner-dev))
- **Trey Clark** ([GitHub](https://github.com/clarktr1))
- **Abdullahi Olapojoye** ([GitHub](https://github.com/AbdullahiOlapojoye))
- **Abhriham Rishi Prattipati** ([GitHub](https://github.com/abhiramrp ))
- **Sabina Rasulova** ([GitHub](https://github.com/srasulova))
- **Rick Lattin** ([GitHub](https://github.com/lattiric))
- **J’Mari Wyatt** ([GitHub](https://github.com/fffilps))
- **Will Dev** ([GitHub](https://github.com/addicted2crypto))







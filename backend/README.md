# Roamwise Mall Data

This repository contains the backend API and React Native frontend components for displaying mall store information.

---

## Backend

### `main.py`

- Built with **FastAPI** and **SQLite**.
- Provides a REST API endpoint `/stores` that returns a list of stores with their:
  - Name
  - Category
  - Floor
  - Opening time
  - Closing time
- Uses CORS middleware to allow frontend apps (including React Native) to access the API.

**To run the backend:**

1. Make sure you have Python installed.
2. Install dependencies (FastAPI and Uvicorn):
   ```bash
   pip install fastapi uvicorn
3. Run server:
    uvicorn main:app --reload
4. The API will be accessible at http://localhost:8000/stores


## Frontend (React Native)
### StoreList.js
    Fetches store data from the backend API.
    Displays a scrollable list of stores.
    Shows loading indicator while fetching.
    Displays an error message and retry button on fetch failure.
    Uses the StoreCard component to render each store.

### StoreCard.js
    Presents individual store information in a card layout.
    Displays store name, category, floor, and opening hours.
    Uses FontAwesome icons for visual enhancement.


## Setup and Running frontend
1. Ensure you have Node.js and npm installed.

2. In your React Native project, place StoreList.js and StoreCard.js is appropriately (e.g., components/ folder).

3. Install dependencies:
    npm install react-native-vector-icons
(Make sure you have expo if you're using Expo for React Native.)

4. Update the API URL in StoreList.js to point to your backend server's actual IP address.

5. Run your React Native app:
    npm start

### Notes
Replace the IP address http://192.168.8.102:8000/stores in StoreList.js with your backend server's actual IP and port.

The backend expects a SQLite database file mall.db with a table stores containing the required columns.
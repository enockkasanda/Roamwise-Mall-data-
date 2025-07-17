# 🛍️ Roamwise Mall Seeder

Roamwise Mall Seeder is a small utility that seeds mall shop data from a JSON file
into an SQLite database. This tool is intended for development, testing, and demo purposes where a consistent mall dataset is required.

---

## 📁 Project Structure

Roamwise/
├── mall_data.json # Source data for shops (in JSON format)
├── seed_database.py # Python script that seeds the data into mall.db
├── mall.db # SQLite database (auto-generated)
└── README.md # Project overview and setup instructions


---

## 🚀 Getting Started

### Prerequisites

- Python 3.x installed
- No external libraries required (uses Python standard library)

### Setup Instructions

1. **Clone the Repository**

```git clone https://github.com/your-username/Roamwise-Mall-data-.git```
```cd Roamwise```

2. **Run Seeder app**
```python seed_database.py```

This reads data from mall_data.json
Creates a local mall.db SQLite database (if not already present)
Populates a shops table with the data.

3. **View the Data**
You can inspect the mall.db using:
- DB Browser for SQLite
- SQLite command line:
sqlite3 mall.db

🛠️ **Technologies Used**
Python 3 – for scripting
SQLite3 – for lightweight database storage
JSON – for structured data

📌 **Notes**
mall_data.json contains mock data and can be customized.
Running the script repeatedly will overwrite existing records based on shop_id.
Add more fields to the JSON and update the script if your schema expands.



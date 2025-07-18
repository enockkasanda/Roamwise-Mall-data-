import traceback
from fastapi import FastAPI
import sqlite3
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#allow react native to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/stores")
def get_stores(): #connecting to database
    try:
        conn = sqlite3.connect("mall.db")
        cur = conn.cursor()
        cur.execute("SELECT name, category, floor, open_times, close_times FROM stores") #sqlite command
        rows = cur.fetchall() #return all results
        conn.close()

        return [ #format for output
            {"name" : row[0],
            "category" : row[1],
            "floor" : row[2],
            "openTime" : row[3],
            "closeTime" : row[4]
            } for row in rows
        ]
    except Exception as e:
        print("Error in /stores:", e)
        traceback.print_exc()
        return {"error": "Internal Server Error"}

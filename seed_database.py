import sqlite3
import json
import os

# --- File paths ---
JSON_FILE = "mall_data.json"
DB_FILE = "mall.db"

# --- Connect to SQLite database ---
conn = sqlite3.connect(DB_FILE)
cursor = conn.cursor()

# --- Create stores table if it doesn't exist ---
cursor.execute("""
CREATE TABLE IF NOT EXISTS stores (
    name TEXT,
    category TEXT,
    floor TEXT,
    open_times TEXT,
    closing_times TEXT
);
""")
conn.commit()

# --- Load JSON data ---
if not os.path.exists(JSON_FILE):
    print(f"❌ Error: {JSON_FILE} not found.")
    exit()

with open(JSON_FILE, "r") as f:
    stores = json.load(f)

# --- Insert data with duplicate check ---
inserted = 0
skipped = 0

for store in stores:
    name = store.get("name")
    category = store.get("category")
    floor = store.get("floor")
    open_times = store.get("open_times")
    closing_times = store.get("closing_times")

    # Check if store already exists (based on name, category, and floor)
    cursor.execute(
        "SELECT 1 FROM stores WHERE name = ? AND category = ? AND floor = ?",
        (name, category, floor)
    )
    if cursor.fetchone():
        print(f"⚠️  Skipping duplicate: {name} ({category}, {floor})")
        skipped += 1
        continue

    # Insert store record
    cursor.execute("""
        INSERT INTO stores (name, category, floor, open_times, closing_times)
        VALUES (?, ?, ?, ?, ?)
    """, (name, category, floor, open_times, closing_times))
    inserted += 1

# --- Finalize ---
conn.commit()
conn.close()

print(f"\n✅ Seeding complete! {inserted} inserted, {skipped} skipped (duplicates).")

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./kanban.db");

// crear tablas
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT,
      password TEXT
    )
  `);

    db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      status TEXT,
      created_at TEXT
    )
  `);
});

db.run(`
INSERT INTO users (email, password)
SELECT 'test@test.com', '1234'
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email='test@test.com')
`);

// GET tasks
app.get("/tasks", (req, res) => {
    db.all("SELECT * FROM tasks", [], (err, rows) => {
        res.json(rows);
    });
});

// POST task
app.post("/tasks", (req, res) => {
    const { title, description, status } = req.body;
    db.run(
        "INSERT INTO tasks (title, description, status, created_at) VALUES (?, ?, ?, datetime('now'))",
        [title, description, status],
        function () {
            res.json({ id: this.lastID });
        }
    );
});


// POST login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.get(
        "SELECT * FROM users WHERE email=? AND password=?",
        [email, password],
        (err, user) => {
            if (user) res.json({ success: true });
            else res.status(401).json({ success: false });
        }
    );
});

// UPDATE task
app.put("/tasks/:id", (req, res) => {
    const { title, description, status } = req.body;
    db.run(
        "UPDATE tasks SET title=?, description=?, status=? WHERE id=?",
        [title, description, status, req.params.id],
        () => res.json({ ok: true })
    );
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
    db.run("DELETE FROM tasks WHERE id=?", [req.params.id], () =>
        res.json({ ok: true })
    );
});

app.listen(3000, () => console.log("Server running on port 3000"));
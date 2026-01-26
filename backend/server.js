import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// GET all favorites
app.get("/favorites", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM favorites");
  res.json(rows);
});

// ADD a favorite
app.post("/favorites", async (req, res) => {
  const { city } = req.body;

  if (!city || city.trim() === "") {
    return res.status(400).json({ error: "City is required" });
  }

  const [result] = await pool.query(
    "INSERT INTO favorites (city) VALUES (?)",
    [city]
  );

  res.json({ id: result.insertId, city });
});

// DELETE a favorite
app.delete("/favorites/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM favorites WHERE id = ?", [id]);
  res.json({ success: true });
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Backend running on port 4000");
});

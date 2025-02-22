import db from "./database.js";

export const createUser = (name) => {
  const stmt = db.prepare("INSERT INTO user (names) VALUES = (?)")
  stmt.run(name)
}

export const getAllUser = () => {
  return db.prepare("SELECT * FROM users").all()
}

export const deleteUser = (id) => {
  const stmt = db.prepare("DELETE FROM users WHERE id = ?")
  stmt.run(id)
}
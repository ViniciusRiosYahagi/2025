import db from "./database.js";

export const createUser = (name) => {
  const stmt = db.prepare("INSERT INTO users (name) VALUES (?)")
  stmt.run(name)
}

export const getAllUser = () => {
  return db.prepare("SELECT * FROM users").all()
}

export const deleteUser = (id) => {
  const stmt = db.prepare("DELETE FROM users WHERE id = ?")
  const result = stmt.run(id)
  return result
}

export const changeName = (name, id) => {
  const stmt = db.prepare("UPDATE users SET name = ? WHERE id = ?")
  const result = stmt.run(name, id) 
  return result
}
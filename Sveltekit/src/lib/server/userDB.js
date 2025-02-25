import db from "./database.js";

export const createUser = (name) => {
  const sql = db.prepare("INSERT INTO users (name) VALUES (?)")
  sql.run(name)
}

export const getAllUser = () => {
  return db.prepare("SELECT * FROM users").all()
}

export const deleteUser = (id) => {
  const sql = db.prepare("DELETE FROM users WHERE id = ?")
  const result = sql.run(id)
  return result
}

export const changeName = (name, id) => {
  const sql = db.prepare("UPDATE users SET name = ? WHERE id = ?")
  const result = sql.run(name, id) 
  return result
}
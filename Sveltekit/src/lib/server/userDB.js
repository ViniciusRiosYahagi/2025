import db from "./database.js";

export const createUser = (name) => {
  return db.prepare("INSERT INTO users (name) VALUES (?)").run(name)
}

export const getAllUser = () => {
  return db.prepare("SELECT * FROM users").all()
}

export const deleteUser = (id) => {
  return db.prepare("DELETE FROM users WHERE id = ?").run(id)
}

export const changeName = (name, id) => {
  return db.prepare("UPDATE users SET name = ? WHERE id = ?").run(name, id) 
}

export const getUserId = (id) => {
  return db.prepare("SELECT * FROM users WHERE id = ?").get(id)
}

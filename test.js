import jwt from "jsonwebtoken"

// import bcrypt from 'bcrypt'

// const plainPW = "1234"
// const plainPW2 = "1235"

// console.time("bcrypt")
// const hash = bcrypt.hashSync(plainPW, 10)
// console.timeEnd("bcrypt")
// console.log(hash)

// const isEqual = bcrypt.compareSync(plainPW, hash)

// console.log(isEqual)

const token = jwt.sign({ _id: "123jh21387982173" }, process.env.JWT_SECRET)

console.log(token)

const verified = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImlhdCI6MTYyNjI0ODg1NH1.Di9hWYuSqX2xzk7XVASmZwcmi2MnU1uyQ2LLQDmVz5Y",
  process.env.JWT_SECRET
)

console.log(verified)

import User from '../models/User.js'

export async function createUser(name, username, password) {
  const user = new User({
    name,
    username,
    password
  })
  await user.save()
}
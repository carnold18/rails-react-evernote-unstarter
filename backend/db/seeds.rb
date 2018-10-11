# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Note.destroy_all
User.destroy_all

chris = User.create(username: "arnie", email: "chris@example.com", password: "example")
janett = User.create(username: "janey", email: "janey@example.com", password: "example")
doug = User.create(username: "dougie", email: "dougie@example.com", password: "example")

# groceries = Note.create(title: "Grocery List", body: "Bananas, Eggs, Cheese", user_id: 1)
# practice = Note.create(title: "Guitar Notes", body: "need to remember to buy new pic in the morning", user_id: 2)
# television = Note.create(title: "Shows", body: "GOT, AHS, SYTYCD", user_id: 1)

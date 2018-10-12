# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Route.destroy_all
User.destroy_all

# chris = User.create(username: "arnie", email: "chris@example.com", password: "example")
# janett = User.create(username: "janey", email: "janey@example.com", password: "example")
# doug = User.create(username: "dougie", email: "dougie@example.com", password: "example")

# short = Route.create(transportation: "moto", distance: 200, name: "Can Tho to Ho Chi Minh", user_id: 1)
# long = Route.create(transportation: "airplane", distance: 700, name: "Can Tho to Hoi An", user_id: 1)

allUsers = {
    "users": [
        {
            "username": "arnie",
            "email": "arnie@example.com",
            "password": "example"
        },
        {
            "username": "janey",
            "email": "janey@example.com",
            "password": "example"
        },
        {
            "username": "dougie",
            "email": "dougie@example.com",
            "password": "example"
        }
    ]
}

allRoutes = {
    "routes": [
        {
            "transportation": "airplane",
            "distance": 700,
            "name": "Can Tho to Ho Chi Minh",
            "user_id": 1
        },
        {
            "transportation": "moto",
            "distance": 200,
            "name": "Can Tho to Hoi An",
            "user_id": 1
        }
    ]
}

allUsers[:users].each do |user|
    User.create(user)
end

allRoutes[:routes].each do |route|
    Route.create(route)
end


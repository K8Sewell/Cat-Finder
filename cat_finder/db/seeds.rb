# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.all.each {|cat| cat.destroy}



cat_attributes = [
  {
    name: 'Peter',
    age: 1,
    enjoys: "Catnip toys.",
    dogFriendly: true,
    medNeeds: true,
    image: "cat.com"
  },
  {
    name: 'Lucky',
    age: 4,
    enjoys: "Sitting by the window, bird-watching.",
    dogFriendly: true,
    medNeeds: false,
    image: "cat.com"
  },
  {
    name: 'Princess',
    age: 6,
    enjoys: "Being in charge.",
    dogFriendly: false,
    medNeeds: false,
    image: "cat.com"
  },
  {
    name: 'Leo',
    age: 4,
    enjoys: "Meowing when treats aren't involved.",
    dogFriendly: true,
    medNeeds: false,
    image: "cat.com"
  },
  {
    name: 'Sage',
    age: 4,
    enjoys: "Snuggling on the couch.",
    dogFriendly: true,
    medNeeds: true,
    image: "cat.com"
  },
  {
    name: 'Spaghetti',
    age: 2,
    enjoys: "Eating 24/7.",
    dogFriendly: true,
    medNeeds: false,
    image: "cat.com"
  }
]

cat_attributes.each do |attributes|
  Cat.create(attributes)
end

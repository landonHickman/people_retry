# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

15.times do 
  Person.create(
    name: Faker::Name.unique.name,
    age: Faker::Number.between(from: 15, to: 90),
  )
end

puts "Seeded you have #{Person.all.size} pages."
require 'csv'
require 'erb'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
<<<<<<< HEAD



=======
>>>>>>> f6a55440c34d290a594d025ee3c3be997b663da9
info = CSV.foreach("Iron Glory Inventory.csv", headers: true, :header_converters => :symbol)

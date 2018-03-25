# awesome_level = 99

# 5.times do
# puts "awesome_level is  #{awesome_level}"
# how_much_awesome = "so much awesome"
# end

# puts how_much_awesome

# def a_sandwich(ham_cheese)
# 	puts ham_cheese
# end

# ham_cheese = "good"
# puts ham_cheese
# a_sandwich("egg_salad")
# puts ham_cheese
module SandwichGlobal

	class Sandwich

		attr_accessor :ham_cheese

		def initialize(ham_cheese)
			@ham_cheese = ham_cheese
		end
	end
end

foo = SandwichGlobal::Sandwich.new("egg")
bar = SandwichGlobal::Sandwich.new("salami")

puts foo.ham_cheese
puts bar.ham_cheese
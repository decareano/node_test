def say_goodnight(name)
	result = "Good night ", + name
end

puts say_goodnight("marcelo")
puts say_goodnight("mary")

def say_goodnight(name)
	result = "Good night , #{name.capitalize}"
end

puts say_goodnight('marcelo')
puts say_goodnight("mary")


def call_block
	puts "start of method"
	yield
	yield
	puts "end of method"
end

call_block {puts "in the block"}

def who_says 
	yield("dave", "hello")
	yield("andy", "goodbye")
end

who_says {| person, phrase| puts "#{person} says #{phrase}"}


animals = %w( ant, bee, cat, dog)
animals.each{| animal| puts animal}

class BookInStock
	attr_reader :isbn, :price
	def initialize(isbn, price)
		@isbn = isbn
		@price = Float(price)
	end

	def to_s
		"ISBN: #{@isbn}, price: #{@price}"
	end
end

book1 = BookInStock.new('isbn1', 3.15)
puts book1


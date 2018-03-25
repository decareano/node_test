class Cheese
	def self.provolone
	puts 'class method'
	end

	def swiss
	puts 'instance method'
	end
end

# Cheese.provolone
# Cheese.swiss

Cheese.new.swiss
#Cheese.new.provolone


class Foo
	def bar
		puts 'instance method'
	end
end

Foo.bar
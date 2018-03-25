user_name = ARGV.first
prompt = '> '

puts "Hi #{user_name}."
puts "I d like to ask you a few questions"
puts "Do you like me #{user_name}"
puts prompt
like = $stdin.gets.chomp


puts "where do you live #{user_name}"
puts prompt
lives = $stdin.gets.chomp
puts "what kind of computer you have", prompt
computer = $stdin.gets.chomp

puts """

so you said #{like} about liking me.
you live in #{lives}. not sure
And you have a #{computer} computer.Nice
"""

from_file, to_file = ARGV

puts "copying from #{from_file} to #{to_file}"

in_file = open(from_file)
indata = in_file.read

puts "the input file is #{indata.length} bytes long"
puts "does the output file exist? #{File.exist?(to_file)}"
puts "ready, hit RETURN to continue, ctrl-c to abort"

$stdin.gets

out_file = open(to_file, 'W')
out_file.write(indata)

puts "allright, all done"

out_file.close
in_file.close
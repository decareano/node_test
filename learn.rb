package "apache" do
	package_name "apache2"
end

service 'apache2' do
	action [:enable, :start]

end

# file '/var/www/index.html' do
# 	action :delete
group 'name' do
	group_name 'apache'
	action :create
end


file '/var/www/html/index.html' do
	content 'Hello my dear internet'
	mode '0755'
	owner 'root'
	group 'apache'
end



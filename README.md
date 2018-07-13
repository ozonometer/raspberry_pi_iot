Install nodejs
	>sudo apt-get update 
	>sudo apt-get dist-upgrade
	>curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
	>sudo apt-get install -y nodejs
To initialte nodejs project in root directory type:
	>npm init
Then install Restfull pakage 
	>npm install restify --save
Create index.js or app.js depending what name was choosend for entry point. To run use command
	>node app.js

Install automatic nodejs server restart at code change (optional)
	>npm install -g nodemon
Then to run use 
	>nodemon app.js
	
Install parameter validator
	>npm install restify-validator --save
	
Install on off
	>npm install onoff

Install ds18x20 lib
	>npm install ds18x20
	and load it
	>sudo modprobe w1-gpio && sudo modprobe w1-therm

	
Create mongodb database
Install mongoose
	> npm install mongoose@4.13.14 --save     Note: MongoDB Server higher than 2.4.x is 64bit and will not run on raspberry, need mongoose v4.13.14 or lower.
	Install mongodb-server 
	On Windows (to test) by using installer and start server by runing mongod.exe in C:\Program Files\MongoDB\Server\4.0\bin
	On Linux 
	> sudo apt-get install mongodb-server
	start server
	> sudo service mongodb start

Run database scripts in databaseScript folder
	> node scriptName.js

	GUI in startlxde

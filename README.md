# raspberry_pi_iot
NodeJs restfull API with mongo database and ability to control GPIO

Install dependencies: 

To initiate nodejs project in root directory type:
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
	
Create mongodb database
Install mongoose
	> npm install mongoose@4.13.14 --save     Note: MongoDB Server higher than 2.4.x is 64bit and will not run on raspberry, need mongoose v4.13.14 or lower.
	Install mongodb-server 
	On Windows (to test) by using installer and start server by running mongod.exe in C:\Program Files\MongoDB\Server\4.0\bin
	On Linux 
	> apt-get install mongodb-server
	start server
	> sudo service mongodb start

Run database scripts in databaseScript folder
	> node scriptName.js

	For MobaXterm use this command to open remote GUI desctop
	> startlxde

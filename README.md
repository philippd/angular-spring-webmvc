angular-spring-webmvc
=====================

###Prepare
Before you start, make sure you have the following software on your machine:
 - [java 7](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)
 - [maven 3](http://maven.apache.org/download.cgi)
 - [node.js](http://nodejs.org/download/)
 - [ruby](http://www.ruby-lang.org/en/downloads/) (required for sass/compass)
 - [git](http://git-scm.com/downloads) (even if you download this as ZIP, git is needed in the PATH because some bower dependencies are fetched via git)

####install compass
This project uses sass and compass, install it via rubygems:

```bash 
gem install compass
```

####install grunt, bower and yeoman
Install these tools via the node packaging manager npm:

```bash 
npm install -g grunt-cli bower yo
```

####special steps for windows
- add an environment variable CHROME_BIN pointing to chrome.exe (needed for karma)
- make sure the bin folder of your rubygems repo is in your PATH (more information [here](http://docs.rubygems.org/read/chapter/3))

### Build
In the root directory: 

```bash 
mvn install
```

####Build client only
In /src/main/js

```bash 
npm install && bower update && grunt
```

After you have done this once and the npm packages and bower dependencies are installed you only have to run 

```bash 
grunt
```

###Run
To build and deploy the application locally in a jetty server, run:

```bash 
mvn jetty:run-war
```
(Note: jetty:run will only start the backend and *not* serve the client application)


###Develop
For development you may want to run the server and client parts independenly. This allows you to deploy the WAR in your favorite IDE in a local servlet container (maybe even with JRebel!) and run the grunt 'server' task with live-reload at the same time.

- make sure you run your servlet container on port 8080 and set the context path to '/' (The grunt task 'server' will forward all requests to http://localhost/rest to this port, you can change this in [Gruntfile.js](https://github.com/philippd/angular-spring-webmvc/blob/master/src/main/js/Gruntfile.js)) 
- deploy the war and start the server
- in src/main/js run

```bash 
grunt server
```





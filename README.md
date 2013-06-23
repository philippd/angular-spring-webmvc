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




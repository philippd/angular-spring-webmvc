angular-spring-webmvc
=====================

###Prepare
Requires installed java 7, maven 3, node and ruby (required for sass/compass)

- install compass: 

```bash 
gem update --system && gem install compass
```

- install grunt, bower and yeoman:

```bash 
npm install -g grunt-cli bower yo
```

### Build Server
- in root directory: 

```bash 
mvn install
```

###Build Client

- in /src/main/js

```bash 
npm install && bower update && grunt
```



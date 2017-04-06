 # Purpose
 Sunlight congress _used_ to provide a pretty solid API for retrieving congressional districts based on location.  However, it seems their primary hosting services have gone down, as you can no longer get API keys and the server hosts return 500.  It appears that Open Congress Foundation has taken some of their functionality but not this particular functionality, and launching their code as a server was pretty heavy duty, requiring some setup and a MongoDB.

 **CDF-Heroku** (Congress District Finder for Heroku) is a simple node server that can be easily deployed to Heroku so that you can have your own restful endpoint.  It's based on [Congress District Finder](https://github.com/chrisdevwords/congressional-district-finder) NPM

 Right now I've only implemented district from Lat / Lng.  Let me know if you'd like to see some of the other methods implemented.

 # Usage
 Unless it gets bombarded, I'm running an instance for you at [http://congress.logichigh.com](http://congress.logichigh.com/docs), so you can make the API calls straight!
 ## Documentation
 Documentation is generated from the swagger.yml file automatically and placed in the [docs](http://congress.logichigh.com/docs) directory

 # Installation
 ## Deploy to Heroku:
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
## Run locally
Clone repository then:
```
npm install
npm build
npm start
```
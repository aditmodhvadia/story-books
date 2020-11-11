# Story Books

Create public and private stories from your life:
https://story-books-friends.herokuapp.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- You need to have the config.env file set up with three varaibles:
  - MONGO_URI
  - GOOGLE_CLIENT_URI
  - GOOGLE_CLIENT_SECRET
- All of them can be easily obtained from their respective websites but make sure to name them exactly as mentioned.

### Installing

- Simply run the following command from your terminal to get the source code on your system in the desired directory.

```
git clone https://github.com/aditmodhvadia/story-books.git
```

- Or you can fork this repository and then create a pull request for implementing the changes

- You can checkout the live deployment of the webapp here: https://story-books-friends.herokuapp.com/

## Deployment

- All commits on the master branch will be deployed to the live URL via Heroku
- If you want to deploy your version then keep these steps in your mind:

  - DO NOT make your config.env file public. Add it to .gitignore
  - I used [Heroku](https://heroku.com) to deploy the Node.js app
  - Most hosting services will allow you to set environment variables from the dashboard, so use that to keep the keys secret.

  ## Docker setup commands

  - docker run -p 27017:27017 -d mongo:3.6-xenial

## Built With

- [Node.js](https://nodejs.org/en/) - Node.js is a javascript runtime built on Chrome's V8 Javascript engine.
- [MongoDB](https://mongodb.com/) - MongoDB is a general purpose, document-based, distributed database built for modern application developersa and for the cloud era. Used MOngo Atlas for cloud hosted database service
- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [express handlebars](https://www.npmjs.com/package/express-handlebars) - Used for front-end rendering from the server (Server-side rendering)
- [Passport](http://www.passportjs.org/) - Simple, unobstrusive authentication for NOde.js
- [Mongoose](https://mongoosejs.com/) - Used for connection with MOngoDB and object modelling
- [Method Override](http://expressjs.com/en/resources/middleware/method-override.html) - Used to support PUT and DELETE requests in forms
- [Heroku](https://heroku.com) - Used Heroku hosting service for hosting Node.js server

## Contributing

Check out [Contributing.md](./Contributing.md)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/aditmodhvadia/story-books/tags).

## Authors

- **Adit Modhvadia** - _Initial work_ - [aditmodhvadia](https://github.com/aditmodhvadia/)

See also the list of [contributors](https://github.com/aditmodhvadia/story-books/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/aditmodhvadia/story-books/blob/master/LICENSE) file for details

## Acknowledgments

- Brad from [TraversyMedia](https://www.youtube.com/user/TechGuyWeb) for his exceptional tutorial videos

# Cryptocurrency tracker API

**Under construction**

Cryptocurrency tracker API, is basically an API that tracks the currency market changes.

## Project plans

As a first step, we're creating the Restful-API with JSON responses. to get the cryptocurrency market state. with illimited requests for _free_ for 20 cryptocurrencies.
Also, we're adding a _premium plan_, for the 80 other cryptocurrencies.

**The work is opensource, so premium plan is just for illustration**

Secondly, we're planning to add a front-end UI for this API in a _different repository_ using **React.js**. with a real-time update for the market changes, and a highly interactive user interface (_UI_), with a super modern User Experience (_UX_).

## Getting started

### Prerequests

Firstly, when you clone this repository on your local machine, make sure install all the dependencies required

```
npm install
```

then create a file called `config.json` inside your repository project.
_Basicaly this file includes all the environment variables for development and test mode_
make sure you follow this structure

```json
{
    "development": {
        "PORT": "5000",
        ...
    },
    "test": {
        "PORT": "5000",
        ...
    }
}
```

Options that are required:

| Option      | Required |
| ----------- | -------- |
| PORT        | True     |
| MONGODB_URI | True     |
| JWT_KEY     | True     |

### The Routes Provided By The API

The cryptocurrency RestFul api provides a set of routes that returns or accept a JSON data type.
Basically, the GET methods of these requests returns the current price of a specific cryptocurrency in USD. However, the POST, PATCH, and DELETE methods aren't used by only the ADMIN user.

This table provided all the routes with a simple informations

| Route              | Method | Authentication | Information                              |
| ------------------ | ------ | -------------- | ---------------------------------------- |
| /                  | GET    | No             | Return simple informations about the API |
| /                  | POST   | Yes            | Add a new cryptocurrency                 |
| /:cryptocurrency   | GET    | No             | Returns the current price of the CC      |
| /:cryptocyrrency   | PATCH  | Yes            | Edit the cryptocurrency information      |
| /:cryptocyrrency   | DELETE | Yes            | Delete a cryptocurrency                  |
| /users/            | GET    | Yes            | Get array of all the users               |
| /users/            | POST   | Yes            | Add a new user                           |
| /users/:id         | GET    | Yes            | Get a specific user informations         |
| /users/:id         | PATCH  | Yes            | Edit a specific user                     |
| /users/:id         | DELETE | Yes            | Delete a specific user                   |
| /subscriptions     | GET    | Yes            | Get all the subscriptions                |
| /subscriptions     | POST   | No             | Add a new subscription                   |
| /subscriptions/:id | GET    | Yes            | Get a specific subscription              |
| /subscriptions/:id | DELETE | Yes            | Delete a specific subscription           |
| /sigin             | POST   | No             | Admin login returns Token and ID         |

**!Note:**
_users = admins_

### Database structure

The database strecure is simple and clean. We're using _MongoDB_ as our database.

- Currency: [\_id, name, description, logoLink, keyword, [ LatestPricesOfWeek ], dateOfCreation]
- User: [\_id, firstname, lastname, username, email, password, dateLatestLogin, dateOfCreation, [ tokens ] ]
- Subscriptions: [_id, firstname, lastname, email, dateOfCreation]

## Used Dependencies

- **express** - Web application framework for Node.js
- **mongoose** - Mongodb object modeling for Node.js
- **lodash** - A modern JavaScript utility library delivering modularity, performance & extras.
- **mochajs** - Unit testing framework.
- **body-parser** - Middleware for express to parse requests bodies to JSON.
- **JsonWebToken** Creator of access tokens.

**The list is going to be changed over the time**

## Versioning

We use [SemVer](https://semver.org/) for versioning.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) file carefully for details on our code conduct, and the process of submitting pull requests to us.

## Authors

- Azeddine Bouabdallah: _Full stack web developer_ - [GitHub](https://github.com/didoudesigner) - [Personal Blog](https://sedulousdev.com).
- Imed Eddine Benoudjit: _Back-end web developer_ - [GitHub](https://github.com/jeydonn).

## Lisence

This project is licensed under the **ISC License** - See the [LICENSE.md](LICENSE.md) file for details.

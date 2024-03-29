<div align="center">

  <h3 align="center">Todo MERN</h3>

  <p align="center">
    <br />
    <a href="https://github.com/mudiman/todo-mern-dt"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mudiman/todo-mern-dt">View Demo</a>
    ·
    <a href="https://github.com/mudiman/todo-mern-dt/issues">Report Bug</a>
    ·
    <a href="https://github.com/mudiman/todo-mern-dt/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Todo sample app

This is mono repo project build using Turborepo. Sample todo full stack app with react.js and express.js and some test, docker and github action workflow
It includes all major production grade application packages

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project.

- [Turborepo](https://turborepo.org/)
- [React.js](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [MirageJs](https://miragejs.com/)
- [React Router](https://reactrouter.com/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)
- [PM2](https://pm2.keymetrics.io/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
- yarn
- node
- docker

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mudiman/todo-mern-dt.git
   ```
2. Install NPM packages for server
   ```sh
   cd apps/api/ && yarn install
   ```
3. Rename .env.sample to .env and update configuration

4. Install NPM packages for client
   ```sh
   cd apps/web/ && yarn install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Client

```
cd src/client
yarn install
yarn start
```

### Server

```
cd src/server
yarn install
make copy of .env.sample as .env and update the config
yarn start
```

### Using Turbo build command
```
on root run below command which run all dev command in sub apps
yarn run dev
yarn run lint // to check for linking issue
yarn run format // to format code
```
### Using Docker

```
docker-compose build
docker-compose up -d
Note: Curring dockerfile is setup for production mode so it will not watch for changes. If want to make changes run directly or modify dockerfile
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [] Add Dockerfile.dev for local developerment with support to watch for changes
- [] Multi-language Support
  - [] Chinese
  - [] Spanish

See the [open issues](https://github.com/mudiman/todo-mern-dt/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Mudassar Ali - [@mudassarali](https://twitter.com/mudassarali) - mudassar.ali@gmail.com

Project Link: [https://github.com/mudiman/todo-mern-dt](https://github.com/mudiman/todo-mern-dt)

<p align="right">(<a href="#top">back to top</a>)</p>

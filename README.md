# Huntagram

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS](https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![fontawesome](https://img.shields.io/badge/font%20awesome-%23339AF0.svg?&style=for-the-badge&logo=font%20awesome&logoColor=white)

## Description

Huntagram is a fullstack Instagram clone built with Node.js, Express, MongoDB, Mongoose, EJS, Tailwind, and Cloudinary. Users can create an account, upload photos, like and comment on other users' posts, and delete posts that belong to them.

The app uses cloudinary for image uploading and storage, and MongoDB/Mongoose for data persistence. EJS is used for rendering dynamic views on the server side, and Tailwind is used for styling the app. Bcrypt is used for password hashing, Passport and Passport-Local for authentication, and Connect-Mongo for session storage.

### Landing Page
![image](https://user-images.githubusercontent.com/106113692/230487871-7e29c793-eab4-4d52-a3b6-b8c365dd84d7.png)
</br>
### Home page
![image](https://user-images.githubusercontent.com/106113692/230488080-cb250668-904f-4ea4-a808-599488e8ef79.png)
</br>
### Profile page
![image](https://user-images.githubusercontent.com/106113692/230488243-453ab8bd-9af3-4b68-befb-0b369d06158e.png)
</br>
### Mongoose model structure
![huntagram excalidraw](https://user-images.githubusercontent.com/106113692/230488306-b014ed3d-e384-4f5b-a574-c5ce9957e11c.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Technologies](#technologies)
- [License](#license)
- [Questions](#questions)

## Installation

Before getting started, make sure you have Node.js installed on your system. This project requires Node.js version 16 or higher. You can download the latest version of Node.js from the official website: [https://nodejs.org](https://nodejs.org)

## Usage

To use Huntagram, follow the steps below:

1. **Sign Up**: Visit the landing page and click on the "Sign Up" button. Fill in the required details, including your email address and password, to create a new account.

2. **Log In**: After successfully signing up, you will be automatically logged in. If you already have an account, click on the "Log In" button on the landing page and provide your credentials to log in.

3. **Explore Home Feed**: Once logged in, you will be directed to the home page. Here, you can view all the posts from other users, sorted by creation date. Scroll through the feed to discover new content.

4. **Interact with Posts**: You can like a post by clicking on the heart icon beneath it. To leave a comment, click on the comment icon and enter your comment in the input field. Engage with other users' posts by interacting with their content.

5. **Manage Your Posts**: To add a new post, click on the "Add new post" button or navigate to your profile page by clicking on the "Profile" button in the navigation bar. Fill out the form with a caption and upload a photo. Click "Upload" to add the post to the database and have it displayed on the home page. You can delete your own posts by clicking the delete icon on the respective post.

6. **Explore User Profiles**: Click on a username or profile picture to visit a user's profile page. There, you can view all the posts uploaded by that user.

Note: Some features of the app require authentication. If you haven't signed up yet, click on the "Sign Up" button in the navigation bar to create an account.

Feel free to customize and expand on the usage instructions based on any additional functionalities or user flows specific to your application.

## Features

Huntagram offers the following features:

- User Registration: Users can create a new account by providing their email address and password.
- User Authentication: Registered users can log in securely using their email and password.
- Image Upload: Users can upload photos to share with the community.
- Post Management: Users can view, like, comment on, and delete their own posts.
- Social Interactions: Users can like and comment on posts made by other users.
- Profile Page: Each user has a dedicated profile page displaying their uploaded posts.
- Home Feed: Users can view a feed of all posts sorted by creation date.
- Responsive Design: The app is optimized for various screen sizes and devices.
- Error Handling: Comprehensive error handling and user-friendly error messages are implemented.

With these features, Huntagram provides a complete Instagram-like experience for users, allowing them to share their photos, engage with others' content, and build a vibrant community.

Feel free to customize and expand on these features based on the specific functionality of your application.

## Demo

Deployed link: https://huntagram.onrender.com/

# Getting Started

To get started with this project, first clone the repository and navigate to the project directory: <br/>
`cd Desktop/` <br/>
`git clone https://github.com/HunterPadgett/insta-clone.git` <br/>
`cd insta-clone`

## Configuration

Install the dependencies: <br/>
`npm i`

Create a .env file in the root directory and add the following environment variables:
`CLOUD_NAME=<your-cloudinary-cloud-name>`
`API_KEY=<your-cloudinary-api-key>`
`API_SECRET=<your-cloudinary-api-secret>`
`PORT=<whatever-port-you-want-to-run-on>`
`DB_STRING=<your-mongodb-uri>`

Start the development server: <br/>
`npm run dev`

This will start the app at `http://localhost:<whatever-port-number-you-put-in-the-env>`

## API Documentation

Huntagram provides a RESTful API for interacting with user data and posts. The following endpoints are available:

- `GET /`: Fetches the landing page.

- `GET /auth/login`: Fetches the login page.
- `GET /auth/signup`: Fetches the signup page.
- `POST /auth/login`: Creates a new user.
- `POST /auth/signup`: Looks for user in database, checks if they exist and their password is correct, logs the user in if everything is correct.
- `GET /auth/logout`: Destroys the current logged in user's session.

- `GET /feed`: Fetches all posts.
- `POST /feed/addComment/:id`: Adds a comment to a specific post by its ID.
- `PUT /feed/likePost/:id`: Updates the post's likes by 1.
- `DELETE /feed/deletePost/:id`: Gives the logged in user the ability to delete a post if it belongs to them.

- `GET /profile`: Fetches all posts of the logged in user.
- `POST /profile/createPost`: Creates new post.
- `POST /profile/addComment/:id`: Adds a comment to a specific post by its ID.
- `PUT /profile/likePost/:id`: Updates the post's likes by 1.
- `DELETE /profile/deletePost/:id`: Gives the logged in user the ability to delete a post if it belongs to them.

You can send requests to these endpoints using HTTP methods such as GET, POST, PUT, and DELETE. The API expects and returns data in JSON format.

To authenticate your API requests, include an `Authorization` header in your HTTP requests with a valid user token. You can obtain the user token by logging in using the `/api/login` endpoint.

Ensure that you handle errors gracefully and validate user input to maintain the integrity and security of your application.

Feel free to extend and customize the API documentation based on your specific API endpoints, request/response structures, and any additional features or functionalities you have implemented in your project.

## Testing

Currently, no tests are set up for the Huntagram project. However, implementing tests is highly recommended to ensure the stability, reliability, and maintainability of the application.

Writing tests helps identify and prevent bugs, allows for easier code refactoring, and provides a safety net when making changes to the project. It also helps ensure that new features and bug fixes do not introduce regressions into the codebase.

To set up tests for Huntagram, you can use testing frameworks such as Mocha, Jest, or Jasmine, along with assertion libraries like Chai or Jest's built-in assertions. You can write unit tests to test individual functions or components, integration tests to test the interaction between different parts of the application, and end-to-end tests to simulate user scenarios.

By writing tests, you can improve the overall quality of your codebase and have more confidence in the stability and correctness of your application.

If you would like to contribute to the project by adding tests, feel free to open a pull request with your changes. Contributions are always welcome!

For more information on how to set up and write tests, refer to the documentation of the testing framework you choose to use.

## Deployment

The Huntagram project is hosted on Render, a cloud platform for deploying and scaling web applications. Follow the steps below to deploy your own instance of Huntagram on Render:

1. Sign up for an account on [Render](https://render.com/) if you haven't already.

2. Fork this repository to your GitHub account.

3. On Render, create a new web service and select GitHub as the deployment source. Connect your forked repository to Render.

4. Configure the deployment settings on Render. Set the build command to `npm install && npm run build` and the start command to `npm run start`.

5. Add the necessary environment variables to Render:
   - `CLOUD_NAME`: Your Cloudinary cloud name.
   - `API_KEY`: Your Cloudinary API key.
   - `API_SECRET`: Your Cloudinary API secret.
   - `PORT`: The port number for the application.
   - `DB_STRING`: Your MongoDB URI.

6. Save the changes and deploy the application.

Render will automatically build and deploy your Huntagram application based on the configuration provided. Once the deployment is successful, you will receive a URL where your application is accessible.

Make sure to set up proper environment variables in Render to ensure the application functions correctly. These environment variables are crucial for integrating with services like Cloudinary and MongoDB.

For more detailed instructions on deploying applications on Render, refer to the [Render documentation](https://render.com/docs/deploy-nodejs).

## Contributing

Contributions to Huntagram are welcome! If you have an idea for a feature, improvement, or bug fix, we encourage you to contribute to the project. Follow the steps below to get started:

1. Fork the repository to your GitHub account.

2. Create a new branch for your feature or bug fix:
`git checkout -b feature/your-feature-name`


3. Make the necessary changes and additions to the codebase.

4. Test your changes thoroughly to ensure they don't introduce any new issues.

5. Commit your changes with a descriptive commit message:
`git commit -m "Add your commit message here"`


6. Push your changes to your forked repository:
`git push origin feature/your-feature-name`


7. Open a pull request (PR) against the main branch of the original repository.

- Provide a clear and concise title for your PR.
- Describe the purpose and scope of your changes in the PR description.
- Reference any related issues or pull requests, if applicable.

8. Wait for the project maintainers to review your changes. They may provide feedback or request additional modifications.

We appreciate your contributions to make Huntagram better! Together, we can create an even more robust and feature-rich application.

## Technologies

- **autoprefixer:** Parses CSS and adds vendor prefixes to CSS rules using values from the Can I Use website.
- **bcrypt:** A library for hashing passwords.
- **cloudinary:** A cloud-based image and video management service.
- **connect-mongo:** A MongoDB session store for Express and Connect.
- **cors:** A package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **dotenv:** A zero-dependency module that loads environment variables from a .env file into process.env.
- **ejs:** A simple templating language that lets you generate HTML markup with plain JavaScript.
- **express:** A popular and minimalistic Node.js web framework.
- **express-flash:** A module for flashing messages to the user via redirects.
- **express-session:** A package that provides session middleware for Express.
- **method-override:** A package that lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
- **mongodb:** A popular NoSQL database.
- **mongoose:** A popular ODM for MongoDB that provides a straight-forward, schema-based solution to model your application data.
- **morgan:** A logging middleware for Express.
- **multer:** A middleware for handling multipart/form-data, which is primarily used for uploading files.
- **nodemon:** A development tool that automatically restarts the Node.js application when file changes in the directory are detected.
- **passport:** A popular authentication middleware for Node.js.
- **passport-local:** An authentication strategy for Passport and Node.js that uses a username and password for authentication.
- **postcss:** A tool for transforming CSS with JavaScript plugins.
- **postcss-cli:** A command-line interface for PostCSS.
- **tailwindcss:** A utility-first CSS framework that lets you rapidly build custom designs.
- **validator:** A library of string validators and sanitizers.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Questions

If you would like to see more of my work, checkout my [GitHub](https://github.com/HunterPadgett) repo and my [portfolio](https://hunterpadgett.netlify.app/). If you have any additional questions, please contact me directly at: hunterpadgett.dev@gmail.com

Feel free to customize the content and structure further based on your preferences and project specifics.

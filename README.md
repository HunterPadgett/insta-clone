# Huntagram

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS](https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![fontawesome](https://img.shields.io/badge/font%20awesome-%23339AF0.svg?&style=for-the-badge&logo=font%20awesome&logoColor=white)
## Description

Huntagram is a fullstack Instagram clone built with Node.js, Express, MongoDB, Mongoose, EJS, Tailwind, and Cloudinary. Users can create an account, upload photos, like and comment on other users' posts, and delete posts that belong to them.

The app uses cloudinary for image uploading and storage, and MongoDB/Mongoose for data persistence. EJS is used for rendering dynamic views on the server side, and Tailwind is used for styling the app. Bcrypt is used for password hashing, Passport and Passport-Local for authentication, and Connect-Mongo for session storage.

Deployed link: https://huntagram.onrender.com/

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
- [Contributions](#contributions)
- [Technologies](#technologies)
- [Questions](#questions)

## Installation

To get started with this project, first clone the repository and navigate to the project directory: <br/>
`cd Desktop/` <br/>
`git clone https://github.com/HunterPadgett/insta-clone.git` <br/>
`cd insta-clone`

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

This will start the app at `http://localhost:<whatever-port-number-you-put-in-the-env>`.

## Usage
  
To use the app, first sign up for an account by clicking the "Sign Up" button on the home page. Once you have signed up it will log you in automatically.
  
From the home page you can view all other users' posts sorted by creation date. To like or comment on a post, click the heart or comment icons on the post. You are given an option to delete the posts made by yourself which will remove the post from the database and from Cloudinary.
  
To add a post, click on the "Add new post" button or click on the "Profile" button in the navigation bar. Fill out the form with a caption and a photo. Click on "Upload" to add the post to the database and view it on the home page. Your post will appear on your profile page and on the home page for other users to see.

* Note: Some features of the app may require authentication. You can create an account by clicking on the "Sign Up" button in the navigation bar and creating an account.

This project was created by [Hunter Padgett](https://hunterpadgett.netlify.app/)

## Contributions

Contributions to Huntagram are welcome! If you have an idea for a feature or improvement, feel free to open an issue or submit a pull request.

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

## Questions

If you would like to see more of my work, checkout my [GitHub](https://github.com/HunterPadgett) repo and my [portfolio](https://hunterpadgett.netlify.app/). If you have any additional questions, please contact me directly at: hunterpadgett.dev@gmail.com

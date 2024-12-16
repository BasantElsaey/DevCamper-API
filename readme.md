# DevCamper API

> Backend API for the DevCamper application which is a bootcamp directory website.This Project builds a comprehensive RESTful API for a bootcamp directory and course management platform.The API facilitates advanced CRUD operations and integrates key features such as user authentication, role-based access control, and geospatial search capabilities.
Using Node.js, Express.js, MongoDB, Mongoose, JWT (JSON Web Tokens), Postman for API testing, and advanced middleware for request handling.

## Usage 

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies
```
npm install
```

## Run App
```
# Run in development mode
npm run dev

# Run in production mode
npm run start
```

### Key Technologies and Skills Used 

- Node.js: Serves as the runtime environment for executing JavaScript on the server side, enabling the development of scalable network applications.

- Express.js: A web application framework for Node.js that simplifies the process of building robust APIs by providing a set of features for web and mobile applications.

- MongoDB: A NoSQL database used for storing and managing data in a flexible, JSON-like format, facilitating scalability and ease of development.

- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward, schema-based solution to model application data.

- JSON Web Tokens (JWT): Employed for secure user authentication and authorization, allowing the verification of users and the protection of API routes.

- Geocoding with MapQuest API: Implemented to convert addresses into geographic coordinates, enabling location-based search functionality within the application.

- CRUD Operations: Proficiency in implementing Create, Read, Update, and Delete operations, fundamental for managing resources within the API.

- Middleware in Express.js: Utilized to handle and process requests, responses, and implement additional functionality such as logging, authentication, and error handling.

- Security Best Practices: Incorporated measures such as data sanitization, protection against cross-site scripting (XSS), and implementing Cross-Origin Resource Sharing (CORS) policies to safeguard the application.

- Version Control with Git: Managed codebase and tracked changes using Git, facilitating collaboration and version management.

- API Documentation with Postman: Created and tested API endpoints using Postman, ensuring comprehensive documentation and facilitating easier consumption of the API by other developers.

### Key Features
- Bootcamp Management: Create, update, and delete bootcamps with geolocation functionality (using GeoJSON).
  
- Course Management: Associate courses with bootcamps, including pricing and description.
  
- User Authentication: Secure login and registration using JWT and password hashing.
  
- Role-Based Access Control: Different access levels for users (e.g., admin, publishers, and general users).
  
- Advanced Filtering & Pagination: Query bootcamps and courses by location, price range, or other parameters.
  
- File Uploads: Supports uploading photos for bootcamps.
  
- API Documentation: Generated with tools like Postman or Swagger.
  
### Achievements
- Implemented clean and modular code using MVC architecture for maintainability.
  
- Enhanced performance through optimized database queries with Mongoose.
  
- Provided comprehensive error handling for better developer experience.

### Version & License
```
- Version : v1.0.0
- License : MIT
```

## "Plan-It" | React Node Project 

## Screenshots

Home Page View | Login Sign-up Page View
:-------------------------:|:-------------------------:
![Homepage](https://github.com/BlitzDampfwalze/plan-it-node/blob/master/read-me-images/landing.JPG)  |  ![Login](https://github.com/BlitzDampfwalze/plan-it-node/blob/master/read-me-images/login.JPG)
User Dashboard | Trip Planning Room
![User Dashboard](https://github.com/BlitzDampfwalze/plan-it-node/blob/master/read-me-images/dashboard.JPG)  |  ![Trip Planning Room](https://github.com/BlitzDampfwalze/plan-it-node/blob/master/read-me-images/trip-room.JPG)

## Wireframes 
![Wireframe of Dashboard](https://github.com/BlitzDampfwalze/plan-it-node/blob/master/read-me-images/wireframe-dashboard.jpg)
![Wireframe of Trip Planning Room](https://github.com/BlitzDampfwalze/plan-it-node/blob/master/read-me-images/wireframe-room.jpg)

## Working Prototype
You can access a working prototype here: https://dashboard.heroku.com/apps/plan-it-react-capstone
#### Demo Login: demo@demo.com Password: testing

## Business Objects
* User 
  * email
  * password 
  * username

* Event 
  * title
  * description
  * password

* Schedule 
  * event-id 
  * date 
  * details

* Tasks 
  * username
  * task
  * completion

* Chat (in development)
  * event-id
  * user
  * message
  * date & time

## Functionality
The app's functionality includes:
* Users have the ability to create an account that stores information unique to them
* User can create event rooms, read and edit documents, as well as assign and modify tasks for users.

## Technology
* Front-End: React.js | Redux | HTML5 | CSS3 | JavaScript ES6
* Back-End: Node.js | Express.js | Socket Testing: Mocha | Supertest | RESTful API Endpoints 
* Database: MongoDB | Mongoose
* Security: bcrypt.js, JWT

## Responsive
App is strongly built to be usuable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but pursuing future enhancements include:
* Chat functionality for users within a given room
* Ability to archive tasks for future review
* More & customized validation
* Additionally styling
* Permission levels
* Weather api to display forecasted weather for a given location and date
* Expense pane to track and budget expenses for the trip
* Image api to populate newly created rooms
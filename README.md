## ![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) Software Engineering Immersive Course: Project 2 - Reacathon

<img src="https://imgur.com/cNHQjrf.jpg">


## Brief
Build a React app that consumes a public API using classical and functional components. Focus on writing semantically clean HTML that makes structural sense.

Timeframe: Scran & Screen - 48 hours, pair programming


## Summary
Scran and Screen allows users to search for restaurant recommendations near a chosen location, then shows the movie times that day for nearby cinemas. The app is built using React and uses 2 public RESTful API’s (Zomato and Cinelist) to retrieve the data. We coded collaboratively throughout the entirety of the project sharing a laptop and switching the driver and navigator every 30 minutes. This was the first project where we’d accessed an API and used Insomnia.

(Scran is a term used for food generally in the north of England, originally used by the British Royal Navy.)


## Deployment

Play the game [here](https://scran-and-screen.herokuapp.com/ "play the game") on Heroku.

### Installation Instructions
To run the app from the source code, use the clone button to download the source code from GitHub. From the root directory type "npm run serve" in the terminal. The project will run on localhost:8000, and will be viewable on any web browser.


## Technologies & Methodologies Used
- HTML 5
- CSS 3
- JavaScript (ES6)
- React.js
- React Router
- Express
- Axios
- Webpack
- Babel
- Npm
- Insomnia
- GitHub
- Git
- Heroku
- Adobe Illustrator
- Wireframes
- Flexbox Layout Module


## Features
Users can:
- Search for a restaurant by city (uses Zomato API)
- Open a dropdown menu of possible locations
- Select a recommended restaurant from 10 nearby
- View details of the restaurant alongside the closest cinema's listings


## Website Architecture

*Home Page*
<img src="https://imgur.com/rygsmLr.jpg">

*Restaurant Index Page*
<img src="https://imgur.com/i60PaNR.jpg">

*Restaurant & Movie Result Page*
<img src="https://imgur.com/fO48b3a.jpg">


## Approach

### Day 1 - PM
We started at 4pm on the Wednesday evening and quickly got to work deciding that we would use the Zomato API which used longitude and latitude to locate restaurants. We then found the Cinelist API which used longitude and latitude information in the same way so we were able to pass the location information from the Zomato API to the Cinelist API. 

It was important that both APIs would grant us access almost immediately and were free. We read the relevant documentation and applied for tokens. We experimented to see the responses various API requests would return when called in Insomnia. We drew up rough wireframes, drafted the API calls we planned to make and put together the logo.

*Planning API calls*
<img src="https://imgur.com/ujQ9K6Y.jpg">


### Day 2
We built the architecture of the site adding the calls which had been tested in Insomnia.

Once we had linked up the Cinelist API we were struggling to display the films that had showed in Insomnia on Day 1. Our cinemas weren't returning any responses and we realised that the API wasn't working properly. We looked for an alternative API but they all charged fees. There were no contact details on the Cinelist API website but we hoped that it was a temporary glitch. It was too late to start over so we decided to temporarily hard code in cinema listings to give the impression of what should have been there.  

(Sadly, over the following week the whole API was taken down.)

### Day 3 - AM
We used the morning to style the app and tidy up our code.


## Challenges Still To Overcome
- Cinelist API removal


## Future Improvements
- Find Cinelist API replacement
- Improved layout and styling 
- Error handling for the forms
- Add Mapbox to visually locate restaurants/movies
- Calculate travel between Scran and Screen
- Further filters on movies and restaurants
- Booking system


## Successes
- Successfully calling the API's
- Overcoming difficulties with Flexbox Layout Module


## Takeaways
The importance of:
- Achieving MVP then splitting the app into components
- Regular well commented git commits - noting what was working and what wasn’t
- Working insomnia requests




---

linkedin.com/in/sophieturnell/

---
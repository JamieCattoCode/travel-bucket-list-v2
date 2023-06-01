# Travel Bucket List 
A travel app to help you plan your next trip - name a place and discover monuments, points of interest, and landmarks in the area.

Credit to Josh Bamford (https://github.com/JoshBamford09) for the idea and helping to develop the original version of the app's front end.

## How the app works
This app is built with create-react-app, using Material UI (as well as MUI icons) as an important component library.

To get the information about places worth visiting based on location, I used Open Trip Map. Their /places endpoint allowed allowed me to get a place's coordinates from the user's query; then the coordinates gave me a range inside which I could find the search results for places in that area.

I also used an API called Rapid Translate which automatically detects the language and translates text. This was necessary because some of the data from foreign countries was scraped from Wikipedia without translation to English.

Authentication and authorisation are done with the help of the ExpressJS-built backend API (https://github.com/JamieCattoCode/travel-bucketlist-api).

The user must create an account and be signed in to access the main features of the site. This was done only as a means of experimenting with protected routes in React Router DOM.

The database is built with Postgres and is run inside a Postgres Docker container. More details of this can be found in the API as linked above.

All API calls were made with Axios.

## Screenshots
![Opening screen](/src/assets/screenshots/1-Start-page.png)
![Empty search page](/src/assets/screenshots/2-Explore-empty.png)
![Search page with results](/src/assets/screenshots/3-Search-with-results.png)
![Details of a particular location](/src/assets/screenshots/4-location-details.png)
![User profile screen](/src/assets/screenshots/5-Profile.png)
![Sign in screen](/src/assets/screenshots/6-Sign-in.png)
![Sign in with validation alert](/src/assets/screenshots/7-Sign-in-validation.png)
![Sign up](/src/assets/screenshots/8-Sign-up.png)
![Favourites page](/src/assets/screenshots/9-favourites.png)

## Video Demo
You can find a video demo of the app working on my LinkedIn page:
https://www.linkedin.com/posts/jamie-catto-6876421b8_i-was-updating-the-readme-file-for-mine-and-activity-7069628843677949952-pxc7?utm_source=share&utm_medium=member_desktop

## Usage
### Setting up the backend
1. Clone down the repository of the API found here https://github.com/JamieCattoCode/travel-bucketlist-api
2. Follow the instructions inside of the API's README.md to set up your local Postgres container and run the local backend server.

### Running the app
1. Clone down the repository and enter the directory in your terminal.
2. Run the command `npm i` to  install dependencies
3. Make sure your postgres Docker image and local backend server are running
4. In the root repository of Travel Bucket List v2, run the command `npm start` to run the application on the port 3000

## Current Limitations
- The accuracy of the search can be thrown off depending on the geographical size of the place entered, due to the fact that the actual size of search area always stays the same. This could be remedied by using another API to find the size of the place the user has queried, and weighting the search area where we grab our points of interest from based on that.
import TinyTriumphs from "../images/TinyTriumphs.png"
import looapp from "../images/looapp.png"
import weatherdashboard from "../images/weatherdashboard.png"

const portfolioData = [
    {
        id: 1,
        title: "Tiny Triumphs",
        subheader: "Medical Milestone Tracker/Database",
        image: TinyTriumphs,
        description: "MVC pattern medical and developmental milestone tracking app for children ages 0-6.",
        deployedApp: "https://tinytriumphs.herokuapp.com",
        githubRepo: "https://github.com/tinyTriumphs/tinyTriumphs",
        technologies: "MySQL, Sequelize, Express.js, Node.js, Handlebars.js, Heroku, Bootstrap, AWS/Multer",
        details: "Users create children which are supplied “ToDos” with recommended age ranges for completion and can turn them into “TaDas” once the milestone is achieved. Features signup and login components which save user and child information in MySQL and makes use of sessions with cookies.",
        responsibilities: "Implementation of AWS/Multer image upload functionality, Handlebars.js templates, MySQL database implementation, and UX/UI"
    },
    {
        id: 2,
        title: "LOO",
        subheader: "Accessible Bathroom Geolocator",
        image: looapp,
        description: "This is an app that finds gender neutral and accessible public restrooms near you.",
        deployedApp: "https://safe-haven-bathrooms.github.io/App/",
        githubRepo: "https://github.com/Safe-Haven-Bathrooms/App",
        technologies: "JavaScript, Tailwind CSS, jQuery, Google Maps API, Refuge Restrooms API",
        details: "This app finds gender neutral and accessible public restrooms nearest to the user via geolocation or Google Map search.",
        responsibilities: "Project management, implementation of the Refuge Restrooms API data display, local storage, and Tailwind CSS."
    },
    {
        id: 3,
        title: "Weather Dashboard",
        subheader: "Searchable Weather App",
        image: weatherdashboard,
        description: "A searchable weather app that provides location-based present/future forecasting.",
        deployedApp: "https: //ajolsavsky.github.io/weather-dashboard/",
        githubRepo: "https://github.com/ajolsavsky/weather-dashboard",
        technologies: "JavaScript, Bootstrap, jQuery, Moment.js"
    },
    {
        id: 4,
        title: "Sample Title",
        subheader: "More about the project",
        image: "https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo",
        description: "This is a project all about space! I am testing this now.",
        deployedApp: "https://ajo-text-editor.herokuapp.com/",
        githubRepo: "https://github.com/ajolsavsky",
        technologies: "Node, MongoDB, special space junk"
    },
    {
        id: 5,
        title: "Another title",
        subheader: "More about the project",
        image: "https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk",
        description: "This is a project all about space! I am testing this now.",
        deployedApp: "https://ajo-text-editor.herokuapp.com/",
        githubRepo: "https://github.com/ajolsavsky",
        technologies: "Node, MongoDB, special space junk"
    },
    {
        id: 6,
        title: "A third project",
        subheader: "More about the project",
        image: "https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g",
        description: "This is a project all about space! I am testing this now.",
        deployedApp: "https://ajo-text-editor.herokuapp.com/",
        githubRepo: "https://github.com/ajolsavsky",
        technologies: "Node, MongoDB, special space junk"
    },
]

export default portfolioData;
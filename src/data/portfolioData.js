import TinyTriumphs from "../images/TinyTriumphs.png"
import looapp from "../images/looapp.png"
import weatherdashboard from "../images/weatherdashboard.png"
import notetaker from "../images/notetaker.png"
import employeetracker from "../images/employeetracker.png"
import ecommerce from "../images/ecommerce.png"

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
        title: "Note Taker",
        subheader: "Web App with Express.js Backend",
        image: notetaker,
        description: "Write, save, and delete notes using an Express.js back end.",
        deployedApp: "https://peaceful-bastion-70910.herokuapp.com/notes",
        githubRepo: "https://github.com/ajolsavsky/note-taker",
        technologies: "Node, Express.js, Heroku"
    },
    {
        id: 5,
        title: "Employee Tracker",
        subheader: "MySQL Command Line App",
        image: employeetracker,
        description: "This is a command-line application that allows you to manage a company's database of employees.",
        deployedApp: "https://drive.google.com/file/d/1qHu8SXgKQXGtibfqxeXaAecW_aHC1rlD/view",
        githubRepo: "https://github.com/ajolsavsky/employee-tracker",
        technologies: "Node.js, Inquirer, MySQL"
    },
    {
        id: 6,
        title: "E-Commerce Back-End",
        subheader: "RESTful CRUD operations using Express.js/Sequelize",
        image: ecommerce,
        description: "This project creates the back end for an e-commerce app utilizing Express.js and Sequelize to interface with a MySQL database.",
        deployedApp: "https://drive.google.com/file/d/1Oq6a6LyFhuD3mjjn4Co4ZfRlxlkI9Du3/view",
        githubRepo: "https://github.com/ajolsavsky/e-commerce",
        details: "Database created using MySQL through models and associations, and also demonstrates API routes to perform RESTful CRUD operations. Functionality of this app can be viewed in the walkthrough videos below.",
        technologies: "Node, Express.js, Sequelize, MySQL, Insomnia"
    },
]

export default portfolioData;
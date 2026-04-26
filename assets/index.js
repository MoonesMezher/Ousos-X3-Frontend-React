const lectures = [
    {
        id: "html-1",
        number: 1,
        title: "Intro + HTML Fundamentals: Structure and Basic Tags",
        description: "Introduction, Setup, HTML Introduction, HTML Syntax, HTML Formatting and Spacing",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "html-2",
        number: 2,
        title: "Head Element, Links, Text Elements, Multimedia, Tables",
        description: "Head Element, Links and Anchor Elements, Text Elements, Text Formating, Multimedia, Images, Lists, Tables",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "html-3",
        number: 3,
        title: "Semantic Elements",
        description: "Container Elements and Layout, Advanced Multimedia, Preformatted Text Element, IFrame Element, HTML Forms",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "html-4",
        number: 4,
        title: "HTML5, CSS Introduction, Selectors",
        description: "HTML Entities and Special Characters, HTML5 Semantic Elements Deep Dive, HTML Accessibility, CSS Introduction, Selectors",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "css-1",
        number: 5,
        title: "Typography, Colors, Icons",
        description: "CSS Selectors & Specificity, Typography, Colors & CSS Variables, Google Fonts Integration, Working with Icons",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-2",
        number: 6,
        title: " CSS Box Model, Backgrounds, Display, Positioning",
        description: "CSS Box Model - Complete Layout Foundation, Borders, Backgrounds, Box Shadow, Radius, Outline, Display, Position values (static, relative, absolute, fixed, sticky), top/right/bottom/left offsets, z-index stacking",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-3",
        number: 7,
        title: "Flex & Grid",
        description: "Flexbox overview, display: flex, main/cross axis, flex-direction (row/column), justify-content (flex-start, center, space-between), align-items (stretch, center, baseline), and flex-wrap, Display: grid, grid-template-columns/rows (fixed, fr, auto), grid-gap (row/column), justify-items/align-items, and grid-auto-flow",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-4",
        number: 8,
        title: "Project",
        description: "Style Shop Landing Page",
        image: "./assets/images/logos/Project.webp",
        status: "completed",
        content: "CSS",
        hidden: true
    },
    {
        id: "css-5",
        number: 9,
        title: "CSS Units, Small CSS Properties, CSS Transforms",
        description: "CSS Units & Measurements - Complete Guide, Small but Powerful CSS Properties, CSS Transforms",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-5",
        number: 10,
        title: "Pseudo-elements, CSS Transitions, CSS Transforms",
        description: "Pseudo-elements & Pseudo-classes - Advanced Selectors, CSS Transitions - Smooth Animations",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-6",
        number: 11,
        title: "Pratical Quiz",
        description: "Pratical Quiz",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS",
        hidden: true
    },
    {
        id: "css-7",
        number: 12,
        title: "Responsive Design, Animations & Guides & Advanced Level",
        description: "Responsive Design, Animations, Guides",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "project-1",
        number: 13,
        title: "Project 1",
        description: "Project 1",
        image: "./assets/images/logos/Project.webp",
        status: "completed",
        hidden: true,
        content: "HTML, CSS, Tailwind"
    },
    {
        id: "project-2",
        number: 14,
        title: "Project 2",
        description: "Project 2",
        image: "./assets/images/logos/Project.webp",
        status: "completed",
        hidden: true,
        content: "HTML, CSS, Tailwind"
    },
    {
        id: "tailwind",
        number: 15,
        title: "Tailwind CSS",
        description: "Tailwind classes for flex (flex, justify, items), grid (grid-cols, gap), responsive prefixes (sm:, md:, lg:), and building mobile-first components with hover/focus states",
        image: "./assets/images/logos/tailwind-css.webp",
        status: "completed",
        content: "Tailwind"
    },
    {
        id: "project-3",
        number: 16,
        title: "Project 3",
        description: "Project 3",
        image: "./assets/images/logos/Project.webp",
        status: "not-started",
        hidden: true,
        content: "HTML, CSS, Tailwind"
    },
    {
        id: "JS-1",
        number: 17,
        title: "JavaScript Syntax: Variables, Data Types, and Operators, Control Flow, Scope, Intro to Functions",
        description: "Intro, Logs, Declaring variables (var, let, const), primitive types (string, number, boolean, null, undefined, symbol, bigint), objects/arrays literals, type coercion, and operators (arithmetic, assignment, comparison, logical, ternary), if else, while, do while, for, switch, , scope (global, function, block)",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "JS"
    },
    {
        id: "JS-2",
        number: 18,
        title: "Functions, Arrays",
        description: "Function declarations vs. expressions vs. arrow functions, parameters/rest/spread, default values, hoisting behavior, HOF, Common Array Methods",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "JS"
    },
    {
        id: "JS-3",
        number: 19,
        title: "Arrays, Objects & Working with Strings, Numbers, and Booleans, Destructuring, Falsy & Truthy Values",
        description: "Arrays and Objects - Data Structures, Common Array Methods, Iteration Methods, Objects - Key-Value Collections, Working with Objects, Working with Strings, Numbers, and Booleans, Destructuring, Falsy & Truthy Values",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "JS"
    },
    {
        id: "JS-4",
        number: 20,
        title: "Problem Solving",
        description: "Solve 10 Methods",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        hidden: true,
        content: "JS"
    },
    {
        id: "JS-5",
        number: 21,
        title: "Nullish and Other Modern Operators, DOM Manipulation - Interacting with Web Pages - Events",
        description: "Nullish and Other Modern Operators, What is the DOM, DOM Tree Structure, Selecting DOM Elements, Manipulating Elements, Creating and Modifying Elements, Events and Forms - User Interaction",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "JS"
    },
    {
        id: "JS-6",
        number: 22,
        title: "Events and Forms - User Interaction",
        description: "Understanding Events, Common Event Types, Event Handling Methods, Working with Forms, Event Propagation",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "JS"
    },
    {
        id: "JS-7",
        number: 23,
        title: "Events and Forms - User Interaction - BOM",
        description: "Understanding Events, Common Event Types, Event Handling Methods, Working with Forms, Event Propagation, Browser Object Model (BOM), Window Object, Other BOM Objects",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "JS"
    },
    {
        id: "JS-8",
        number: 24,
        title: "Asynchronous JavaScript",
        description: "Asynchronous JavaScript, Async Techniques, Working with Time, Fetch, JSON, and Async Data Handling",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "JS."
    },
    {
        id: "GIT",
        number: 25,
        title: "Git & Github",
        description: "Git Basics - Version Control Fundamentals, GitHub & Git Hosting Platforms, Terminal & Command Line Essentials, Git Setup & Configuration, Git Workflow & Areas - Understanding Git's Architecture, Essential Git Commands & Daily Workflow",
        image: "./assets/images/logos/github.webp",
        status: "not-started",
        content: "GIT"
    },
    {
        id: "GIT",
        number: 26,
        title: "Branching in Git & Serverless Deployment",
        description: "Git Branching & Merging Strategies, README Files & Markdown Documentation, Gitignore Files - Ignoring Files in Git, Serverless Deployment - Deploy Frontend Projects to Production",
        image: "./assets/images/logos/github.webp",
        status: "not-started",
        content: "GIT"
    },
    {
        id: "REACT",
        number: 27,
        title: "React Fundamentals: Setup, Components, and JSX",
        description: "React Introduction - What is React and Why Choose It?, Modern React Setup & Development Environment, React Fundamentals: Components, JSX & Props",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "REACT"
    },
    {
        id: "REACT",
        number: 28,
        title: "Recap",
        description: "Recap React Fundamentals",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "REACT",
        hidden: true
    },
    {
        id: "REACT",
        number: 29,
        title: "React Hooks (useState)",
        description: "State Management & Event Handling, React Hooks: useState",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "REACT"
    },
    {
        id: "REACT",
        number: 30,
        title: "useEffect, Advanced Hooks",
        description: "React Hooks: useEffect, Advanced Hooks & Performance Optimization",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "REACT"
    },
    {
        id: "REACT",
        number: 31,
        title: "React Router",
        description: "React Router & Navigation",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "REACT"
    },
    {
        id: "API",
        number: 32,
        title: "Understanding APIs and Web Communication",
        description: "APIs and JSON Data Format, Backend Role (Server), Frontend Role (User Interface), Request Components, Response Components",
        image: "./assets/images/logos/API.webp",
        status: "not-started",
        content: "API"
    },
    {
        id: "REACT",
        number: 33,
        title: "Context API, and State Management System, External Libraries",
        description: "Context API for global state (createContext, Provider, useContext), State Management wit Zustand, External Libraries & Ecosystem",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "REACT"
    },
    {
        id: "PROJECT",
        number: 34,
        title: "Anime Project - Part 1",
        description: "",
        image: "./assets/images/logos/project.webp",
        hidden: true,
        status: "not-started",
        content: "PROJECT"
    },
    {
        id: "PROJECT",
        number: 35,
        title: "Anime Project - Part 2",
        description: "",
        image: "./assets/images/logos/project.webp",
        hidden: true,
        status: "not-started",
        content: "PROJECT"
    },
    {
        id: "PROJECT",
        number: 36,
        title: "Anime Project - Part 3",
        description: "",
        image: "./assets/images/logos/project.webp",
        hidden: true,
        status: "not-started",
        content: "PROJECT"
    },
];

// DOM Elements
const lecturesTableBody = document.getElementById('lectures-table-body');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const statusFilter = document.getElementById('status-filter');
const sortBy = document.getElementById('sort-by');
const totalLecturesEl = document.getElementById('total-lectures');
const completedLecturesEl = document.getElementById('completed-lectures');
const inProgressLecturesEl = document.getElementById('in-progress-lectures');
const totalDurationEl = document.getElementById('total-duration');

// Initialize the portal
function initPortal() {
    renderLecturesTable(lectures);
    updateStatistics();
    setupEventListeners();
}

// Render the lectures table
function renderLecturesTable(lecturesToRender) {
    lecturesTableBody.innerHTML = '';
    
    lecturesToRender.forEach(lecture => {
        const row = document.createElement('tr');
        
        // Determine status badge class
        let statusClass = '';
        let statusText = '';
        
        switch(lecture.status) {
            case 'completed':
                statusClass = 'status-completed';
                statusText = 'Completed';
                break;
            case 'in-progress':
                statusClass = 'status-in-progress';
                statusText = 'In Progress';
                break;
            default:
                statusClass = 'status-not-started';
                statusText = 'Not Started';
        }
        
        row.innerHTML = `
            <td class="lecture-number">${lecture.number}</td>
            <td class="lecture-img">
                <img src="${lecture.image}" alt="image-${lecture.number}">
            </td>
            <td>
                <div class="lecture-title">${lecture.title}</div>
            </td>
            <td class="lecture-description">${lecture.description}</td>
            <td class="lecture-status">
                <span class="status-badge ${statusClass}">${statusText}</span>
            </td>
            <td>
                ${lecture.hidden? "":`<button class='action-btn' data-lecture-id=${lecture.number}>View</button>`}
            </td>
        `;
        
        lecturesTableBody.appendChild(row);
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lectureId = this.getAttribute('data-lecture-id');
            viewLecture(lectureId);
        });
    });
}

// Update statistics
function updateStatistics() {
    const total = lectures.length;
    const completed = lectures.filter(l => l.status === 'completed').length;
    const inProgress = lectures.filter(l => l.status === 'in-progress').length;
    
    // Calculate total duration    
    const totalHours = Math.round(lectures.length * 2);
    
    totalLecturesEl.textContent = total;
    completedLecturesEl.textContent = completed;
    inProgressLecturesEl.textContent = inProgress;
    totalDurationEl.textContent = `${totalHours}h`;
}

// Filter and search lectures
function filterLectures() {
    const searchTerm = searchInput.value.toLowerCase();
    const statusValue = statusFilter.value;
    const sortValue = sortBy.value;
    
    let filteredLectures = lectures.filter(lecture => {
        const matchesSearch = lecture.title.toLowerCase().includes(searchTerm) || 
                                lecture.description.toLowerCase().includes(searchTerm);
        
        const matchesStatus = statusValue === 'all' || lecture.status === statusValue;
        
        return matchesSearch && matchesStatus;
    });
    
    // Sort lectures
    filteredLectures.sort((a, b) => {
        if (sortValue === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortValue === 'duration') {
            const aDuration = parseFloat(a.duration);
            const bDuration = parseFloat(b.duration);
            return bDuration - aDuration;
        } else {
            return a.number - b.number;
        }
    });
    
    renderLecturesTable(filteredLectures);
}

// View lecture details
function viewLecture(lectureId) {        
    if(!lectureId) {
        alert(`Invalid Lecture Id`);
        return;
    }

    const lecture = lectures.find(e => e.number === +lectureId);    

    if(!lecture) {
        alert("Invalid Lecture Id");
        return;
    }

    if(lecture.status === "not-started") {
        alert("You can not visit not-completed lecture");
        return;
    }
    // For demonstration, we'll highlight the selected lecture
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.textContent = 'View';
        btn.style.backgroundColor = '';
    });
    
    const selectedBtn = document.querySelector(`.action-btn[data-lecture-id="${lectureId}"]`);

    if (selectedBtn) {
        window.location.assign(`lecture${lectureId}.html`)
    }
}

// Set up event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', filterLectures);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            filterLectures();
        }
    });
    statusFilter.addEventListener('change', filterLectures);
    sortBy.addEventListener('change', filterLectures);
}

// Initialize the portal when the DOM is loaded
document.addEventListener('DOMContentLoaded', initPortal);

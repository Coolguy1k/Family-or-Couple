var score = 0;
var container = document.querySelector("#container");
var quizContent = document.querySelector("#quizContent");
var questionTitle = document.querySelector("#qTitle")
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start");

var questions = [
    {
        title: " How can a datatype be declared to be a constant type? ",
        choices: ["let", "constant", "const", "var"],
        answer: "const"
    },
    {
        title: "Who created JavaScript language?",
        choices: ["Brendan Eich", "Douglas Crockford", "James Gosling", "Ryan Dahl"],
        answer: "Brendan Eich"
    },
    {
        title: "Inside what HTML tag you would put JavaScript code?",
        choices: ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: "<script>"
    },
    {
        title: "How do you declare a JavaScript variable x?",
        choices: ["define x;", "def x;", "variable x;", "var x"],
        answer: "var x"
    },
    {
        title: "When we don't assign a value to a variable it will be?",
        choices: ["undefined", "null", "0", "NaN"],
        answer: "undefined"
    },
    {
        title: "A string can be converted to an array using which method:",
        choices: ["slice()", "splice()", "piece()", "split()"],
        answer: "split()"
    },
    {
        title: "Which of the following properties return the URL of the current page.",
        choices: ["window.location.href", "location.URL", "URL.location", "window.location.hostname"],
        answer: "window.location.href"
    },
    {
        title: "Find the intruder:",
        choices: ["Function()", "Number()", "Math()", "Boolean()"],
        answer: "Math()"
    },
    {
        title: "What is JavaScript?",
        choices: ["Language that follows ECMAScript standard", "Client-side scripting language (web browsers)", "Server-side scripting language", "All these"],
        answer: "All these"
    },
    {
        title: "Where is the correct place to insert JavaScript on a web page?",
        choices: ["Inside <head>", "Inside <body>", "Inside <head> and <body>", "None of these"],
        answer: "Inside <head> and <body>"
    }   
];
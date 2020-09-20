const inquirer = require("inquirer");

// array of questions for user
const promptQuestions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name:'name',
            message:'What is your name of your App?'
        },
        {
            type:'input',
            name:'description',
            message:'Provide a description for what yout App does'
        },
        {
            type:'input',
            name:'install',
            message:'Provide instructions on how to install your App'
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions on how to use your App'
        }, 
        {
            type:'input',
            name:'link',
            message:'Enter the Github link to your App(required)'
        }, 
        {
            type:'input',
            name:'contributors',
            message:'List who contributed to developing this app'
        },
        {
            type: 'checkbox',
            name:'languages',
            message:'What did you use to build this project with?(Check all that apply)',
            choices:['Javascript', 'html', 'css', 'es6', 'jquery', 'bootstrap', 'node']
        },



    ]);
};
    
promptQuestions().then(answers=> console.log(answers));


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

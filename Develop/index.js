const inquirer = require("inquirer");
const fs = require('fs');
const generatemarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
        {
            type: 'input',
            name:'name',
            message:'What is your name of your App?',
       
        },
        {
            type:'input',
            name:'description',
            message:'Provide a description for what your App does'
      
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
        {
            type: 'list',
            name:'license',
            message:'What license are you using?)',
            choices:[
                'Mit License', 
                'GVL GPL License', 
                'Apache License', 
                'No License'
            ]
           
        }
    ]
   

    
//promptQuestions().then(answers=> console.log(answers));


// function to write README file
function writetoFile(fileName, response) {
    fs.writeFile(fileName,response, err =>{
        if(err) {
            throw err;
        }
        console.log("Readme was created");
    });
}

// function to initialize program
function init() {
   prompt(Questions).then((response)=>{
    
    //const response = generatemarkdown(response);
    console.log(response);

    writetoFile("README.md", response);
   })

}

// function call to initialize program
init();

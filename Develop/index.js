const inquirer = require("inquirer");

// array of questions for user
const promptQuestions = readmeData => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name:'name',
            message:'What is your name of your App?',
            validate:nameInput =>{
                if(nameInput){
                    return true;
                }else{
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'description',
            message:'Provide a description for what your App does'
            validate:descriptionInput =>{
                if(descriptionInput){
                    return true;
                }else{
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'install',
            message:'Provide instructions on how to install your App'
            validate:installInput =>{
                if(installInput){
                    return true;
                }else{
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions on how to use your App'
            validate:usageInput =>{
                if(usageInput){
                    return true;
                }else{
                    console.log('Please enter usage instructions!');
                    return false;
                }
            }
        }, 
        {
            type:'input',
            name:'link',
            message:'Enter the Github link to your App(required)'
            validate:linkInput =>{
                if(linkInput){
                    return true;
                }else{
                    console.log('Please enter a link!');
                    return false;
                }
            }
        }, 
        {
            type:'input',
            name:'contributors',
            message:'List who contributed to developing this app'
            validate:contributorsInput =>{
                if(contributorsInput){
                    return true;
                }else{
                    console.log('Please enter the contributors!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name:'languages',
            message:'What did you use to build this project with?(Check all that apply)',
            choices:['Javascript', 'html', 'css', 'es6', 'jquery', 'bootstrap', 'node']
            validate:languagesCheckbox =>{
                if(languagesCheckbox){
                    return true;
                }else{
                    console.log('Please check the languages!');
                    return false;
                }
            }
        }
    ]);
    if(!readmeData.questions) {
        readmeData.questions =[];
    }
    .then(readmeData => {
        readmeData.questions.push(readmeData);
    })
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

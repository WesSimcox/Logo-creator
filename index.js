const inquirer = require("inquirer");
const fs = require("fs");
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Triangle', 'Square', 'Circle'],
        },
        {
            type: 'input',
            name: 'position',
            message: 'Enter the position (x, y):',
        },
        {
            type: 'input',
            name: 'size',
            message: 'Enter the size (width, height):',
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter the color:',
        },
    ])
    .then((answers) => {
        let shape;
        if (answers.shape === 'Triangle') {
            shape = new Triangle(answers.position, answers.size, answers.color);
        } else if (answers.shape === 'Square') {
            shape = new Square(answers.position, answers.size, answers.color);
        } else if (answers.shape === 'Circle') {
            shape = new Circle(answers.position, answers.size, answers.color);
        }

        const drawing = shape.draw();

        fs.writeFile('logo.svg', drawing, (err) => {
            if (err) {
                console.error('An error occurred while saving the logo:', err);
            } else {
                console.log('Logo saved successfully as logo.svg');
            }
        });
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
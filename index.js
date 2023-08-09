const inquirer = require('inquirer')
const { writeFile } = require('fs').promises
const generateSVG = require('./lib/generateSVG')
const validateColor = require('validate-color').default

const promptInquirer = async () => {
    console.log('Generate an SVG logo!')

    try {
        const data = await inquirer.prompt([
            {
                name: 'text',
                type: 'input',
                message: 'Enter a text you would like to display in the logo. (Up to three characters max):',
                validate: (letters) => {
                    if (letters && letters.length <= 3) {
                        return true
                    } else {
                        console.log('\nPlease enter a text for your logo (Up to three characters max)')
                        return false
                    }
                }
            },
            {
                name: 'textColor',
                type: 'input',
                message: 'What color would you like the text to be?',
                validate: (textColor) => {
                    const colorCheck = validateColor(textColor)
    
                    if (textColor && colorCheck) {
                        return true                    
                    } else {
                        console.log('\nPlease enter a valid HTML color, hex, rgb, hsl, hwb, etc.')
                        return false
                    }
                }
            },
            {
                name: 'shape',
                type: 'list',
                message: 'Shape of the logo? Choose one of the following:',
                choices: ['Triangle', 'Circle', 'Square']
            },
            {
                name: 'shapeColor',
                type: 'input',
                message: 'What color would you like the shape to be?',
                validate: (shapeColor) => {
                    const colorCheck = validateColor(shapeColor)
    
                    if (shapeColor && colorCheck) {
                        return true
                    } else {
                        console.log('\nPlease a valid HTML color, hex, rgb, hsl, hwb, etc')
                        return false
                    }
                }
            }
        ])
        const result = generateSVG(data)

        await writeFile('./examples/logo.svg', result)

        console.log('SVG logo generated!')
    } catch (error) {
        console.log(error)
    }
}

promptInquirer()
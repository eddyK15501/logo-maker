const { Triangle, Circle, Square } = require('./shapes')

// Generates an SVG markup; inquirer.js object keys destructored in function parameters
const generateSVG = ({ text, textColor, shape, shapeColor }) => {
        // Variable to store final SVG markup string
        let markupFile = ''
    
        markupFile += '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    
        // Create an instance of the class object accordingly, and set the shape color; call render() method on object to return string
        if (shape === 'Triangle') {
            const triangle = new Triangle()
            triangle.setColor(shapeColor)
            const result = triangle.render()
            markupFile += result
        } else if (shape === 'Circle') {
            const circle = new Circle()
            circle.setColor(shapeColor)
            const result = circle.render()
            markupFile += result
        } else {
            const square = new Square()
            square.setColor(shapeColor)
            const result = square.render()
            markupFile += result
        }
        
        // Set the text input from inquirer data to all uppercase for display; font-family changed
        markupFile += `<text x="150" y="125" font-size="35" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" fill="${textColor}">${text.toUpperCase()}</text></svg>`
    
        return markupFile
}

module.exports = generateSVG
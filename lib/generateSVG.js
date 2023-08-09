const { writeFile } = require('fs').promises
const { Triangle, Circle, Square } = require('./shapes')

const generateSVG = (data) => {
    let markupFile = ''

    markupFile += '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'

    if (data.shape === 'Triangle') {
        const triangle = new Triangle()
        triangle.setColor(data.textColor)
        const result = triangle.render()
        markupFile += result
    } else if (data.shape === 'Circle') {
        const circle = new Circle()
        circle.setColor(data.textColor)
        const result = circle.render()
        markupFile += result
    } else {
        const square = new Square()
        square.setColor(data.textColor)
        const result = square.render()
        markupFile += result
    }
    
    console.log(markupFile)
}

module.exports = generateSVG
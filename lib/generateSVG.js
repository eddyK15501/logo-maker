const { Triangle, Circle, Square } = require('./shapes')

const generateSVG = ({ text, textColor, shape, shapeColor }) => {
        let markupFile = ''
    
        markupFile += '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    
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
    
        markupFile += `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text></svg>`
    
        return markupFile
}

module.exports = generateSVG
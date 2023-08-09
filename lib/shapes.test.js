const { Triangle, Circle, Square } = require('./shapes')

// Jest.js test codes
describe('Shapes', () => {

    // Triangle class
    describe('Triangle', () => {
        it('creates a new Triangle object & sets color when the inherited setColor() method from the parent class is called', () => {
            const triangle = new Triangle()
            triangle.setColor('dodgerblue')
            expect(triangle.color).toEqual('dodgerblue')
        })
        it('when render() method is called, the object returns a triangle SVG element, with the correct fill attribute', () => {
            const triangle = new Triangle()
            triangle.setColor('rgba(0, 0, 0, 0.5)')
            expect(triangle.render()).toEqual(`<polygon points="150,15 243,176 57,176" fill="${triangle.color}" />`)
            expect(triangle.render()).toEqual('<polygon points="150,15 243,176 57,176" fill="rgba(0, 0, 0, 0.5)" />')
        })
    })

    // Circle class
    describe('Circle', () => {
        it('creates a new Circle object & sets color when the inherited setColor() method from the parent class is called', () => {
            const circle = new Circle()
            circle.setColor('red')
            expect(circle.color).toEqual('red')
        })
        it('when render() method is called, the object returns a circle SVG element, with the correct fill attribute', () => {
            const circle = new Circle()
            circle.setColor('hsl(4.71239rad, 60%, 70%)')
            expect(circle.render()).toEqual(`<circle cx="150" cy="110" r="80" fill="${circle.color}" />`)
            expect(circle.render()).toEqual(`<circle cx="150" cy="110" r="80" fill="hsl(4.71239rad, 60%, 70%)" />`)
        })
    })

    // Square class
    describe('Square', () => {
        it('creates a new Square object & sets color when the inherited setColor() method from the parent class is called', () => {
            const square = new Square()
            square.setColor('#33FF3F')
            expect(square.color).toEqual('#33FF3F')
        })
        it('when render() method is called, the object returns a square SVG element, with the correct fill attribute', () => {
            const square = new Square()
            square.setColor('#D1FF33')
            expect(square.render()).toEqual(`<rect x="68" y="30" width="160" height="160" fill="${square.color}" />`)
            expect(square.render()).toEqual(`<rect x="68" y="30" width="160" height="160" fill="#D1FF33" />`)
        })
    })
    
})

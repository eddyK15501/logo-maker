const { Triangle, Circle, Square } = require('./shapes')

describe('Shapes', () => {

    describe('Triangle', () => {
        it('creates a new Triangle object & sets color when the setColor() method is called', () => {
            const triangle = new Triangle()
            triangle.setColor('blue')
            expect(triangle.color).toEqual('blue')
        })

        it('when render() method is called, the object returns XML of a triangle SVG element', () => {
            const triangle = new Triangle()
            triangle.setColor('rgba(0, 0, 0, 0.5)')
            expect(triangle.render()).toEqual('<polygon points="150,20 243,181 57,181" fill="rgba(0, 0, 0, 0.5)" />')
        })
    })

    describe('Circle', () => {
        
    })
})

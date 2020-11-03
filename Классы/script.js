'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { //Класс будет наследоваться от первого класса ректэнгл
    constructor(height, width, text, bgColor) {
        super(height, width); //вызывает конструктор родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, bgcolor: ${this.bgColor}`);
    }
} 

const square = new Rectangle(3, 4);
const long = new Rectangle(3, 7);

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'green');

console.log(square);
console.log(square.calcArea());
console.log(long.calcArea());

div.showMyProps();
console.log(div.calcArea());

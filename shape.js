document.addEventListener('DOMContentLoaded', function () {
    
    // function offset(el) {
    //     var rect = el.getBoundingClientRect(),
    //     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    //     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    // }    

    const inputContainter = document.getElementById('input-container');
    const canvas = document.getElementById('canvas');
    const heightMax = 600,
    widthMax = 600;
    // let position = document.getElementById('canvas')
    // let positionOffset = offset(position)
    // console.log(positionOffset.left, positionOffset.top)

    let rectangleBtn = document.getElementById('rectangle-btn'),
        squareBtn = document.getElementById('square-btn'),
        circleBtn = document.getElementById('circle-btn'),
        triangleBtn = document.getElementById('triangle-btn'),
        shapesArray = [],
        shapes = 0

//click Rectangle btn to display the shape's input dimensions in the canvas       
rectangleBtn.addEventListener('click', function() {

    let height = document.getElementById("rect-height").value;
    let width = document.getElementById("rect-width").value;
    rect = new Rectangle(height,width);
});

//click Square btn to display the shape's input dimensions in the canvas       
squareBtn.addEventListener('click', function() {
    let sideLength = 
    new Square();
});

//click Circle btn to display the shape's input dimensions in the canvas       
circleBtn.addEventListener('click', function() {
    new Circle();
});

//click Triangle btn to display the shape's input dimensions in the canvas       
triangleBtn.addEventListener('click', function() {
    new Triangle();
});


class Shape {
    constructor(xCoord, yCoord, height, width) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.height = height;
        this.width = width;
        // this.bound();
        // this.makeShape();
    }
    // bound() {
    //     xStart
    // }
};

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width)
        this.height = height;
        this.width = width;
        this.aboutShape();
        this.createRectangle();
        shapesArray.push(this)
    }
    aboutShape() {
        //not finished
        // console.log(`${this.height}, ${this.width}`)
    }
    createRectangle() {
        shapes++
        this.div = document.createElement('div');
        this.div.className = 'rectangle';
        this.div.id = shapes
        this.div.style.position = 'absolute'
        this.div.style.top = `${Math.floor(Math.random() * 600)}px`;
        this.div.style.left = `${Math.floor(Math.random() * 600)}px`;
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        canvas.appendChild(this.div);
        // console.log(this)

        // this.div.addEventListener('click', () => {
        //     this.aboutShape();
        // });
    }
};

class Square extends Shape {
    constructor(length) {
        // super(height, width)
        this.length = length;
        // this.width = length;
        // //will this work since they're the same for a square?
        // this.height = this.width
        this.createSquare();
    }
    aboutShape() {
        //not finished
        console.log(`${this.height}, ${this.width}`)
    }
};

class Circle extends Shape {
    constructor(radius) {
    super(height, width)
    this.radius = radius;
    this.renderCircle();
    }
    aboutShape() {
        //not finished
        console.log(`${this.radius}`)
    }
};

class Triangle extends Shape {
    constructor(height, width) {
        super(height, width)
        this.height = height;
        this.width = width;
        this.renderTriangle();
    }
    aboutShape() {
        //not finished
        console.log(`${this.height}, ${this.width}`)
    }
};


});





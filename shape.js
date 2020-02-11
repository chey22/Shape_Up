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
        triangleBtn = document.getElementById('triangle-btn');

    let shapesArray = [],
        shapes = 0;

    let shapeOutput = document.getElementById('shape-output'),
        heightOutput = document.getElementById('height-output'),
        widthOutput = document.getElementById('width-output'),
        areaOutput = document.getElementById('area-output'),
        perimeterOutput = document.getElementById('perimeter-output'),
        radiusOutput = document.getElementById('radius-output');

    //click Rectangle btn to display the shape's input dimensions in the canvas       
    rectangleBtn.addEventListener('click', function () {

        let height = document.getElementById("rect-height").value;
        let width = document.getElementById("rect-width").value;
        rect = new Rectangle(height, width);
    });

    //click Square btn to display the shape's input dimensions in the canvas       
    squareBtn.addEventListener('click', function () {
        let sideLength = document.getElementById("squ-length").value;
        square = new Square(sideLength);
    });

    //click Circle btn to display the shape's input dimensions in the canvas       
    circleBtn.addEventListener('click', function () {
        new Circle();
    });

    //click Triangle btn to display the shape's input dimensions in the canvas       
    triangleBtn.addEventListener('click', function () {
        new Triangle();
    });


    class Shape {
        constructor(height, width) {
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
            super(height, width);
            this.height = height;
            this.width = width;
            this.createRectangle();
            shapesArray.push(this);
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

            this.div.addEventListener('click', () => {
                this.aboutShape();
            });
        }

        //when a shape in the canvas is clicked, display its values in the output container
        aboutShape() {
            let shapeVal = this.div.className
            shapeOutput.value = shapeVal
            let heightVal = this.div.style.height
            heightOutput.value = heightVal
            let widthVal = this.div.style.width
            widthOutput.value = widthVal
            let areaVal = `${this.height * this.width}px`
            areaOutput.value = areaVal
            let perimeterVal = `${(this.height * 2) + (this.width * 2)}px`
            perimeterOutput.value = perimeterVal
            radiusOutput.value = 'N/A'
        }
    };


    class Square extends Shape {
        constructor(sideLength) {
            super();
            this.sideLength = sideLength;
            this.createSquare();
            shapesArray.push(this);
        }

        createSquare() {
            shapes++
            this.div = document.createElement('div');
            this.div.className = 'square';
            this.div.id = shapes
            this.div.style.position = 'absolute'
            this.div.style.top = `${Math.floor(Math.random() * 600)}px`;
            this.div.style.left = `${Math.floor(Math.random() * 600)}px`;
            this.div.style.sideLength = `${this.sideLength}px`;
            canvas.appendChild(this.div);
            // console.log(this)

            this.div.addEventListener('click', () => {
                this.aboutShape();
            });
        }

        //when a shape in the canvas is clicked, display its values in the output container
        aboutShape() {
            let shapeVal = this.div.className
            shapeOutput.value = shapeVal
            let heightVal = this.div.style.sideLength
            heightOutput.value = heightVal
            let widthVal = this.div.style.sideLength
            widthOutput.value = widthVal
            let areaVal = `${this.sideLength * 2}px`
            areaOutput.value = areaVal
            let perimeterVal = `${this.sideLength * 4}px`
            perimeterOutput.value = perimeterVal
            radiusOutput.value = 'N/A'
        }

    };

    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
            this.createCircle();
            shapesArray.push(this);
        }

        createCircle() {
            shapes++
            this.div = document.createElement('div');
            this.div.className = 'circle';
            this.div.id = shapes
            this.div.style.position = 'absolute'
            this.div.style.top = `${Math.floor(Math.random() * 600)}px`;
            this.div.style.left = `${Math.floor(Math.random() * 600)}px`;
            // this.div.style.radius = `${this.radius}px`;
            this.div.style.height = `${this.height * 2}px`;
            this.div.style.width = `${this.width * 2}px`;
            canvas.appendChild(this.div);
            // console.log(this)

            this.div.addEventListener('click', () => {
                this.aboutShape();
            });
        }

        //when a shape in the canvas is clicked, display its values in the output container
        aboutShape() {
            let shapeVal = this.div.className
            shapeOutput.value = shapeVal
            heightOutput.value = 'N/A'
            widthOutput.value = 'N/A'
            let areaVal = `${Math.PI * this.radius * this.radius}px`
            // let areaVal = `${Math.PI * Math.pow(this.radius, 2)}px`
            areaOutput.value = areaVal
            let perimeterVal = `${2 * Math.PI * this.radius}px`
            perimeterOutput.value = perimeterVal
            let radiusVal = this.div.style.radius
            radiusOutput.value = radiusVal
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





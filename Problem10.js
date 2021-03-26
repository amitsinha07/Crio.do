/*Problem Description

Create a Rectangle class that has the following properties:

    A constructor that takes two values a and b describing the length and breadth of the Rectangle respectively.

    A perimeter() method that returns the Rectangle's perimeter.

    A area() method that returns the Rectangle's area.
 */

    class Rectangle {
        constructor(a, b){
            this.a = a;
            this.b = b;
        }
    
        perimeter(){
            return 2*(this.a+this.b);
        }
    
        area(){
            return this.a*this.b;
        }
    }
    module.exports = Rectangle;
    
    let Rect = new Rectangle(5,5);
    console.log(Rect.perimeter(), Rect.area());
    
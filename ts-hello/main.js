// function log(message){
//   console.log(message);
// }
//
// var message = "Hello World";
//
// log(message);
// ***************************************************************************
// declaring variables
// let is limited to the block in which it is declared
// while variables declared with var has the global scope
// USE LET
// function doSomething() {
//   for (var i = 0; i < 5; i++){
//     console.log(i);
//   }
//
//   console.log('Finally: ' + i);
//
// }
//
// doSomething();
// ***************************************************************************
// types
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1,true,'a',false]
//
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
//
// enum Color {Red = 0, Green = 1, Blue = 2};
// let backgroundColor = Color.Red;
//
// let count = 5;
// count = 'a';
// let a: number;
// a = 1;
// a = true;
// ***************************************************************************
// type assertions
// let message;
// let message = 'abc';
// let endswithc = message.endsWith('c');
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// ***************************************************************************
// arrow functions
// let log = function(message) {
//   console.log(message);
// }
// shorter way to do the above:
// let doLog = (message) => {
//   console.log(message)
// }
// or:
// let doLog = (message) => console.log(message);
// ***************************************************************************
// interfaces
// avoid to many properties...encapsulate in object
// let drawPoint = (x, y, a, b, c, d, e) => {
//   //..
// }
// like this:
// let drawPoint = (point) => {
//   //...
// }
// drawPoint({
//   x: 1,
//   y: 2
// })
// or interface like this:
// defining shape of object
// interface Point {
//   x: number,
//   y: number
// }
// let drawPoint = (point: Point) => {
//   //..
// }
// ***************************************************************************
// Classes - groups variables (properties) and fuctions (methods)
// that are highly relate.
// Cohesion = things should go together which we violated above
// let getDistance = (pointA: Point, pointB: Point) =>
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //..,
    };
    return Point;
}());
// objects
// when defining object of custom type you must allocate memory using 'new' operator like this:
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
// interface Point {
//   x: number,
//   y: number,
//   draw:() => draw
// }
// let drawPoint = (point: Point) => {
//   //..
// }
// ***************************************************************************

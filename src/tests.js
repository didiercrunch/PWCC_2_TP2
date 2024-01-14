
import {Point, Rectangle, Circle, Text, drawFigures} from "./tp1.js";

function assert(test, message){
    if(test){
        console.log('OK', message)
    } else {
        console.log('ERREUR', message)
    }    
}

function compareStrings(str1, str2){
   return str1 === str2;
}
function compareIntegers(int1, int2){
    return int1 === int2;
 }

 console.log('TESTS ');

function testRectangleClass(){
    console.log('Tests pour la classe Rectangle');

    const p = new Point(50,50);
    const r = new Rectangle(p, 100, 200, Date.now());
    console.log(r.getCorner());
    console.log(r.getWidth());
    console.log(r.getHeight());
    console.log(r.getColor());
    r.setColor('#5F3384');
    console.log('Nouvelle couleur: ', r.getColor());
    const p2 = new Point(r.getCorner().getX() + 5,r.getCorner().getY() + 5)
    r.setCorner(p2);
    console.log('Nouvelle position du coin:', r.getCorner());
    console.log(r.getId());
    console.log(r.toString());
}
//testRectangleClass();

function testTextClass(){
    console.log('Tests pour la classe Text');
    
    const p = new Point(50,50);
    const str = 'Hello World !';
    const t = new Text(p, str, Date.now());    
    console.log(t.getCorner());
    console.log(t.getText());
    const p2 = new Point(t.getCorner().getX() + 5,t.getCorner().getY() + 5)
    t.setCorner(p2);
    console.log('Nouvelle position du coin:', t.getCorner());
    console.log(t.getId());
    console.log(t.toString());
    
}
//testTextClass();


function testDrawFigures(){
    console.log('Test pour la fonction drawFigures()');

    const pc = new Point(100, 100);
    const c = new Circle(pc, 50, Date.now());

    const pr = new Point(300, 200);
    const r = new Rectangle(pr, 50, 75, Date.now());

    const pt = new Point(50, 400);
    const str = "TESTS";
    const t = new Text(pt, str, Date.now());

    const figures = [];
    figures.push(c);
    figures.push(r);
    figures.push(t);
    drawFigures(document.getElementById('canvas'), figures);
}
//testDrawFigures();



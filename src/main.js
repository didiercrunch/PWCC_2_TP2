console.log('MAIN');

import { 
    Point,
    Circle, 
    Rectangle,
    Text, 
    drawFigures} from "./tp1.js";

const figures = []

/*
function getCircleById(circleId){
    for(const circle of circles){
        if(circle.getId() === circleId){
            return circle;
        }
    }
}
*/

function pointToString(point){
    return `(${point.getX()}, ${point.getY()})`;
}

// Sur le bouton 'Ajouter un cercle'
function drawNewCircle(){
    console.log('Nouveau cercle')
    const x = parseInt(document.getElementById("cx").value);
    const y = parseInt(document.getElementById("cy").value)
    const r = parseInt(document.getElementById("cr").value)
    const p = new Point(x, y);
    const circle = new Circle(p, r, Date.now());
    figures.push(circle);
    renderFigures();
}


// Sur le bouton 'Ajouter un rectangle'
function drawNewRectangle(){
    console.log('Nouveau rectangle');
    const x = parseInt(document.getElementById("x").value)
    const y = parseInt(document.getElementById("y").value)
    const w = parseInt(document.getElementById("width").value)
    const h = parseInt(document.getElementById("height").value)
    const p = new Point(x, y);
    const rectangle = new Rectangle(p, w, h, Date.now());
    figures.push(rectangle);
    renderFigures();
}

// Sur le bouton 'Ajouter un cercle'
function drawNewText(){
    console.log('Nouveau texte')
    const x = parseInt(document.getElementById("x").value);
    const y = parseInt(document.getElementById("y").value);
    const t = document.getElementById("text").value;
    const p = new Point(x, y);
    const text = new Text(p, t, Date.now());
    figures.push(text);
    renderFigures();
}


// Sur le bouton 'Tout effacer'
function clearAllFigures(){
    figures.length = 0;
    renderFigures();
}

function renderFigures(){
    drawFigures(document.getElementById("canvas"), figures);
    
    /*
    populateTable(document.getElementById("table-body"),
        circles,
        onClickUp,
        onClickDown,
        onClickLeft,
        onClickRight,
        onClickPaint);*/
    
}



document.getElementById("draw-circle").addEventListener("click", drawNewCircle);
document.getElementById("draw-rectangle").addEventListener("click", drawNewRectangle);
document.getElementById("draw-text").addEventListener("click", drawNewText);
document.getElementById("clear-drawing").addEventListener("click", clearAllFigures);


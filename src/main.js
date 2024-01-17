console.log('MAIN');

import { 
    Point,
    Circle, 
    Rectangle,
    Text, 
    drawFigures,
    populateTable,
    randomColor} from "./tp1.js";

const figures = []

function getFigureById(figureId){
    for(const figure of figures){
        if(figure.getId() === figureId){
            return figure;
        }
    }
}

function pointToString(point){
    return `(${point.getX()}, ${point.getY()})`;
}

function onClickUp(figureId){
    const figure = getFigureById(figureId);
    const pos = figure.getPosition();
    const newPos = new Point(pos.getX(), pos.getY() - 10);
    figure.setPosition(newPos);
    renderFigures();
}

function onClickDown(figureId){
    const figure = getFigureById(figureId);
    const pos = figure.getPosition();
    const newPos = new Point(pos.getX(), pos.getY() + 10);
    figure.setPosition(newPos);
    renderFigures();
}

function onClickLeft(figureId){
    const figure = getFigureById(figureId);
    const pos = figure.getPosition();
    const newPos = new Point(pos.getX() - 10, pos.getY());
    figure.setPosition(newPos);
    renderFigures();
}

function onClickRight(figureId){
    const figure = getFigureById(figureId);
    const pos = figure.getPosition();
    const newPos = new Point(pos.getX() + 10, pos.getY());
    figure.setPosition(newPos);
    renderFigures();
}

function onClickPaint(figureId){
    const figure = getFigureById(figureId);
    figure.setColor(randomColor(Date.now()))
    renderFigures();
}

/**
 * Fonction qui modifie la couleur d'une forme selon
 * la couleur sélectionnée à l'aide du color-picker HTML
 * @param {string} figureId : id de la forme
 * @param {string} color : couleur sélectionnée
 */
function onClickPaintWithColor(figureId, color){
    const figure = getFigureById(figureId);
    figure.setColor(color.slice(1));
    renderFigures();
}

/**
 * Fonction qui supprime une forme affichée sur le canevas.
 * @param {string} figureId : id de la forme
 */
function onClickRemove(figureId){
    const objIndex = figures.findIndex((obj) => obj.getId() === figureId);
    figures.splice(objIndex, 1);
    renderFigures();
}

function renderFigures(){
    drawFigures(document.getElementById("canvas"), figures);
    
    populateTable(
        document.getElementById("table-body"),
            figures,
            onClickUp,
            onClickDown,
            onClickLeft,
            onClickRight,
            onClickPaint,
            onClickPaintWithColor,
            onClickRemove);        
}


// Sur le bouton 'Ajouter Cercle'
function drawNewCircle(){
    console.log('Nouveau cercle')
    const x = parseInt(document.getElementById("cx").value);
    const y = parseInt(document.getElementById("cy").value)
    const r = parseInt(document.getElementById("cr").value)
    if(! isNaN(x) && ! isNaN(y) && ! isNaN(r)){
        const p = new Point(x, y);
        const circle = new Circle(p, r, Date.now());
        console.log(circle);
        figures.push(circle);
        renderFigures();
    } else {
        alert("Entrez des valeurs pour créer un cercle.");
    }
}

// Sur le bouton 'Ajouter Rectangle'
function drawNewRectangle(){
    console.log('Nouveau rectangle');
    const x = parseInt(document.getElementById("rx").value)
    const y = parseInt(document.getElementById("ry").value)
    const w = parseInt(document.getElementById("width").value)
    const h = parseInt(document.getElementById("height").value)
    if(! isNaN(x) && ! isNaN(y) && ! isNaN(w) && ! isNaN(h)){
        const p = new Point(x, y);
        const rectangle = new Rectangle(p, w, h, Date.now());
        console.log(rectangle);
        figures.push(rectangle);
        renderFigures();
    } else {
        alert("Entrez des valeurs pour créer un rectangle.");
    }
}

// Sur le bouton 'Ajouter Texte'
function drawNewText(){
    console.log('Nouveau texte')
    const x = parseInt(document.getElementById("tx").value);
    const y = parseInt(document.getElementById("ty").value);
    const t = document.getElementById("text").value;
    if(! isNaN(x) && ! isNaN(y) && t !== ''){
        const p = new Point(x, y);
        const text = new Text(p, t, Date.now());
        console.log(text);
        figures.push(text);
        renderFigures();
    } else {
        alert("Entrez des valeurs et du texte pour créer un texte.")
    }
}

// Sur le bouton 'Tout Effacer'
function clearAllFigures(){
    figures.length = 0;
    renderFigures();
}


document.getElementById("draw-circle").addEventListener("click", drawNewCircle);
document.getElementById("draw-rectangle").addEventListener("click", drawNewRectangle);
document.getElementById("draw-text").addEventListener("click", drawNewText);
document.getElementById("clear-drawing").addEventListener("click", clearAllFigures);


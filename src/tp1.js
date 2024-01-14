import m from "https://esm.sh/mithril@2.2.2"

const BLACK = "000000";

// LES CLASSES: Point, Circle, Rectangle, Text

/**
 * Classe qui représente un point sur
 * un plan cartésien.  Le point est donc
 * représenté par deux coordonnées x et y.
 */
export class Point{
    #x;
    #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    getX(){
        return this.#x;
    }

    getY(){
        return this.#y;
    }
}

/**
 * Classe qui représente un cercle.  Le cercle est
 * définit par un Point, un rayon et un id.
 *
 * Par défaut, le cercle est noir.  Mais le cercle peut
 * changer de couleur.
 */
export class Circle{
    #center;
    #radius;
    #color;
    #id;

    /**
     *
     * @param {Point} center le point au centre du cercle
     * @param {number} radius le rayon du cercle
     * @param {number} id l'id unique du cercle.  C'est au
     *         créateur de l'instance de s'assurer de l'unicité
     *         de l'id.
     */
    constructor(center, radius, id) {
        this.#center = center;
        this.#radius = radius;
        this.#color = BLACK;
        this.#id = id;
    }

    /**
     * @returns {Point} le point au centre au cercle
     */
    getCenter(){
        return this.#center;
    }

    /**
     *
     * @returns {number} le rayon du cercle
     */
    getRadius(){
        return this.#radius;
    }

    /**
     *
     * @returns {string} la couleur (hexadécimal) du cercle
     */
    getColor(){
        return this.#color;
    }

    /**
     * @param {String} color la nouvelle couleur du cercle
     */
    setColor(color){
        this.#color = color;
    }

    /**
     * @param {Point} center la nouvelle position du centre du cercle
     */    
    setCenter(center){
        this.#center = center;
    }

    /**
     * @returns {number} l'id du cercle
     */
    getId(){
        return this.#id;
    }

    /**
     * @return {Object} balise HTML <circle> (clé) et attributs (valeur)
     */
    getHtmlTag(){
        const attr = {
            cx: this.#center.getX(),
            cy: this.#center.getY(),
            r:  this.#radius,
            fill: `#${this.#color}`,
        };
        return {"circle": attr};
    }

    toString(){
        return `Cercle(${ this.#radius }, ${ this.getCenter().getX() }, ${ this.getCenter().getY() })`;
    }
}

/**
 * Classe qui représente un rectancle.  Le rectangle est
 * définit par un Point, une largeur, une hauteur et un id.
 *
 * Par défaut, le rectangle est noir.  Mais le restangle peut
 * changer de couleur.
 */
export class Rectangle{
    #corner;
    #width;
    #height;
    #color;
    #id;

    /**
     *
     * @param {Point} corner le point du coin supérieur du rectangle
     * @param {number} width la largeur du rectangle
     * @param {number} height la hauteur du rectangle
     * @param {number} id l'id unique du rectangle.  C'est au
     *         créateur de l'instance de s'assurer de l'unicité
     *         de l'id.
     */
    constructor(corner, width, height, id) {
        this.#corner = corner;
        this.#width = width;
        this.#height = height;
        this.#color = BLACK;
        this.#id = id;
    }

    /**
     * @returns {Point} le point au coin supérieur gauche du rectangle
     */
    getCorner(){
        return this.#corner;
    }

    /**
     *
     * @returns {number} la largeur du rectangle
     */
    getWidth(){
        return this.#width;
    }

    /**
     *
     * @returns {number} la hauteur du rectangle
     */
    getHeight(){
        return this.#height;
    }

    /**
     *
     * @returns {string} la couleur (hexadécimal) du rectangle
     */
    getColor(){
        return this.#color;
    }

    /**
     * @param {String} color la nouvelle couleur du rectangle
     */
    setColor(color){
        this.#color = color;
    }

    /**
     * @param {Point} corner la nouvelle position du coin supérieur gauche du rectangle
     */
    setCorner(corner){
        this.#corner = corner;
    }

    /**
     * @returns {number} l'id du rectangle
     */
    getId(){
        return this.#id;
    }

    /**
 * @return {Object} balise HTML <rect> (clé) et attributs (valeur)
 */
    getHtmlTag(){
        const attr = {
            x: this.#corner.getX(),
            y: this.#corner.getY(),
            width: this.#width,
            height: this.#height,
            fill: `#${this.#color}`,
        };
        return {"rect": attr};
    }

    toString(){
        return `Rectangle(${ this.#width }, ${ this.#height }, ${ this.getCorner().getX() }, ${ this.getCorner().getY() })`;
    }
}

/**
 * Classe qui représente une boîte de texte.  La boîte de texte est
 * définie par un Point, un texte et un id.
 *
 * Par défaut, la boîte texte est sans couleur de remplissage. 
 */
export class Text{
    #corner;
    #text;
    #id;

    /**
     *
     * @param {Point} corner le point du coin supérieur de la boîte de teste
     * @param {string} text le libellé du texte
     * @param {number} id l'id unique du texte.  C'est au
     *         créateur de l'instance de s'assurer de l'unicité
     *         de l'id.
     */
    constructor(corner, text, id) {
        this.#corner = corner;
        this.#text = text;
        this.#id = id;
    }

    /**
     * @returns {Point} le point au coin supérieur gauche du texte
     */
    getCorner(){
        return this.#corner;
    }

    /**
    * @param {Point} corner la nouvelle position du coin supérieur gauche du texte
    */
    setCorner(corner){
        this.#corner = corner;
    }

    /**
     *
     * @returns {string} le libellé du texte
     */
    getText(){
        return this.#text;
    }

    /**
     * @returns {number} l'id du texte
     */
    getId(){
        return this.#id;
    }

    /**
 * @return {Object} balise HTML <text> (clé) et attributs (valeur)
 */
    getHtmlTag(){
        const attr = {
            x: this.#corner.getX(),
            y: this.#corner.getY(),
        };
        return {"text": attr, "fragment" : this.#text};
    }

    toString(){
        return `Text(${ this.#text }, ${ this.getCorner().getX() }, ${ this.getCorner().getY() })`;
    }
}

// CRÉER LES ÉLÉMENTS HTML <circle>, <rectangle> et <text>

/**
 * Dessine tous les cercles dans un svg.  Cette fonction
 * nettoye le svg avant d'ajouter les cercles.
 *
 * @param node {HTMLElement} un element svg
 * @param figures {Array[]} Les formes à dessiner
 */
export function drawFigures(node, figures){
    //console.log(figures.toString())

    // Liste de vnodes à ajouter comme enfants au SVG (id='canvas')
    let svgfig = [];

    for(const figure of figures){
        let figTag = Object.keys(figure.getHtmlTag())[0];
        let attr = Object.values(figure.getHtmlTag())[0];
        let frag = Object.values(figure.getHtmlTag())[1];

        // ajouter une balise <cercle>, <rect> à la liste des enfants
        svgfig.push(m(figTag, attr, frag));        
    }

    m.render(node, svgfig);
}


// FONCTIONS POUR CRÉER ET MANIPULER LE TABLEAU DESCRIPTIF DES FORMES

function identity(x){
    return x;
}

function functionOrDefault(fn){
    if(typeof fn === 'function'){
        return fn;
    }
    return identity;
}

function drawIcons(circle,
                   onClickUp,
                   onClickDown,
                   onClickLeft,
                   onClickRight,
                   onClickPaint){
    return [
        m("i.fa-solid.fa-arrow-up.is-clickable", {onclick: () => onClickUp(circle.getId())}),
        m("i.fa-solid.fa-arrow-down.is-clickable", {onclick: () => onClickDown(circle.getId())}),
        m("i.fa-solid.fa-arrow-left.is-clickable", {onclick: () => onClickLeft(circle.getId())}),
        m("i.fa-solid.fa-arrow-right.is-clickable", {onclick: () => onClickRight(circle.getId())}),
        m("i.fa-solid.fa-paint-roller.is-clickable", {onclick: () => onClickPaint(circle.getId())}),
    ]
}

/**
 * @param node {HTMLElement} un element tbody
 * @param circles {Circle[]} Les cercles
 * @param pointToString Argument optionnel qui doit être une fonction
 *        qui prend en paramêtre un Point et retourne un String qui
 *        représente le point.
 * @param onClickUp Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers le haut
 *        sera cliquée.  L'id du cercle sera passé en argument de
 *        la fonction.
 * @param onClickDown Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers le bas
 *        sera cliquée.  L'id du cercle sera passé en argument de
 *        la fonction.
 * @param onClickLeft Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers la gauche
 *        sera cliquée.  L'id du cercle sera passé en argument de
 *        la fonction.
 * @param onClickRight Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers la droite
 *        sera cliquée.  L'id du cercle sera passé en argument de
 *        la fonction.
 * @param onClickPaint Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque l'icone peinture
 *        sera cliquée.  L'id du cercle sera passé en argument de
 *        la fonction.
 */
export function populateTable(node,
                              circles,
                              onClickUp=undefined,
                              onClickDown=undefined,
                              onClickLeft=undefined,
                              onClickRight=undefined,
                              onClickPaint=undefined){
    const rows = [];
    for(const circle of circles){
        const row =[m("td", circle.getId()),
            m("td", circle.toString()),
            m("td", drawIcons(circle,
                functionOrDefault(onClickUp),
                functionOrDefault(onClickDown),
                functionOrDefault(onClickLeft),
                functionOrDefault(onClickRight),
                functionOrDefault(onClickPaint)))];
        rows.push(m("tr", row))
    }
    m.render(node, rows);

}

// AUTRES FONCTIONS POUR MODIFIER PROPRIÉTÉS DES FORMES

/**
 * Retourne une couleur de gris aléatoire à partir d'un nombre entier.
 * @param i {number} (entier) qui sera utilisé comme "seed".
 * @returns {string} une couleur hexadécimale
 */
export function randomColor(i){
    const base = (i % 256).toString(16);
    return `${base}${base}${base}`
}
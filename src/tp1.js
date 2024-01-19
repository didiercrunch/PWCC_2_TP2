import m from "https://esm.sh/mithril@2.2.2"
// didier: test
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
    getPosition(){
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
    setPosition(center){
        this.#center = center;
    }

    /**
     * @returns {number} l'id du cercle
     */
    getId(){
        return this.#id;
    }

    /**
     * @return {Object} Paramètres pour créer une vue Mithril.js (HTML Element)
     */
    getHtmlStructure(){
        const attributes = {
            cx: this.#center.getX(),
            cy: this.#center.getY(),
            r:  this.#radius,
            fill: `#${this.#color}`,
        };
        return {"selector": "circle",
                "attrs" : attributes};
    }

    toString(){
        return `Cercle(${ this.#radius }, ${ this.#center.getX() }, ${ this.#center.getY() })`;
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
     * @param {Point} corner le point du coin supérieur gauche du rectangle
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
    getPosition(){
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
    setPosition(corner){
        this.#corner = corner;
    }

    /**
     * @returns {number} l'id du rectangle
     */
    getId(){
        return this.#id;
    }

    /**
 * @return {Object} Paramètres pour créer une vue Mithril.js (HTML Element)
 */
    getHtmlStructure(){
        const attributes = {
            x: this.#corner.getX(),
            y: this.#corner.getY(),
            width: this.#width,
            height: this.#height,
            fill: `#${this.#color}`,
        };
        return {"selector": "rect",
                "attrs": attributes};
    }

    toString(){
        return `Rectangle(${ this.#width }, ${ this.#height }, ${ this.#corner.getX() }, ${ this.#corner.getY() })`;
    }
}

/**
 * Classe qui représente un texte.  La boîte de texte est
 * définie par un Point, un texte et un id. 
 */
export class Text{
    #corner;
    #text;
    #color;
    #id;

    /**
     *
     * @param {Point} corner le point du coin inférieur gauche de la boîte de texte
     * @param {string} text le libellé du texte
     * @param {number} id l'id unique du texte.  C'est au
     *         créateur de l'instance de s'assurer de l'unicité
     *         de l'id.
     */
    constructor(corner, text, id) {
        this.#corner = corner;
        this.#text = text;
        this.#color = BLACK;
        this.#id = id;
    }

    /**
     * @returns {Point} le point au coin inférieur gauche du texte
     */
    getPosition(){
        return this.#corner;
    }

    /**
    * @param {Point} corner la nouvelle position du coin inférieur gauche du texte
    */
    setPosition(corner){
        this.#corner = corner;
    }

    /**
     *
     * @returns {string} la couleur (hexadécimal) du texte
     */
    getColor(){
        return this.#color;
    }

    /**
     * @param {String} color la nouvelle couleur du texte
     */
    setColor(color){
        this.#color = color;
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
 * @return {Object} Paramètres pour créer une vue Mithril.js (HTML Element)
 */
    getHtmlStructure(){
        const attributes = {
            x: this.#corner.getX(),
            y: this.#corner.getY(),
            fill: `#${this.#color}` // change couleur du texte
        };
        return {"selector": "text",
                "attrs": attributes, 
                "children" : this.#text};
    }

    toString(){
        return `Text(${ this.#text }, ${ this.#corner.getX() }, ${ this.#corner.getY() })`;
    }
}

// CRÉER LES ÉLÉMENTS HTML <circle>, <rectangle> et <text>

/**
 * Dessine toutes les figures dans un svg.  Cette fonction
 * nettoye le svg avant d'ajouter les figures.
 *
 * @param node {HTMLElement} un element svg
 * @param figures {Array[]} Les formes à dessiner
 */
export function drawFigures(node, figures){
    //console.log(figures.toString())

    // vnodes à ajouter comme enfants au SVG (id='canvas')
    let svgfig = [];

    for(const figure of figures){
        let selector = Object.values(figure.getHtmlStructure())[0];
        let attrs = Object.values(figure.getHtmlStructure())[1];
        let children = Object.values(figure.getHtmlStructure())[2];

        // ajouter une balise <cercle>, <rect> ou <text> au SVG
        svgfig.push(m(selector, attrs, children));        
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

function drawIcons(figure,
                   onClickUp,
                   onClickDown,
                   onClickLeft,
                   onClickRight,
                   onClickPaint,
                   onClickPaintWithColor,
                   onClickRemove){
    return [
        m("i.fa-solid.fa-arrow-up.is-clickable", {onclick: () => onClickUp(figure.getId())}),
        m("i.fa-solid.fa-arrow-down.is-clickable", {onclick: () => onClickDown(figure.getId())}),
        m("i.fa-solid.fa-arrow-left.is-clickable", {onclick: () => onClickLeft(figure.getId())}),
        m("i.fa-solid.fa-arrow-right.is-clickable", {onclick: () => onClickRight(figure.getId())}),
        m("i.fa-solid.fa-paint-roller.is-clickable", {onclick: () => onClickPaint(figure.getId())}),
        m("i.fa-solid.fa-trash.is-clickable", {onclick: () => onClickRemove(figure.getId())}),
        m('input', {
            type: "color",
            value:"",
            onchange: (e) => { onClickPaintWithColor(figure.getId(), e.target.value) }
        })]

}

/**
 * @param node {HTMLElement} un element tbody
 * @param figures {Array[]} Les formes géométriques
 * @param pointToString Argument optionnel qui doit être une fonction
 *        qui prend en paramêtre un Point et retourne un String qui
 *        représente le point.
 * @param onClickUp Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers le haut
 *        sera cliquée.  L'id de la forme sera passé en argument de
 *        la fonction.
 * @param onClickDown Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers le bas
 *        sera cliquée.  L'id de la forme sera passé en argument de
 *        la fonction.
 * @param onClickLeft Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers la gauche
 *        sera cliquée.  L'id de la forme sera passé en argument de
 *        la fonction.
 * @param onClickRight Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers la droite
 *        sera cliquée.  L'id de la forme sera passé en argument de
 *        la fonction.
 * @param onClickPaint Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque l'icone peinture
 *        sera cliquée.  L'id de la forme sera passé en argument de
 *        la fonction.
 * @param onClickPaintWithColor Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque le color picker sera sélectionné par clic
 *        de la souris. L'id de la forme et la couleur sélectionnée sont passés 
 *        comme arguments à la fonction.
 * @param onClickRemove Argument optionnel qui doit être une fonction 
 *        qui sera appelée lorsque l'icone de la poubelle sera cliqué. L'id
 *        de la forme sera passé comme argument de la fonction.
 */
export function populateTable(node,
                              figures,
                              onClickUp=undefined,
                              onClickDown=undefined,
                              onClickLeft=undefined,
                              onClickRight=undefined,
                              onClickPaint=undefined,
                              onClickPaintWithColor=undefined,
                              onClickRemove=undefined){
    const rows = [];
    for(const figure of figures){
        const row =[m("td", figure.getId()),
            m("td", figure.toString()),
            m("td", drawIcons(figure,
                functionOrDefault(onClickUp),
                functionOrDefault(onClickDown),
                functionOrDefault(onClickLeft),
                functionOrDefault(onClickRight),
                functionOrDefault(onClickPaint),
                functionOrDefault(onClickPaintWithColor),
                functionOrDefault(onClickRemove)))];
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

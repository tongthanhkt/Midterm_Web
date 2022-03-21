'use strict';
const {LocalStorage}  = require('node-localstorage');
const localstorage = new LocalStorage('./scracth');

const indexView = (req, res, next) => {
    
        res.render('home');        
   
}

const iconsView = (req, res, next) => {
    res.render('icons');
}
 
const mapView = (req, res, next) => {
    res.render('map');
}

const profileView = (req, res, next) => {
    res.render('profile');
}

const tableView = (req, res, next) => {
    res.render('table');
}


module.exports = {
    indexView,
    iconsView,
    mapView,
    profileView,
    tableView
}
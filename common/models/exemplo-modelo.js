'use strict';

module.exports = function (Exemplomodelo) {


/**
 * submit da tela exemplo
 * @param {object} item 
 * @param {Function(Error, object)} callback
 */

    Exemplomodelo.SubmitExemplo = function (item, callback) {
        var resultado = item;
        callback(null, resultado);
    };


};


'use strict';

module.exports = function (OportunidadeDia) {


    /**
    * chamada pelos aplicativos
    * @param {Function(Error, array)} callback
    */

    OportunidadeDia.ListaApp = function (callback) {
        var lista;
        OportunidadeDia.find({"order" : "dataUltimaPrecoAnterior desc"},callback);
    };
};

'use strict';

module.exports = function (OportunidadeDia) {


    /**
    * chamada pelos aplicativos
    * @param {Function(Error, array)} callback
    */

    OportunidadeDia.ListaApp = function (callback) {
        var lista;
        let filtro = 
                    {
                        "order" : "dataUltimaPrecoAnterior desc",
                        "where" : { 'and' : [{ "dataUltimaPrecoAnterior" : {gt: new Date('2020-01-01')} }, {'idNaturezaProduto' : 26}] },
                        "include" : {"relation" : "precoDiarios" }
                    }
        OportunidadeDia.find(filtro,callback);
    };

    OportunidadeDia.ListaAppComputador = function (callback) {
        var lista;
        let filtro = 
                    {
                        "order" : "dataUltimaPrecoAnterior desc",
                        "where" : { 'and' : [{ "dataUltimaPrecoAnterior" : {gt: new Date('2020-01-01')} }, {'idNaturezaProduto' : 10}] },
                        "include" : {"relation" : "precoDiarios" }
                    }
        OportunidadeDia.find(filtro,callback);
    };


    OportunidadeDia.ListaEmail = function (callback) {
        var lista;
        let filtro = 
                    {
                        "order" : "dataUltimaPrecoAnterior desc",
                        "where" : { 'and' : [{ "dataUltimaPrecoAnterior" : {gt: new Date('2020-01-01')} }, {'idNaturezaProduto' : 26}] },
                        "limit" : 3
                    }
        OportunidadeDia.find(filtro,callback);
    };
};

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
                        "where" : { "dataUltimaPrecoAnterior" : {gt: new Date('2020-01-01')} }
                    }
        OportunidadeDia.find(filtro,callback);
    };
};
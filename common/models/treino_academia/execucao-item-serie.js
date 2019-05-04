
'use strict';

var app = require('../../../server/server');

module.exports = function (ExecucaoItemSerie) {



    ExecucaoItemSerie.SubmitExecutaTreinoPage = function (item, callback) {

        ExecucaoItemSerie.create(item, (err, result) => {
            if (err) {
                callback(err,null);
                return;
            }
            if (result.id) {
                var itemsProcessed =0 ;
                item.listaExecucaoCarga.forEach(element => {
                    itemsProcessed++;
                    element.execucaoItemSerieId = result.id;
 
                    app.models.TreinoAcademia_ExecucaoCarga.create(element, (err,result) => {
                        if (err) {
                            callback(err,null);
                            return;
                        };
                        if (itemsProcessed === item.listaExecucaoCarga.length) {
                            callback(null, result);
                        }
                    });
                   
                });
            }
        })

    }


};

'use strict';

var app = require('../../../server/server');

module.exports = function (ExecucaoItemSerie) {


 
    
    ExecucaoItemSerie.SubmitExecutaTreinoPage = function (item, callback) {
        var teveErro = 0;
        ExecucaoItemSerie.create(item, (err, result) => {
             if (err) {
                callback(err,null);
                return;
            }
            if (result.id) {
                var itemsProcessed =0 ;
                item.listaExecucaoCarga.forEach(element => {
                    element.execucaoItemSerieId = result.id;
                    app.models.TreinoAcademia_ExecucaoCarga.create(element, (err,result) => {
                        itemsProcessed++;
                        if (err) {
                            teveErro = 1;
                            callback(err,null);
                            return;
                        };
                        if (itemsProcessed == item.listaExecucaoCarga.length && teveErro==0) {
                            callback(null, item);
                        }
                    });
                   
                });
            }
        })
    }
 


};

'use strict';

var app = require('../../../server/server');

module.exports = function (ItemSerie) {

    // logica de insercao.

    ItemSerie.SubmitCriaSeriePage =  function(item,callback) {
        if (!item.serieTreinoId || item.serieTreinoId==0) {
            // criar SerieTreino
            var serieTreino = {'ativa' : 1, 'qtdeExecucao' : 0 , 'dataCriacao' : new Date()};
            app.models.TreinoAcademia_SerieTreino.upsert(serieTreino , (err,result) => {
                item.serieTreino = result;
                item.serieTreinoId = result.id;
                if (!item.exercicio.id || item.exercicio.id==0) {
                    app.models.TreinoAcademia_Exercicio.upsert(item.exercicio, (err,result) => {
                        item.exercicio = result;
                        item.exercicioId = result.id;
                        ItemSerie.upsert(item, (err,result) => {
                            item.id = result.id;
                            callback(err,item);
                            item.listaCargaPlanejada.forEach(carga => {
                                carga.itemSerieId = item.id;
                                app.models.TreinoAcademia_CargaPlanejada.upsert(carga);
                            });
                        })
                    })
                }

            })
        } else {
            if (!item.exercicioId || item.exercicioId==0) {
                app.models.TreinoAcademia_Exercicio.upsert(item.exercicio, (err,result) => {
                    item.exercicio = result;
                    item.exercicioId = result.id;
                    ItemSerie.upsert(item, (err,result) => {
                        item.id = result.id;
                        callback(err,item);
                        item.listaCargaPlanejada.forEach(carga => {
                            carga.itemSerieId = item.id;
                            app.models.TreinoAcademia_CargaPlanejada.upsert(carga);
                        });
                    })
                })
            } else {
                ItemSerie.upsert(item, (err,result) => {
                    item.id = result.id;
                    callback(err,item);
                    item.listaCargaPlanejada.forEach(carga => {
                        carga.itemSerieId = item.id;
                        app.models.TreinoAcademia_CargaPlanejada.upsert(carga);
                    });
                })
            }
        }
    }




    /*
    ItemSerie.SubmitCriaSeriePage = async function (item, callback) {
        ItemSerie.beginTransaction({ isolationLevel: ItemSerie.Transaction.READ_COMMITTED }, function (err, tx) {
            // Now we have a transaction (tx)
            if (item.serieTreinoId==0) {

            }
        });
    };
    */

    ItemSerie.SubmitEditaItemSeriePage =  function (item, callback) {
       var result = item;
       callback(null,result);
    };
};
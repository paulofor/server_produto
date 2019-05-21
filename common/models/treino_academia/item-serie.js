
'use strict';

var app = require('../../../server/server');

module.exports = function (ItemSerie) {

    // logica de insercao.

    ItemSerie.SubmitCriaSeriePage = function (item, callback) {


        if (!item.serieTreinoId || item.serieTreinoId == 0) {
            //criar SerieTreino
            var serieTreino = { 'ativa': 1, 'qtdeExecucao': 0, 'dataCriacao': new Date() };
            app.models.TreinoAcademia_SerieTreino.upsert(serieTreino, (err, result) => {
                //console.log('Result1: ' , JSON.stringify(result) );
                if (err) {
                    callback(err, null);
                    return;
                }
                item.serieTreino = result;
                item.serieTreinoId = result.id;
                if (!item.exercicio.id || item.exercicio.id == 0) {
                    app.models.TreinoAcademia_Exercicio.upsert(item.exercicio, (err, result) => {
                        //console.log('Result2: ' , JSON.stringify(result) );
                        if (err) {
                            callback(err, null);
                            return;
                        }
                        item.exercicio = result;
                        item.exercicioId = result.id;
                        ItemSerie.upsert(item, (err, result) => {
                            //console.log('Result3: ' , JSON.stringify(result) );
                            if (err) {
                                callback(err, null);
                                return;
                            }
                            item.id = result.id;
                            callback(err, item);
                            criaCarga(item);
                        })
                    })
                }

            })
        } else {
            if (!item.exercicioId || item.exercicioId == 0) {
                app.models.TreinoAcademia_Exercicio.upsert(item.exercicio, (err, result) => {
                    //console.log('Result4: ' , JSON.stringify(result) );
                    if (err) {
                        callback(err, null);
                        return;
                    }
                    item.exercicio = result;
                    item.exercicioId = result.id;
                    ItemSerie.upsert(item, (err, result) => {
                        //console.log('Result5: ' , JSON.stringify(result) );
                        if (err) {
                            callback(err, null);
                            return;
                        }
                        item.id = result.id;
                        callback(err, item);
                        criaCarga(item);
                    })
                })
            } else {
                ItemSerie.upsert(item, (err, result) => {
                    //console.log('Result6: ' , JSON.stringify(result) );
                    if (err) {
                        callback(err, null);
                        return;
                    }
                    item.id = result.id;
                    callback(err, item);
                    criaCarga(item);
                })
            }
        }
    }

    function criaCarga(item) {
        //console.log('Item: ' , JSON.stringify(item));
        item.listaCargaPlanejada.forEach(carga => {
            //carga.valorCarga = carga.valorCarga.replace("," , ".");
            carga.itemSerieId = item.id;
            app.models.TreinoAcademia_CargaPlanejada.upsert(carga);
        });
        return true;
    }

    function obtemMaiorItem(itemSerieId, callback) {
        var filtro = { "where": { "serieTreinoId": itemSerieId }, "order": "ordemExecucao desc", "limit": "1" };
        ItemSerie.findOne(filtro,callback); 
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

    ItemSerie.SubmitEditaItemSeriePage = function (item, callback) {
        var result = item;
        callback(null, result);
    };
};
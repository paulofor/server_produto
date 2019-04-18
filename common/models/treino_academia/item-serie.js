
'use strict';

module.exports = function (ItemSerie) {


    ItemSerie.SubmitCriaSeriePage = function (item, callback) {
        console.log('ItemSerie.SubmitCriaSeriePage - input: ' , JSON.stringify(item));
        var resultado = item;
        callback(null, resultado);
    };

    ItemSerie.SubmitEditaItemSeriePage = function (item, callback) {
        console.log('ItemSerie.SubmitEditaItemSeriePage - input: ' , JSON.stringify(item));
        var resultado = item;
        callback(null, resultado);
    };
};
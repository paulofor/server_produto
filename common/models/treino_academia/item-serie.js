
'use strict';

var app = require('../../../server/server');

module.exports = function (ItemSerie) {


    ItemSerie.SubmitCriaSeriePage = function (item, callback) {
        console.log('ItemSerie.SubmitCriaSeriePage - input: ', JSON.stringify(item));

        var ds = ItemSerie.dataSource;
        var teste = app.models.ItemSerie;

        Object.getOwnPropertyNames(ds).forEach(function (val, idx, array) {
            console.log(val + ' -> ' + ds[val]);
        });
        for (var item in app.dataSources.db) {
            console.log('app.dataSources.db.', JSON.stringify(item));
        }
        var resultado = item;
        callback(null, resultado);
    };

    ItemSerie.SubmitEditaItemSeriePage = function (item, callback) {
        const transacao = app.dataSources.db.transaction;
        await transacao(async models => {
            const { MyModel } = models;
            console.log(await MyModel.count()); // 0
            await MyModel.create({ foo: 'bar' });
            console.log(await MyModel.count()); // 1
        });
        console.log(await app.models.MyModel.count()); // 1


        console.log('ItemSerie.SubmitEditaItemSeriePage - input: ', JSON.stringify(item));
        var resultado = item;
        callback(null, resultado);
    };
};
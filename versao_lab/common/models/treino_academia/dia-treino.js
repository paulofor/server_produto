
'use strict';

module.exports = function(DiaTreino) {

    DiaTreino.FinalizaDia = function (IdDiaTreino, callback) {
        console.log('IdDiaTreino:' , IdDiaTreino);
        callback(null,null);
    }
};
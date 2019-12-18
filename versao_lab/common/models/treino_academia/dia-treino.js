
'use strict';

module.exports = function(DiaTreino) {

    DiaTreino.FinalizaDia = function (IdDiaTreino, callback) {
        console.log('IdDiaTreino:' , IdDiaTreino);
        var sql1 = "update TreinoAcademia_DiaTreino set concluido = 1 where id = '" + IdDiaTreino + "' ";
        var sql2 = "update TreinoAcademia_SerieTreino set dataUltimaExecucao = UTC_TIMESTAMP() " + 
                " where id = ( select serieTreinoId from TreinoAcademia_DiaTreino " +
                " where id = '" + IdDiaTreino + "')";

        var ds = DiaTreino.dataSource;
        ds.connector.query(sql1, (err1, result1) => {
            if (err1) {
                callback(err1, null);
                return;
            }
            ds.connector.query(sql2,callback)
        });
    }
};
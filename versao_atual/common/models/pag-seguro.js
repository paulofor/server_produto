'use strict';

//var http = require("http");
var request = require('request');
var xml2js = require('xml2js');

module.exports = function (Pagseguro) {


    /**
     * 
     * @param {object} dadoCliente 
     * @param {Function(Error, object)} callback
     */

    Pagseguro.AderePlanoTreino = function (dadoCliente, callback) {
        //console.log('  *****   Adere Plano ****** ', creditCardToken);
        //var urlCriaPlano = 'https://ws.sandbox.pagseguro.uol.com.br/pre-approvals/request?email=paulofore@gmail.com&token=' + token;
        var urlAderePlano = 'https://ws.pagseguro.uol.com.br/pre-approvals?email=paulofore@gmail.com&token=' + token;


        //var proxyUrl = "http://tr626987:Eureka48@10.21.7.10:82";
        //var proxiedRequest = request.defaults({ 'proxy': proxyUrl });
        //console.log('body: ', JSON.stringify(aderePlano));


        var mensagem = {
            url: urlAderePlano,
            headers: {
                "Content-Type": "application/json;charset=ISO-8859-1",
                "Accept": "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
            },
            body: JSON.stringify(dadoCliente)
        }

        console.log('Body:', JSON.stringify(mensagem.body));
        request.post(urlAderePlano, mensagem, (err, response, body) => {
            console.log('Erro: ', err);
            console.log('Body: ', body);
            callback(err, JSON.parse(body));
        });
    };




    var token = 'AF';

    var urlSession = 'https://ws.pagseguro.uol.com.br/v2/sessions?email=paulofore@gmail.com&token=' + token;
    //var urlSession = 'https://ws.sandbox.pagseguro.uol.com.br/v2/sessions?email=paulofore@gmail.com&token=' + token;

    var urlTransacao = 'https://ws.pagseguro.uol.com.br/v2/transactions?email=paulofore@gmail.com&token=' + token;

    var urlCaixaBranca = 'https://ws.pagseguro.uol.com.br/v2/checkout?email=paulofore@gmail.com&token=' + token;

    var idSessao;

    var cartao =
        'paymentMode=default' +
        '&paymentMethod=creditCard' +
        '&receiverEmail=suporte@lojamodelo.com.br' +
        '&currency=BRL' +
        '&extraAmount=1.00' +
        '&itemId1=0001' +
        '&itemDescription1=Notebook Prata' +
        '&itemAmount1=1.50' +
        '&itemQuantity1=1' +
        '&notificationURL=https://sualoja.com.br/notifica.html' +
        '&reference=REF1234' +
        '&senderName=Jose Comprador' +
        '&senderCPF=22111944785' +
        '&senderAreaCode=11' +
        '&senderPhone=56273440' +
        '&senderEmail=comprador@uol.com.br' +
        '&senderHash={hash_obtido_no_passo_2.3}' +
        '&shippingAddressRequired=true' +
        '&shippingAddressStreet=Av. Brig. Faria Lima' +
        '&shippingAddressNumber=1384' +
        '&shippingAddressComplement=5o andar' +
        '&shippingAddressDistrict=Jardim Paulistano' +
        '&shippingAddressPostalCode=01452002' +
        '&shippingAddressCity=Sao Paulo' +
        '&shippingAddressState=SP' +
        '&shippingAddressCountry=BRA' +
        '&shippingType=1' +
        '&shippingCost=1.00' +
        '&creditCardToken={creditCard_token_obtido_no_passo_2.6}' +
        '&installmentQuantity=1' +
        '&installmentValue={installmentAmount_obtido_no_retorno_do_passo_2.5}' +
        '&noInterestInstallmentQuantity={valor_maxInstallmentNoInterest_incluido_no_passo_2.5}' +
        '&creditCardHolderName=Jose Comprador' +
        '&creditCardHolderCPF=22111944785' +
        '&creditCardHolderBirthDate=27/10/1987' +
        '&creditCardHolderAreaCode=11' +
        '&creditCardHolderPhone=56273440' +
        '&billingAddressStreet=Av. Brig. Faria Lima' +
        '&billingAddressNumber=1384' +
        '&billingAddressComplement=5o andar' +
        '&billingAddressDistrict=Jardim Paulistano' +
        '&billingAddressPostalCode=01452002' +
        '&billingAddressCity=Sao Paulo' +
        '&billingAddressState=SP' +
        '&billingAddressCountry=BRA';

    var caixaBranca = "currency=BRL" +
        "&itemId1=0001" +
        "&itemDescription1=Produto PagSeguroI" +
        "&itemAmount1=99999.99" +
        "&itemQuantity1=1" +
        "&itemWeight1=1000" +
        "&itemId2=0002" +
        "&itemDescription2=Produto PagSeguroII" +
        "&itemAmount2=99999.98" +
        "&itemQuantity2=2" +
        "&itemWeight2=750" +
        "&reference=REF1234" +
        "&senderName=Jose Comprador" +
        "&senderAreaCode=99" +
        "&senderPhone=999999999" +
        "&senderEmail=comprador@uol.com.br" +
        "&shippingType=1" +
        "&shippingAddressRequired=true" +
        "&shippingAddressStreet=Av. PagSeguro" +
        "&shippingAddressNumber=9999" +
        "&shippingAddressComplement=99o andar" +
        "&shippingAddressDistrict=Jardim Internet" +
        "&shippingAddressPostalCode=99999999" +
        "&shippingAddressCity=Cidade Exemplo" +
        "&shippingAddressState=SP" +
        "&shippingAddressCountry=BRA" +
        "&timeout=25" +
        "&enableRecover=false";

    var planoAdesao = "preApproval.name=Teste 01" +
        "&preApproval.charge=AUTO" +
        "&preApproval.period=MONTH" +
        "&preApproval.expiration.value=10" +
        "&preApproval.expiration.unit=1 MONTH";


    var planoJson = {
        "preApproval": {
            "name": "Plano 01",
            "charge": "AUTO",
            "period": "MONTHLY",
            "amountPerPayment": 2,
            "expiration": {
                "value": 24,
                "unit": "MONTHS"
            },
            "details": "string",
            "maxAmountPerPeriod": 1,
            "maxAmountPerPayment": 1,
            "maxTotalAmount": 360,
            "maxPaymentsPerPeriod": 1,
            "cancelURL": "https://dev.domain.com/settings/premium"
        }
    }


    var criaPlano = {
        "reference": "plano01",
        "preApproval": {
            "name": "Nome Plano",
            "charge": "AUTO",
            "period": "MONTHLY",
            "expiration": {
                "value": 12,
                "unit": "MONTHS"
            },
            "amountPerPayment": 6.99,
        }
    }




    function getObjetoAderePlano(token) {

        var aderePlano = {
            "plan": "E92722E0F7F7BB5CC4DB8F82ACF92613",
            "sender": {
                "name": "Paulo Alexandre",
                "email": "paforest1970@gmail.com",
                "ip": "179.210.247.211",
                "phone": {
                    "areaCode": "21",
                    "number": "992902732"
                },
                "address": {
                    "street": "Rua Antonio Basilio",
                    "number": "204",
                    "complement": "apt 805",
                    "district": "Tijuca",
                    "city": "Rio de Janeiro",
                    "state": "RJ",
                    "country": "BRA",
                    "postalCode": "20511190"
                },
                "documents": [
                    {
                        "type": "CPF",
                        "value": "01114740780"
                    }

                ]
            },
            "paymentMethod": {
                "type": "CREDITCARD",
                "creditCard": {
                    "token": token,
                    "holder": {
                        "name": "Paulo Alexandre",
                        "birthDate": "19/08/1970",
                        "phone": {
                            "areaCode": "21",
                            "number": "992902732"
                        },
                        "documents": [
                            {
                                "type": "CPF",
                                "value": "01114740780"
                            }
                        ]
                    }
                },

            }
        }
        return aderePlano;
    }


    /**
     * 
     * @param {object} cliente 
     * @param {Function(Error, object)} callback
     */

    Pagseguro.VerificaPagamento = function (cliente, callback) {
        var urlVerificaPorNotificacao = 'https://ws.pagseguro.uol.com.br/pre-approvals/' + cliente + '?email=paulofore@gmail.com&token=' + token;
        var mensagem = {
            headers: {
                "Content-Type": "application/json;charset=ISO-8859-1",
                "Accept": "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
            },
        }
        request(urlVerificaPorNotificacao, mensagem, function (error, response, body) {
            callback(error, JSON.parse(body));
        });
    };




    /**
     *
     * @param {Function(Error, object)} callback
     */

    Pagseguro.AderePlano = function (creditCardToken, callback) {

        console.log('  *****   Adere Plano ****** ', creditCardToken);
        var urlCriaPlano = 'https://ws.sandbox.pagseguro.uol.com.br/pre-approvals/request?email=paulofore@gmail.com&token=' + token;
        var urlAderePlano = 'https://ws.pagseguro.uol.com.br/pre-approvals?email=paulofore@gmail.com&token=' + token;


        var proxyUrl = "http://tr626987:Eureka48@10.21.7.10:82";
        var proxiedRequest = request.defaults({ 'proxy': proxyUrl });

        //console.log('body: ', JSON.stringify(aderePlano));


        var mensagem = {
            url: urlAderePlano,
            headers: {
                "Content-Type": "application/json;charset=ISO-8859-1",
                "Accept": "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
            },
            body: JSON.stringify(getObjetoAderePlano(creditCardToken))
        }

        console.log('Body:', JSON.stringify(mensagem.body));
        request.post(urlAderePlano, mensagem, (err, response, body) => {
            //xml2js.parseString(body,callback);
            console.log('Erro: ', err);
            console.log('Body: ', body);
            callback(err, JSON.parse(body));
            //callback(null,{});
        });

    };


    /**
    *
    * @param {object} xml
    * @param {Function(Error, string)} callback
    */

    Pagseguro.PagamentoCaixaBranca = function (xml, callback) {

        var proxyUrl = "http://tr626987:Eureka48@10.21.7.10:82";
        var proxiedRequest = request.defaults({ 'proxy': proxyUrl });

        var mensagem = {
            url: urlCaixaBranca,
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=ISO-8859-1",
            },
            body: caixaBranca
        }


        proxiedRequest.post(urlCaixaBranca, mensagem, (err, response, body) => {
            xml2js.parseString(body, (err, result) => {
                //console.log('Body:' + JSON.stringify(result));
                if (result.errors) {
                    result.errors.error.forEach(erro => {
                        console.log('Erro: ', erro.message);
                    })
                    callback(result.errors, null);
                } else {
                    callback(null, result);
                }
            });
        })
    };

    /**
     *
     * @param {string} senderHash
     * @param {string} creditCardToken
     * @param {string} installmentQuantity
     * @param {string} installmentValue
     * @param {string} noInterestInstallmentQuantity
     * @param {Function(Error, object)} callback
     */

    Pagseguro.CheckoutCartao = function (senderHash, creditCardToken, installmentQuantity, installmentValue, noInterestInstallmentQuantity, callback) {
        var resposta;
        // TODO
        callback(null, resposta);
    };



    /**
     * 
     * @param {Function(Error, string)} callback
     */

    Pagseguro.ObtemSessao = function (callback) {

        var proxyUrl = "http://tr626987:Jenlop01@10.21.7.10:82";
        var proxiedRequest = request.defaults({ 'proxy': proxyUrl });

        console.log('Proxy', JSON.stringify(proxiedRequest));
        request.post(urlSession, {}, (err, response, body) => {
            console.log('Body:' + body);
            console.log('Erro:' + err);
            console.log('Response: ' + JSON.stringify(response));
            console.log('Status: ' + response.statusCode);
            xml2js.parseString(body, (err, result) => {
                this.idSessao = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
                //console.log('id=' + this.idSessao);
                callback(err, this.idSessao);
            });
        })

    };

    /**
     *
     * @param {Function(Error)} callback
     */
    Pagseguro.CriaPlano = function (callback) {
        console.log('  *****   Cria Plano ****** ');
        var urlCriaPlano = 'https://ws.sandbox.pagseguro.uol.com.br/pre-approvals/request?email=paulofore@gmail.com&token=' + token;
        //var urlAderePlano = 'https://ws.sandbox.pagseguro.uol.com.br/pre-approvals?email=paulofore@gmail.com&token=' + token;


        var proxyUrl = "http://tr626987:Jenlop01@10.21.7.10:82";
        var proxiedRequest = request.defaults({ 'proxy': proxyUrl });

        //console.log('body: ', JSON.stringify(aderePlano));

        var mensagem = {
            url: urlCriaPlano,
            headers: {
                "Content-Type": "application/json;charset=ISO-8859-1",
                "Accept": "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
            },
            body: JSON.stringify(criaPlano)
        }


        request.post(urlCriaPlano, mensagem, (err, response, body) => {
            //xml2js.parseString(body,callback);
            console.log('Erro: ', err);
            console.log('Body: ', body);
            callback(err, JSON.parse(body));
            //callback(null,{});
        });
    };


    /**
     * 
     * @param {Function(Error, object)} callback
     */

    Pagseguro.IniciaSessao = function (callback) {

        var proxyUrl = "http://tr626987:Eureka48@10.21.7.10:82";
        var proxiedRequest = request.defaults({ 'proxy': proxyUrl });

        console.log('Proxy', JSON.stringify(proxiedRequest));
        request.post(urlSession, {}, (err, response, body) => {
            console.log('Body:' + body);
            console.log('Erro:' + err);
            console.log('Response: ' + JSON.stringify(response));
            console.log('Status: ' + response.statusCode);
            xml2js.parseString(body, (err, result) => {
                this.idSessao = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
                //console.log('id=' + this.idSessao);
                callback(err, this.idSessao);
            });
        })
        /*
        this.http.post(this.urlSession, {}, {}).subscribe(data => {
            console.log('Data:' , data);
            //xml2js.parseString(data["_body"], function (err, result) {
            //  this.idSession = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
            //});
          });
        */
    };
};

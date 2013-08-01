/*global define:false*/
(function () {
    'use strict';

    define(function () {
        var ia = {};

        ia.activacion = function (w, x, h) {
            var resultado;
            if(this.sumatoria(this.productoPunto(w, x)) > h) {
                resultado = true;
            } else {
                resultado = false;
            }
            return resultado;
        };

        ia.sumatoria = function (arreglo) {
            var resultado = 0;
           arreglo.forEach(function (elemento, indice, array) {
                resultado += elemento;
           });
           return resultado;
        };

        ia.productoPunto = function (arreglo1, arreglo2) {
            var resultado = [];
            arreglo1.forEach(function (elemento, indice, array) {
                resultado[indice] = elemento * arreglo2[indice];
            });
            return resultado;
        };

        return ia;

    });

}());

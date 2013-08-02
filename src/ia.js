/*global define:false*/
(function () {
    'use strict';

    define(function () {
        var ia = {};

        ia.activacion = function (w, x, h) {
            var resultado;
            if(this.sumatoria(this.productoPunto(w, x)) >= h) {
                resultado = 1;
            } else {
                resultado = 0;
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

        ia.perceptron = function (ejemplos, esperado, tasa, umbral, pesos) {
            var salida = [];
            var variacion = [];
            var _error;
            var resultado = {};
            var iteracion = 0;
            var iteraciones = [];
            var that = this;
            var calculoPeso = function (elemento, indice, arreglo) {
            };
            var procesarEjemplo = function (elemento, indice, arreglo) {
                iteraciones[iteracion] = [];
                // Calcular la salida de cada elemento del ejemplo
                salida[indice] = that.activacion(pesos, elemento, umbral);
                // Para cada elemento del ejemplo, calcular variacion de vector peso
                _error = esperado[indice] - salida[indice];
                elemento.forEach(function (element, index, array) {
                    iteraciones[iteracion][index] = [];
                    // Calcular variacion
                    variacion[index] = tasa * _error * element;
                    // Actualizar cada peso al sumarle la variacion
                    pesos[index] += variacion[index];
                    iteraciones[iteracion][index] = pesos[index];
                });
            };

            while(_error !== 0) {
                // Procesar cada ejemplo
                ejemplos.forEach(procesarEjemplo);
                iteracion += 1;
            }

            // Redondear el vector peso final
            pesos.forEach(function (element, index, array) {
                pesos[index] = Math.round10(element, -1);
            });

            resultado.pesos = pesos;
            resultado.total_iteraciones = iteracion;
            resultado.iteraciones = iteraciones;

            return resultado;
        };

        ia.sigmoidea = function (t) {
            var potencia = Math.pow(Math.E, (-1*t));
            var denominador = 1 + potencia;
            return Math.round10((1 / denominador), -1);
        };

        return ia;

    });

}());

/**
 * Decimal adjustment of a number.
 *
 * @param   {String}    type    The type of adjustment.
 * @param   {Number}    value   The number.
 * @param   {Integer}   exp     The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number}            The adjusted value.
 */
function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Decimal round
if (!Math.round10) {
    Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
    };
}

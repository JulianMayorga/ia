/*global describe:false, expect:false, xit:false, it:false, define:false, jasmine: false*/
(function () {
    'use strict';

    define(['ia'], function (ia) {
        describe('Activacion', function () {

            it('deberia devolver verdadero si valores superan umbral', function () {
                var w = [2, 3];
                var x = [2, 1];
                var h = 6;
                var resultado = ia.activacion(w, x, h);
                expect(resultado).toBe(1);
            });

            it('deberia devolver 0 si valores no superan umbral', function () {
                var w = [2, 3];
                var x = [2, 1];
                var h = 9;
                var resultado = ia.activacion(w, x, h);
                expect(resultado).toBe(0);
            });

        });

        describe('Sumatoria', function () {
            it('[1,2] deberia devolver 3', function () {
                var arreglo = [1, 2];
                var resultado = 3;
                expect(ia.sumatoria(arreglo)).toBe(resultado);
            });
        });

        describe('Producto punto', function () {
            it('[1,2] punto [3,4] deberia ser [3,8]', function () {
                var arreglo1 = [1,2];
                var arreglo2 = [3,4];
                var resultado = [3,8];
                expect(ia.productoPunto(arreglo1, arreglo2)).toEqual(resultado);
            });
        });

        describe('Perceptron', function () {

            it('NAND', function () {
                // Fuente: http://en.wikipedia.org/wiki/Perceptron#Example
                var ejemplos = [
                    //x0 es cte = 1
                    [1, 0, 0],
                    [1, 0, 1],
                    [1, 1, 0],
                    [1, 1, 1],
                ];
                var esperado = [
                    1,
                    1,
                    1,
                    0
                ];
                var pesos = [0, 0, 0];
                var pesos_finales = [0.8, -0.2, -0.1];
                var tasa = 0.1;
                var umbral = 0.5;
                expect(ia.perceptron(ejemplos, esperado, tasa, umbral, pesos).pesos).toEqual(pesos_finales);
            });

            // Deberia recibir todos los argumentos
            it('deberia devolver estadisticas', function () {
                var ejemplos = [
                    //x0 es cte = 1
                    [1, 0, 0],
                    [1, 0, 1],
                    [1, 1, 0],
                    [1, 1, 1],
                ];
                var esperado = [
                    1,
                    1,
                    1,
                    0
                ];
                var pesos = [0, 0, 0];
                var total_iteraciones = 8;
                var tasa = 0.1;
                var umbral = 0.5;
                var resultado = ia.perceptron(ejemplos, esperado, tasa, umbral, pesos);
                expect(resultado.total_iteraciones).toEqual(total_iteraciones);
                expect(resultado.iteraciones).toBeDefined();
                expect(Array.isArray(resultado.iteraciones)).toBe(true);
                expect(resultado.iteraciones[1]).toEqual([0.4, 0, 0]);
            });
        });

        describe('Function sigmoidea', function () {
            it('sigmoidea(0)=0.5', function () {
                var t = 0;
                expect(ia.sigmoidea(t)).toEqual(0.5);
            });
            it('sigmoidea(10)=1', function () {
                var t = 10;
                expect(ia.sigmoidea(t)).toEqual(1);
            });
            it('sigmoidea(-10)=0', function () {
                var t = -10;
                expect(ia.sigmoidea(t)).toEqual(0);
            });
        });

    });
}());



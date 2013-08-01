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
                expect(resultado).toBe(true);
            });

            it('deberia devolver falso si valores no superan umbral', function () {
                var w = [2, 3];
                var x = [2, 1];
                var h = 9;
                var resultado = ia.activacion(w, x, h);
                expect(resultado).toBe(false);
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
    });
}());



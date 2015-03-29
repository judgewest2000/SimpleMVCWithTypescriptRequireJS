/// <reference path="../../custom/calculator.ts" />
define(["require", "exports", 'jquery', 'custom/calculator', 'custom/donothing'], function (require, exports, $, Calc, DoNothing) {
    var d = DoNothing;
    var LastLeg = function () {
        var x = new Calc.Calculator(10);
        var result = x.Add(3).Minus(2).Equals();
        $('body').append('You have run the calculator and returned back ' + result.toFixed(0));
        //DoNothing();
    };
    return LastLeg;
});
//# sourceMappingURL=viewwithtypescript.js.map
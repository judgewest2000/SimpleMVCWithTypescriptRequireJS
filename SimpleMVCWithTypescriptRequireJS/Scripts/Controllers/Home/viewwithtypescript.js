/// <reference path="../../custom/calculator.ts" />
define(["require", "exports", 'custom/calculator', 'custom/donothing'], function (require, exports, Calc, DoNothing) {
    var LastLeg = function () {
        var x = new Calc.Calculator(10);
        var result = x.Add(3).Minus(2).Equals();
        alert(result);
        DoNothing();
    };
    return LastLeg;
});
//# sourceMappingURL=viewwithtypescript.js.map
define(["require", "exports", 'underscore', 'global'], function (require, exports, _, Global) {
    var CalculatorFunctions;
    (function (CalculatorFunctions) {
        var Calculator = (function () {
            function Calculator(num) {
                this.num = num;
                this.rt = 0;
                this.thisisPrivate = 65;
                this.rt = num !== undefined ? num : 0;
            }
            Calculator.prototype.Add = function (num) {
                this.rt += num;
                return this;
            };
            Calculator.prototype.Minus = function (num) {
                this.rt -= num;
                return this;
            };
            Calculator.prototype.Times = function (num) {
                this.rt = this.rt * num;
                return this;
            };
            Calculator.prototype.Equals = function () {
                return this.rt;
            };
            Calculator.prototype.AddMany = function (numbers) {
                var self = this;
                _(numbers).each(function (ea) {
                    self.Add(ea);
                });
                return self;
            };
            Calculator.prototype.ShowAnEnum = function (curEnum) {
                if (curEnum === void 0) { curEnum = Global.Enums.TestEnums.Second; }
                alert(curEnum);
            };
            return Calculator;
        })();
        CalculatorFunctions.Calculator = Calculator;
    })(CalculatorFunctions || (CalculatorFunctions = {}));
    return CalculatorFunctions;
});
//# sourceMappingURL=calculator.js.map
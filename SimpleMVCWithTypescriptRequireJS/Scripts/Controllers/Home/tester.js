define(["require", "exports"], function (require, exports) {
    var BigModule;
    (function (BigModule) {
        var MyClass = (function () {
            function MyClass(getNumber) {
                this.a = { a: 1, b: 2 };
                this.t = getNumber;
                this.a["ben"] = 'def';
                var y = 'abc';
            }
            MyClass.prototype.AddNewBit = function (key, value) {
                this.a[key] = value;
            };
            return MyClass;
        })();
        BigModule.MyClass = MyClass;
    })(BigModule || (BigModule = {}));
    return BigModule;
});
//# sourceMappingURL=tester.js.map
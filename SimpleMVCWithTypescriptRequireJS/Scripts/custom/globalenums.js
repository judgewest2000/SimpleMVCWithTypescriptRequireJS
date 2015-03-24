define(["require", "exports"], function (require, exports) {
    var GlobalEnums;
    (function (GlobalEnums) {
        (function (TestEnums) {
            TestEnums[TestEnums["First"] = 0] = "First";
            TestEnums[TestEnums["Second"] = 1] = "Second";
            TestEnums[TestEnums["Third"] = 2] = "Third";
        })(GlobalEnums.TestEnums || (GlobalEnums.TestEnums = {}));
        var TestEnums = GlobalEnums.TestEnums;
    })(GlobalEnums || (GlobalEnums = {}));
    return GlobalEnums;
});
//# sourceMappingURL=globalenums.js.map
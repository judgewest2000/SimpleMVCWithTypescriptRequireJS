/// <reference path="../../custom/calculator.ts" />

import $ = require('jquery');
import Calc = require('custom/calculator');
import DoNothing = require('custom/donothing');
import Global = require('custom/global');

var LastLeg = function() : void {
    var x = new Calc.Calculator(10);
    var result = x.Add(3).Minus(2).Equals();
    
    alert(result);
    DoNothing();
}

export = LastLeg;
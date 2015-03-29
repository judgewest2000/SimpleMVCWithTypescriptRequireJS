/// <reference path="../../custom/calculator.ts" />

import $ = require('jquery');
import Calc = require('custom/calculator');
import DoNothing = require('custom/donothing');
import Global = require('custom/global');

var d = DoNothing;

var LastLeg = function() : void {
    var x = new Calc.Calculator(10);
    var result = x.Add(3).Minus(2).Equals();
    $('body').append('You have run the calculator and returned back ' + result.toFixed(0));
    //DoNothing();
}

export = LastLeg;
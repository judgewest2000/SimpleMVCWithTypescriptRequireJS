﻿import $ = require('jquery');
import _ = require('underscore');
import Global = require('global');


export class Calculator {
    private rt: number = 0;
    constructor(public num?: number) { this.rt = num !== undefined ? num : 0; }
    Add(num: number): Calculator { this.rt += num; return this; }
    Minus(num: number): Calculator { this.rt -= num; return this; }
    Times(num: number): Calculator { this.rt = this.rt * num; return this; }
    Equals(): number { return this.rt; }

    AddMany(numbers: [number]) {
        var self = this;
        _(numbers).each(function (ea) { self.Add(ea); });
        return self;
    }

    private thisisPrivate: number = 65;
}


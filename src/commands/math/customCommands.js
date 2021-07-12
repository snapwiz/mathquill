LatexCmds.barwedge = LatexCmds.nand = bind(VanillaSymbol, '\\barwedge ', '&#8892;');
LatexCmds.veebar = LatexCmds.xor = bind(VanillaSymbol, '\\veebar ', '&#8891;');
LatexCmds.nrarr = LatexCmds.nrarr = LatexCmds.nrightarrow =
    bind(VanillaSymbol, '\\nrightarrow ', '&#8603;');
LatexCmds.nlarr = LatexCmds.nleftarrow = bind(VanillaSymbol, '\\nleftarrow ', '&#8602;');
LatexCmds.square = bind(VanillaSymbol, '\\square', '<span class="mq-non-leaf mq-square" />');
LatexCmds.newline = bind(VanillaSymbol, '\\newline', '<span class="mq-non-leaf mq-newline" />');

var arrowsHtml = '<span class="mq-non-leaf mq-rightleftarrows">'
    + '<span class="mq-non-leaf mq-rightleftarrows">'
    + '<svg width="1rem" height="1rem" viewBox="0 0 24 21" version="1.1"'
    + 'xmlns="http://www.w3.org/2000/svg">'
    + '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'
    + '<g transform="translate(0.823000, -0.000000)" fill="currentColor" fill-rule="nonzero">'
    + '<path d="M5.403,-7.47669874e-14 L5.402,4 L23.177,4 L23.177,6 L5.402,6 L5.403,10.453 L0.177,5.226 L5.403,-7.47669874e-14 Z" transform="translate(11.677000, 5.226500) scale(-1, 1) translate(-11.677000, -5.226500) "></path>'
    + '<path d="M17.774,10.115 L23,15.341 L17.774,20.567 L17.774,16.115 L0,16.115 L0,14.115 L17.774,14.115 L17.774,10.115 Z" transform="translate(11.500000, 15.341000) scale(-1, 1) translate(-11.500000, -15.341000) "></path>'
    + '</g>'
    + '</g>'
    + '</svg>'
    + '</span>'
LatexCmds.rightleftarrows = bind(VanillaSymbol, '\\rightleftarrows', arrowsHtml);

var wCharHtml = '<span class="mq-non-leaf">'
    + '<svg xmlns="http://www.w3.org/2000/svg" width="22.37" height="14.638" viewBox="0 0 22.37 14.638">'
    + '<path d="M8.686-9.652q.193-.654.295-1.185a4.732,4.732,0,0,0,.1-.842,1.085,1.085,0,0,0-.279-.81,1.315,1.315,0,0,0-.847-.316v-.525H12.1v.525a1.43,1.43,0,0,0-.9.563,5.272,5.272,0,0,0-.676,1.507L6.67,1.308H3.11L.686-8.687-2.188,1.308H-5.641L-8.879-10.649a8.9,8.9,0,0,0-.434-1.3,1.711,1.711,0,0,0-.408-.568,1.377,1.377,0,0,0-.552-.284v-.525h6.681v.525a1.543,1.543,0,0,0-.831.306.87.87,0,0,0-.284.7,5.408,5.408,0,0,0,.1.9q.1.568.231,1.051l1.952,7.517,3.035-11H3.861L6.52-2.392Zm-5.92-2.735H1.437l-.214.794L4.129.3H5.652l.172-.461Zm-9.062,0H-8.139L-4.718.3h1.426l.214-.547Z" transform="translate(10.273 13.33)" fill="#22242b"/>'
    + '</svg></span>'
LatexCmds.W = bind(VanillaSymbol, '\\mathbb{W}', wCharHtml);

LatexCmds.sumSymbol =
    LatexCmds.summationSymbol = bind(VanillaSymbol, '\\summationSymbol', '<span class="mq-large-operator mq-non-leaf"><big>&sum;</big></span>');

var SummationLowerNotation = P(MathCommand, function (_, super_) {
    _.init = function (ch, html) {
        var htmlTemplate =
            '<span class="mq-large-operator mq-non-leaf">'
            + '<big>' + html + '</big>'
            + '<span class="mq-from"><span>&0</span></span>'
            + '</span>'
            ;
        Symbol.prototype.init.call(this, ch, htmlTemplate);
    };
    _.createLeftOf = function (cursor) {
        super_.createLeftOf.apply(this, arguments);
        if (cursor.options.sumStartsWithNEquals) {
            Letter('n').createLeftOf(cursor);
            Equality().createLeftOf(cursor);
        }
    };
    _.latex = function () {
        function simplify(latex) {
            return latex.length === 1 ? latex : '{' + (latex || '') + '}';
        }
        return this.ctrlSeq + '_' + simplify(this.ends[L].latex());
    };
    _.parser = function () {
        var string = Parser.string;
        var optWhitespace = Parser.optWhitespace;
        var succeed = Parser.succeed;
        var block = latexMathParser.block;

        var self = this;
        var blocks = self.blocks = [MathBlock(), MathBlock()];
        for (var i = 0; i < blocks.length; i += 1) {
            blocks[i].adopt(self, self.ends[R], 0);
        }

        return optWhitespace.then(string('_')).then(function (supOrSub) {
            var child = blocks[supOrSub === '_' ? 0 : 1];
            return block.then(function (block) {
                block.children().adopt(child, child.ends[R], 0);
                return succeed(self);
            });
        }).many().result(self);
    };
    _.finalizeTree = function () {
        this.downInto = this.ends[L];
        this.upInto = this.ends[R];
        this.ends[L].upOutOf = this.ends[R];
        this.ends[R].downOutOf = this.ends[L];
    };
});

LatexCmds.sumLower =
    LatexCmds.summationLower = bind(SummationLowerNotation, '\\summationLower', '&sum;');

var SummationUpperNotation = P(MathCommand, function (_, super_) {
    _.init = function (ch, html) {
        var htmlTemplate =
            '<span class="mq-large-operator mq-non-leaf">'
            + '<span class="mq-to"><span>&0</span></span>'
            + '<big>' + html + '</big>'
            + '</span>'
            ;
        Symbol.prototype.init.call(this, ch, htmlTemplate);
    };
    _.createLeftOf = function (cursor) {
        super_.createLeftOf.apply(this, arguments);
        if (cursor.options.sumStartsWithNEquals) {
            Letter('n').createLeftOf(cursor);
            Equality().createLeftOf(cursor);
        }
    };
    _.latex = function () {
        function simplify(latex) {
            return latex.length === 1 ? latex : '{' + (latex || '') + '}';
        }
        return this.ctrlSeq + '^' + simplify(this.ends[L].latex());
    };
    _.parser = function () {
        var string = Parser.string;
        var optWhitespace = Parser.optWhitespace;
        var succeed = Parser.succeed;
        var block = latexMathParser.block;

        var self = this;
        var blocks = self.blocks = [MathBlock(), MathBlock()];
        for (var i = 0; i < blocks.length; i += 1) {
            blocks[i].adopt(self, self.ends[R], 0);
        }

        return optWhitespace.then(string('^')).then(function (supOrSub) {
            var child = blocks[supOrSub === '^' ? 0 : 1];
            return block.then(function (block) {
                block.children().adopt(child, child.ends[R], 0);
                return succeed(self);
            });
        }).many().result(self);
    };
    _.finalizeTree = function () {
        this.downInto = this.ends[L];
        this.upInto = this.ends[R];
        this.ends[L].upOutOf = this.ends[R];
        this.ends[R].downOutOf = this.ends[L];
    };
});

LatexCmds.sumUpper =
    LatexCmds.summationUpper = bind(SummationUpperNotation, '\\summationUpper', '&sum;');
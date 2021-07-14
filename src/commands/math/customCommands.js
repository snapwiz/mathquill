LatexCmds.barwedge = LatexCmds.nand = bind(VanillaSymbol, '\\barwedge ', '&#8892;');
LatexCmds.veebar = LatexCmds.xor = bind(VanillaSymbol, '\\veebar ', '&#8891;');
LatexCmds.nrarr = LatexCmds.nrarr = LatexCmds.nrightarrow =
    bind(VanillaSymbol, '\\nrightarrow ', '&#8603;');
LatexCmds.nlarr = LatexCmds.nleftarrow = bind(VanillaSymbol, '\\nleftarrow ', '&#8602;');

LatexCmds.oiint = bind(VanillaSymbol, '\\oiint ', '&#8751;');
LatexCmds.oiiint = bind(VanillaSymbol, '\\oiiint ', '&#8752;');


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
    + '<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1rem" viewBox="0 0 22.37 14.638">'
    + '<path d="M8.686-9.652q.193-.654.295-1.185a4.732,4.732,0,0,0,.1-.842,1.085,1.085,0,0,0-.279-.81,1.315,1.315,0,0,0-.847-.316v-.525H12.1v.525a1.43,1.43,0,0,0-.9.563,5.272,5.272,0,0,0-.676,1.507L6.67,1.308H3.11L.686-8.687-2.188,1.308H-5.641L-8.879-10.649a8.9,8.9,0,0,0-.434-1.3,1.711,1.711,0,0,0-.408-.568,1.377,1.377,0,0,0-.552-.284v-.525h6.681v.525a1.543,1.543,0,0,0-.831.306.87.87,0,0,0-.284.7,5.408,5.408,0,0,0,.1.9q.1.568.231,1.051l1.952,7.517,3.035-11H3.861L6.52-2.392Zm-5.92-2.735H1.437l-.214.794L4.129.3H5.652l.172-.461Zm-9.062,0H-8.139L-4.718.3h1.426l.214-.547Z" transform="translate(10.273 13.33)" fill="#22242b"/>'
    + '</svg></span>'
LatexCmds.W = bind(VanillaSymbol, '\\mathbb{W}', wCharHtml);

var uCarHtml = '<span class="mq-non-leaf"><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 15.48 16.986"><defs><style>.a{fill:#22242b;}</style></defs><path class="a" d="M442.22,421.407c0,1.942-.009,3.95.024,5.925.05,3,1.486,4.71,4.268,5.082a15.806,15.806,0,0,0,4.627-.121,4.33,4.33,0,0,0,3.678-4.073,19.992,19.992,0,0,0,.135-2.207c.017-2.267.019-4.574.02-6.8v-1.331a1.673,1.673,0,0,1,1.146-1.864c.052-.017.119-.147.168-.242l.037-.072-.042-.025a.657.657,0,0,0-.276-.115c-1.363-.021-2.567-.02-3.678,0a.663.663,0,0,0-.292.144l-.052.036.04.056c.075.1.153.212.228.235a1.576,1.576,0,0,1,1.118,1.7q.006,1.729,0,3.458v1.3h.011v4.426a1.74,1.74,0,0,1-.015.344c-.033.2-.06.4-.087.609a8.307,8.307,0,0,1-.3,1.5c-.516,1.562-1.727,2.25-3.592,2.035a2.681,2.681,0,0,1-2.444-2.73,7.164,7.164,0,0,1-.057-.783q-.008-4.968,0-9.934c0-.867.151-1.708,1.231-1.983a.761.761,0,0,0,.115-.2c.011-.025.023-.05.035-.074l-.039-.03a.468.468,0,0,0-.19-.11c-1.143-.006-2.292-.01-3.437-.01-1.172,0-2.341,0-3.5.011a.4.4,0,0,0-.258.141.4.4,0,0,0,.1.253c1.277.355,1.274,1.387,1.272,2.3v.171Q442.226,419.917,442.22,421.407Zm1.142-2.508q0-1.15,0-2.315v-.125h2.313l.006.119q.006.137.015.276c.012.206.024.415.025.624q0,2.091,0,4.182,0,2.482,0,4.966a6.629,6.629,0,0,0,1.428,4.862l.15.23-.272-.039c-2.149-.3-3.258-1.364-3.491-3.334a34.8,34.8,0,0,1-.17-3.769l0-.251C443.354,422.523,443.358,420.681,443.362,418.9Z" transform="translate(-440.844 -415.545)"/></svg></span>'
LatexCmds.U = bind(VanillaSymbol, '\\mathbb{U}', uCarHtml);

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

LatexCmds.prodSymbol = bind(VanillaSymbol, '\\prodSymbol', '<span class="mq-large-operator mq-non-leaf"><big>&prod;</big></span>');
LatexCmds.prodLower = bind(SummationLowerNotation, '\\prodLower', '&prod;');
LatexCmds.prodUpper = bind(SummationUpperNotation, '\\prodUpper', '&prod;');
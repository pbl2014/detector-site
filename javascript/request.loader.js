/**
 * @Class: RequestLoader
 * @See:
 * headerやfooterや各コンテンツを一括読み込みするライブラリ
 * h1. 例
 * '''
 * var list = {'#header': '_header.html'}
 * var requestLoader = RequireLoader(list);
 * requestLoader.load(); --> listに定義されているページを読み込みます
 * '''
 * @useLibrary: underscore.js(_) && jQuery.js ($)
 * @Author: DeathMarch
 * @Version: 1.0.0
 */
(function(exports){

    'use strict';

    /**
     * コンストラクタ
     * @param list => {'#header': '_header.html'}
     * @param debug       => true || false
     */
    var klass = function(list, debug) {
        var defaults =  {
            '#header': '_header.html',
            '#footer': '_footer.html'
        };
        this._debug = debug || false;
        this._list = list || defaults;
        return this;
    };

    /**
     * loading...
     */
    klass.prototype.load = function() {
        _.each(this._list, function(fileName, elementName) {
            var $el = $(elementName);
            if ($el.length) {
                $(elementName).load(fileName);
            } else if (this._debug == true) {
                alert('load Error!! [' + elementName + '=>' + fileName + ']');
            }
        }.bind(this));
        return this;
    };

    /**
     * clear html...
     */
    klass.prototype.clear = function() {
        _.each(this._list, function(n, elementName) {
            var $el = $(elementName);
            if ($el.length) {
                $(elementName).html('');
            } else if (this._debug == true) {
                alert('is not element!! [' + elementName + ']');
            }
        }.bind(this));
        return this;
    };

    /**
     * GlobalVariable Add.
     * @type {klass}
     */
    exports.RequestLoader = function(list, debug) {return new klass(list, debug)};

})(window, jQuery);
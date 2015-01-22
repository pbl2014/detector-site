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
(function(exports, $) {
    'use strict';

    var lists = {
        '人': 'human',
        '私': 'human',
        '彼': 'human',
        '彼女': 'human'
    };

    exports.MovieWordMappingList = lists;

})(window, jQuery);
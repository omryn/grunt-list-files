define.oldSkin({
    name: 'skins.core.ContactListSkin',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        _tags: [],
        _params: [
            {'id': 'themeDir','type':'themeUrl',  'defaultTheme': 'THEME_DIRECTORY', 'name': ''},
            {'id': '$bgColor', 'type':'cssBgColor', 'defaultTheme': 'areaBgColor', 'name': ''},
            {'id': 'border', 'type':'CSSString', 'defaultTheme': 'borderContainer', 'name': ''},
            {'id': '$borderRadius', 'type':'cssBorderRadius', 'defaultTheme': 'radiusContainer', 'name': ''},
            {'id': 'padding', 'type':'CSSString', 'defaultTheme': 'padding1', 'name': ''},
            {'id': 'componentSpacing', 'type':'CSSString', 'defaultTheme': 'componentSpacing', 'name': ''}

        ],

        _html: '<div skinPart="bg"></div>' +
               '<div class="linksList" skinPart="itemsContainer"></div>',
        _css: [
            '{position:relative; margin-bottom:[componentSpacing]; [$borderRadius]}',
            '%bg% {position:absolute; width:100%; height:100%; [$bgColor] [$borderRadius] background-image:url([themeDir]inlineShadow.png); background-repeat:repeat-x;}',
            '%itemsContainer% {position:relative; padding:[padding]; [$borderRadius] border:[border];}'
        ],
        itemSkinClassName: 'mobile.core.skins.ContactItemSkin'
    }
});


require(['jquery'], function ($) {

    var root = $('#topdetails').data('mainurl');
    var scriptName = root + 'scripts/controllers';

    if (window.location.pathname === '/') {
        scriptName += '/default-landing-page';
    } else {
        var paths = window.location.pathname.split('/');
        for (var i = 1; i < paths.length; i++) {
            var cur = paths[i];
            if (root.toLowerCase().indexOf(cur.toLowerCase()) === -1)
                scriptName += '/' + paths[i];
        }        
    }

    scriptName += '.js';

    require([scriptName], function (Def) {
        Def();
    });

});

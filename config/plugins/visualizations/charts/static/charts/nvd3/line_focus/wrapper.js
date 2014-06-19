// dependencies
define(['plugin/charts/nvd3/common/wrapper'], function(NVD3) {

// widget
return Backbone.View.extend({
    // initialize
    initialize: function(app, options) {
        this.app        = app;
        this.options    = options;
    },
            
    // render
    draw : function(process_id, chart, request_dictionary, canvas_list) {
        var nvd3 = new NVD3(this.app, this.options);
        nvd3.draw({
            type                : 'lineWithFocusChart',
            process_id          : process_id,
            chart               : chart,
            request_dictionary  : request_dictionary,
            canvas_list         : canvas_list
        });
    }
});

});
BeerNotes.Views.BaseModalView = Backbone.View.extend({
    events: {
        'click .yes': 'confirm',
        'click .no': 'cancel'
    },

    initialize: function() {
        _.bindAll(this);
    },

    confirm: function() {
        this.trigger('confirm');
        this.closeDialog();

        return this;
    },

    cancel: function(e) {
        this.closeDialog();
    },

    render: function() {
        $('[rel="tooltip"]').tooltip('hide');
        $('[rel="tooltip"]').tooltip('disable');
        this.$el.html(this.options.template());
        this.$el.find('.content').css({maxHeight: (this.getWindowHeight() * 0.5)});
        var self = this;

        this.$el.dialog({
            modal: true,
            closeText: 'X',
            height: 'auto',
            width: 600,
            title: this.options.title,
            close: function() {
                self.trigger('dialogclose');
                self.remove();
            },
            open: function() {
                var $dialog = $(this).parent('.ui-dialog')
                if ($dialog.height() > self.getWindowHeight()) {
                    // Both the jQuery Dialog height and CSS height must be set in that order
                    // for IE and firefox compatibility
                    self.$el.dialog('option', 'height', self.getWindowHeight()/3).scrollTop(0);
                    $dialog.height(self.getWindowHeight()/3).scrollTop(0);
                    self.$el.dialog('option', 'position', { my: "center", at: "center", of: window });
                }
            }
        });
        return this;
    },

    closeDialog: function(e) {
        this.$el.dialog('close');
        return this;
    },

    getWindowHeight: function(){
        return $(window).height();
    }
});
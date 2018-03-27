/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('lesson.view.grid.GridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.GridController',

    requires: [
        'lesson.view.charts.ChartsView',
        'lesson.view.form.FormUser'
    ],

    onItemSelected: function (sender, record) {
        this.getViewModel().set('currentUser', record);
        return Ext.create({
            xtype: 'form-user',
            customConfigs: {
                user: record,
                setUser: this.getViewModel().setUser.bind(this.getViewModel())
            },
        });
    },
    parseUsers: function () {
        debugger;
        let users = this.getViewModel().getStore();
        console.log(users);
    },

    onInfoSelected: function (widget) {
        let record = widget.getWidgetRecord();
        return Ext.create({
            xtype: 'chartsview',
            customConfigs: {
                user: false
            }
        }).show();
    }
    // Get function from viewModel
});

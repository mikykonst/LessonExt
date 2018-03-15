/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('lesson.view.grid.GridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'lesson.view.form.FormWindow',
        'lesson.view.form.UserForm'
    ],

    onItemSelected: function (sender, record) {
        return Ext.create({
            xtype: 'userform',
            renderTo: Ext.getBody(),
            viewModel: {
                data: {
                    User: record
                }
            }
        })
    },
    onSave: function () {
        this.getView().destroy();
    },
    onCancel: function () {
      this.getView().destroy();
    }
});

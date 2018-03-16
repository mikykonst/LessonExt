/**
 * Created by mkons on 16.03.2018.
 */
Ext.define('lesson.view.form.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.FormController',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    onCancel: function () {
        this.getView().close();
    }
});
/**
 * Created by mkons on 16.03.2018.
 */
Ext.define('lesson.view.form.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.FormController',

    /**
     * Called when the view is created
     */
    init: function () {

    },

    onSave: function () {
        let temp = this.getView().getViewModel().get('user');
        debugger;
        let a = this.getView().getViewModel().get('currentUser');
        temp.set(a.getData());
        this.getView().getViewModel().bind('{user}', function (rec) {
            rec.commit();
            this.getView().close();
        });
    },

    onCancel: function () {
        this.getView().getViewModel().bind('{user}', function (rec) {
            rec.reject();
            this.getView().close();
        });
    }
});
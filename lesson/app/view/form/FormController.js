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
        let user = this.getViewModel().get('user');
        user.commit();
        this.getView().close();
    },

    onCancel: function () {
        this.getView().close();
    },
    setData: function () {
        let user = this.getViewModel().getData().user;
        //this.getViewModel().getData().setUser(user);
        this.getView().customConfigs.setUser(user);
        this.getView().close();
    }
});
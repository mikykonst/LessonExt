/**
 * Created by mkons on 28.03.2018.
 */
Ext.define('lesson.view.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.MainController',

    /**
     * Called when the view is created
     */

    update: function (userStore, user) {
        let viewModel = this.getViewModel();

        viewModel.set('isHidden', false);

        viewModel.set('currentUser', user);
        viewModel.set('userStore', userStore);
    }
});
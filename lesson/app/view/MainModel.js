/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('lesson.view.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: [
        'lesson.model.User',
        'lesson.store.Users'
    ],
    stores: {
        userStore: {
            model: 'lesson.model.User',
            type: 'users',
            autoLoad: true
        }
    },
    setCurrentItem: function (item) {
        this.set('currentItem', item);
    },
    getCurrentItem: function () {
        this.get('currentItem');
    }

    //TODO - add data, formulas and/or methods to support your view
});

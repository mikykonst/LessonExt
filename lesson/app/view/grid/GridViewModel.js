/**
 * Created by mkons on 16.03.2018.
 */
Ext.define('lesson.view.grid.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.GridViewModel',

    requires: [
        'lesson.model.User',
        'lesson.store.Users'
    ],

    stores: {
        userStore: {
            type: 'users',
            model: 'lesson.model.User',
            autoLoad: true,
            selection: '{currentUser}'
        }
    },

    /*setCurrentUser: function (user) {
      this.set('currentUser', user)
    },*/
    setUser: function (updatedUser) {
        let currentUser = this.get('currentUser');
        currentUser.set(updatedUser.getData());
    },


    data: {
        currentUser: null
    }
});
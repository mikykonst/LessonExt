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
           autoLoad: true
       }
    },

    setCurrentUser: function (user) {
      this.set('currentUser', user)
    },

    data: {
        currentUser: null
    }
});
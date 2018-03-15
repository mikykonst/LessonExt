Ext.define('lesson.store.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.users',

    requires: [
        'lesson.model.User'
    ],

    model: 'lesson.model.User',
    proxy: {
        type: 'ajax',
        url: 'users.json',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    }
});

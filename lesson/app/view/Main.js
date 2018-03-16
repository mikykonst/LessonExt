/**
 * Created by mkons on 15.03.2018.
 */
Ext.define('lesson.view.Main', {
    extend: 'Ext.Container',

    requires: [
        'lesson.view.grid.GridController',
        'lesson.view.grid.GridViewModel',
        'lesson.view.grid.UserGrid'
    ],

    items: [{
        xtype: 'UserGrid',
        controller: 'GridController',
        viewModel: 'GridViewModel',
        bind: {
            selection: '{currentUser}',
            store: '{userStore}'
        }
    }]
});
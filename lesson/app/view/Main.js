/**
 * Created by mkons on 15.03.2018.
 */
Ext.define('lesson.view.Main', {
    extend: 'Ext.Container',

    requires: [
        'lesson.view.MainModel',
        'lesson.view.grid.UserGrid'
    ],

    viewModel: 'main',

    items: [{
        xtype: 'usergrid',
        bind: '{userStore}'
    }
    ]
});
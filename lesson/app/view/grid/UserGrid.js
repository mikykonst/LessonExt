/**
 * This view is an example list of people.
 */
Ext.define('lesson.view.grid.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    controller: 'main',
    requires: [
        'lesson.model.User',
        'lesson.store.Users',
        'lesson.view.MainModel',
        'lesson.view.form.FormWindow',
        'lesson.view.grid.GridController'
    ],
    columns: [
        {text: 'Name', dataIndex: 'name', flex: 1},
        {text: 'Is active', dataIndex: 'isActive', flex: 1},
        {text: 'date', dataIndex: 'date', editor: 'datefield', flex: 1}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

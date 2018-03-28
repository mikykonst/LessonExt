/**
 * This view is an example list of people.
 */
Ext.define('lesson.view.grid.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'UserGrid',
    //controller: 'GridController',
    viewModel: 'GridViewModel',
    requires: [
        'Ext.button.Button',
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Widget',
        'lesson.view.grid.GridController',
        'lesson.view.grid.GridViewModel'
    ],

    controller: 'GridController',

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        flex: 1
    }, {
        xtype: 'booleancolumn',
        text: 'Is active',
        dataIndex: 'isActive',
        trueText: 'Yes',
        falseText: 'No',
        flex: 1
    }, {
        text: 'date',
        dataIndex: 'date',
        editor: 'datefield',
        formatter: 'date("d/m/Y")',
        flex: 1
    }, {
        text: 'info',
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'button',
            bubbleEvents: ['myEvent'],
            iconCls: 'x-fa fa-info',
            listeners: {
               click: 'fireMethod'
            }
        }
    }],
    listeners: {
        rowdblclick: 'onItemSelected',
    }
});

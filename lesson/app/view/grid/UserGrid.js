/**
 * This view is an example list of people.
 */
Ext.define('lesson.view.grid.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'UserGrid',

    requires: [
        'Ext.grid.column.Boolean'
    ],

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
    }],
    listeners: {
        rowdblclick: 'onItemSelected'
    }
});

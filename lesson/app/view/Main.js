/**
 * Created by mkons on 15.03.2018.
 */
Ext.define('lesson.view.Main', {
    extend: 'Ext.Container',

    requires: [
        'Ext.container.Container',
        'Ext.layout.container.Fit',
        'lesson.view.charts.Chart',
        'lesson.view.grid.UserGrid'
    ],

    items: [{
        xtype: 'container',
        width: screen.width,
        // minWidth: 2500,
        layout: 'fit',
        resizable: true,
        items: [{
            xtype: 'UserGrid',
            bind: {
                //selection: '{currentUser}',
                store: '{userStore}'
            }
        }]
    }, {
        xtype: 'chart',
        name: 'column',
        width: screen.width
    }, {
        xtype: 'container',
        layout: 'column',
        width: screen.width,
        items: [
            {
                xtype: 'chart',
                name: 'pie',
                columnWidth: 0.5
            }, {
                xtype: 'chart',
                name: 'line',
                columnWidth: 0.5
            }
        ]
    }]
});
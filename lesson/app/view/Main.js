/**
 * Created by mkons on 15.03.2018.
 */
Ext.define('lesson.view.Main', {
        extend: 'Ext.Container',

        requires: [
            'Ext.container.Container',
            'Ext.layout.container.Fit',
            'Ext.layout.container.HBox',
            'lesson.view.MainController',
            'lesson.view.MainViewModel',
            'lesson.view.charts.BarChart.BarChart',
            'lesson.view.charts.LineChart.LineChart',
            'lesson.view.charts.PieChart.PieChart',
            'lesson.view.grid.UserGrid'
        ],

        controller: 'MainController',

        viewModel: 'MainViewModel',

        items: [{
            xtype: 'container',
            minWidth: screen.width,
            fullscreen: true,
            layout: 'fit',
            resizable: true,
            items: [{
                xtype: 'UserGrid',
                /*bind: {
                    store: '{userStore}'
                }*/
            }]
        }, {
            xtype: 'linechart',
            bind: {
                currentUser: '{currentUser}',
                hidden: '{isHidden}'
            },
            flex: 1
        }, {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            bind: {
                hidden: '{isHidden}'
            },
            items: [
                {
                    xtype: 'barchart',
                    bind: {
                        userStore: '{userStore}'

                    },
                    flex: 1
                }, {
                    xtype: 'piechart',
                    bind: {
                        userStore: '{userStore}'
                    },
                    flex: 1
                }
            ]
        }],
        listeners: {
            myEvent: 'update'
        }
    }
);
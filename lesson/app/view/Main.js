/**
 * Created by mkons on 15.03.2018.
 */
Ext.define('lesson.view.Main', {
        extend: 'Ext.Container',

        requires: [
            'Ext.container.Container',
            'Ext.layout.container.Column',
            'Ext.layout.container.Fit',
            'lesson.view.charts.BarChart.BarChart',
            'lesson.view.charts.LineChart.LineChart',
            'lesson.view.charts.PieChart.PieChart',
            'lesson.view.grid.UserGrid'
        ],

        viewModel: {
            data: {
                isHidden: true,
                currentUser: {}
            },
            stores: {
                userstore: {
                    type: 'users',
                    model: 'lesson.model.User',
                    autoLoad: true,
                }
            }
        },

        items: [{
            xtype: 'container',
            //  width: screen.width,
            minWidth: screen.width,
            fullscreen: true,
            layout: 'fit',
            resizable: true,
            items: [{
                xtype: 'UserGrid',
                bind: {
                    store: '{userStore}'
                }
            }]
        }, {
            xtype: 'linechart',
            bind: {
                currentUser: '{currentUser}',
                hidden: '{!isHide}'
            },
            flex: 1
        }, {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            items: [
                {
                    xtype: 'barchart',
                    bind: {
                        hidden: '{isHide}'
                    },
                    flex: 1
                }, {
                    xtype: 'piechart',
                    flex: 1
                }
            ]
        }],
        listeners: {
            myEvent: function (isHide, user) {
                this.getViewModel().set('currentUser', user);
                if (!isHide) {
                    this.getViewModel().set('isHidden', isHide);
                } else {
                    this.getViewModel().set('isHidden', !isHide);
                }
            }
        }
    }
);
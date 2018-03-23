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
              isHidden: true
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
                    //selection: '{currentUser}',
                    store: '{userStore}'
                }
            }, {
                xtype: 'chartsview',
                bind: {
                    hidden: '{isHidden}'
                }
            }]
        }],
        listeners: {
            myEvent: function (isHide) {
                if(!isHide) {
                    this.getViewModel().set('isHidden', isHide);
                } else {
                    this.getViewModel().set('isHidden', !isHide);
                }
            }
        }
    }
);
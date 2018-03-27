/**
 * Created by mkons on 23.03.2018.
 */
Ext.define('lesson.view.charts.ChartsView', {
    extend: 'Ext.Container',
    width: '100%',
    xtype: 'chartsview',
    requires: [
        'Ext.container.Container',
        'Ext.layout.container.HBox',
        'lesson.view.charts.BarChart.BarChart',
        'lesson.view.charts.LineChart.LineChart',
        'lesson.view.charts.PieChart.PieChart'
    ],

    config: {
      currentUser: null
    },

    items: [{
        xtype: 'linechart',
        bind: {

        },
        flex: 1
    }, {
        xtype: 'container',
        layout: 'hbox',
        width: '100%',
        items: [
            {
                xtype: 'barchart',
                flex: 1
            }, {
                xtype: 'piechart',
                flex: 1
            }
        ]
    }],
    setCurrentUser: function (val) {
        this.currentUser = val;
    }
});
/**
 * Created by mkons on 22.03.2018.
 */
Ext.define('lesson.view.charts.BarChart.BarChart', {
    extend: 'lesson.view.charts.Chart',
    xtype: 'barchart',

    requires: [
        'lesson.view.charts.BarChart.BarChartViewController'
    ],

    controller: 'BarChartViewController',
    setCurrentUser: function (val) {
        this.userstore = val;
    }
});
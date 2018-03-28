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
    setUserStore: function (val) {
        this.userStore = val;
        this.getController().start(val);
    }
});
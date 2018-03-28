Ext.define('lesson.view.charts.LineChart.LineChart', {
    extend: 'lesson.view.charts.Chart',

    controller: 'LineChartViewController',

    xtype: 'linechart',

    requires: [
        'lesson.view.charts.LineChart.LineChartViewController'
    ],

    setCurrentUser: function (val) {
        this.currentUser = val;
        this.getController().start(this.currentUser);
    }
});
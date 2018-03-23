/**
 * Created by mkons on 22.03.2018.
 */
Ext.define('lesson.view.charts.PieChart.PieChart', {
    extend: 'lesson.view.charts.Chart',

    requires: [
        'lesson.view.charts.PieChart.PieChartController'
    ],

    controller: 'PieChartController',
    xtype: 'piechart',

    items: [
        /* include child components here */
    ]
});
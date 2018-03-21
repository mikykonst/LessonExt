/**
 * Created by mkons on 21.03.2018.
 */
Ext.define('lesson.view.charts.Chart', {
    extend: 'Ext.Component',
    xtype: 'chart',
    controller: 'ChartViewController',
    viewModel: 'chart',

    items: [
        /* include child components here */
    ],
    listeners: {
        afterrender: 'start'
    }
});
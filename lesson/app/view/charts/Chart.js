/**
 * Created by mkons on 21.03.2018.
 */
Ext.define('lesson.view.charts.Chart', {
    extend: 'Ext.Component',

    xtype: 'chart',

    controller: 'ChartViewController',
    viewModel: 'chart',

    width: '100%',

    data: {
        bind: '{users.data}'
    },

    requires: [
        'lesson.view.charts.ChartViewController',
        'lesson.view.charts.ChartViewModel'
    ]
});
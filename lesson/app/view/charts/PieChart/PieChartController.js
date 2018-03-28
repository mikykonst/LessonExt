/**
 * Created by mkons on 22.03.2018.
 */
Ext.define('lesson.view.charts.PieChart.PieChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.PieChartController',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    start: function (users) {
        let arr = [];
        let averageData = 0;
        if (users !== null) {
            users.map(user => {
                let item = {};
                item.name = user.name;
                let avData = 0;
                user.data.map(data => {
                    avData += data.data;
                });
                averageData = avData/user.data.length;
                item.y = Math.round(averageData);
                arr.push(item);
            });
        }

        let id = this.getView().getId();
        Highcharts.chart(id, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Users productivity'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Productivity',
                colorByPoint: true,
                data: arr
            }]
        });
    }
});
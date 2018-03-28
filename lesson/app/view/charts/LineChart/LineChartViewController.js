/**
 * Created by mkons on 22.03.2018.
 */
Ext.define('lesson.view.charts.LineChart.LineChartViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.LineChartViewController',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    start: function (currentUser) {
        let months = [];
        let data = [];
        if (currentUser.data !== undefined) {

            currentUser.data.map(each => {
                months.push(each.month);
                data.push(each.data)
            });
        }

        let id = this.getView().getId();
        Highcharts.chart(id, {
            chart: {
                type: 'line'
            },
            title: {
                text: `${currentUser.name} statistic`
            },
            xAxis: {
                categories: months,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Sprints'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: currentUser.name,
                data: data

            }]
        });
    },
});
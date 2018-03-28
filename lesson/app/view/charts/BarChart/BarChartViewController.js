/**
 * Created by mkons on 22.03.2018.
 */
Ext.define('lesson.view.charts.BarChart.BarChartViewController', {
    extend: 'lesson.view.charts.ChartViewController',
    alias: 'controller.BarChartViewController',

    /**
     * Called when the view is created
     */
    init: function () {

    },
    start: function (users) {
        let arr = [];
        if (users !== null) {
            users.map(user => {
                let item = {};
                item.name = user.name;
                item.data = user.data.map(data => data.data);
                arr.push(item);
            });
        }
        let id = this.getView().getId();
        Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Something else'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'The same'
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
            series: arr
        });
    }
});
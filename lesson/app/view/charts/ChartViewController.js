/**
 * Created by mkons on 21.03.2018.
 */
Ext.define('lesson.view.charts.ChartViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ChartViewController',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    start: function () {
    },

    parseJson: function () {
        let userData = this.getViewModel().getDataFromJSON().items;
        console.log(userData);
        let l = userData.length;
        alert(l)
    }
});
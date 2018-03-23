/**
 * Created by mkons on 21.03.2018.
 */
Ext.define('lesson.view.charts.ChartViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.chart',

    requires: [
        'lesson.model.User',
        'lesson.store.Users'
    ],

    stores: {
        users: {
            model: 'lesson.model.User',
            type: 'users',
            autoLoad: true
        }
    },

    getDataFromJSON: function () {
        return this.getStore('users').getData();
    }
});
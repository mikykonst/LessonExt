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

    data: {
        dates: [1,2,3,4,5,6,7,8,9,10,11,12]
    }
});
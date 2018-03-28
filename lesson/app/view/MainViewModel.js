/**
 * Created by mkons on 28.03.2018.
 */
Ext.define('lesson.view.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.MainViewModel',

    data: {
        isHidden: true,
        currentUser: {},
        userStore: null
    }
});
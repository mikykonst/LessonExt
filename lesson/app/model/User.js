/**
 * Created by mkons on 13.03.2018.
 */
Ext.define('lesson.model.User', {
    extend: 'Ext.data.Model',
    alias: 'user',

    fields: [
        {name: 'name', type: 'string'},
        {name: 'isActive', type: 'boolean'},
        {name: 'date', type: 'date'}
    ]
});
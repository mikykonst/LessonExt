/**
 * Created by mkons on 13.03.2018.
 */
Ext.define('lesson.view.form.FormWindow', {
    extend: 'Ext.window.Window',
    layout: 'fit',
    floating: true,
    alias: 'widget.MyWindow',
    requires: [
        'Ext.layout.container.Fit',
        'lesson.view.form.UserForm'
    ],
    closeAction: 'hide',
    items: [
        { xtype: 'userform' }
    ]
});
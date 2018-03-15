/**
 * Created by mkons on 13.03.2018.
 */
Ext.define('lesson.view.form.UserForm', {
    extend: 'Ext.form.FormPanel',
    xtype: 'userform',
    modal: true,
    controller: 'main',
    draggable: true,
    floating: true,
    closable: true,
    requires: [
        'Ext.button.Button',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Text'
    ],


    bodyPadding: 5,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            bind: {
                value: '{User.name}'
            }

        }, {
            xtype: 'combobox',
            fieldLabel: 'Active status',
            label: 'Is active',
            queryMode: 'local',
            editable: false,
            displayField: 'name',
            bind: {
                value: '{User.isActive}'
            },
            store: [
                {name: true},
                {name: false}
            ]

        }, {
            xtype: 'datefield',
            fieldLabel: 'Date',
            bind: {
                value: '{User.date}'
            }
        }, {
            xtype: 'button',
            text: 'Save',
            listeners: {
                click: 'onSave'
            }
        }, {
            xtype: 'button',
            text: 'Cancel',
            listeners: {
                click: 'onCancel'
            }
        }]
});
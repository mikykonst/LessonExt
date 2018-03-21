/**
 * Created by mkons on 16.03.2018.
 */
Ext.define('lesson.view.form.FormUser', {
    extend: 'Ext.window.Window',
    xtype: 'form-user',
    autoShow: true,
    modal: true,
    draggable: true,
    floating: true,
    closable: true,
    resizable: true,
    requires: [
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'lesson.view.form.FormController',
        'lesson.view.form.FormViewModel'
    ],
    controller: 'FormController',
    initConfig: function (config) {

        Ext.apply(config, {
            viewModel: {
                type: 'FormViewModel',
                data: {
                    user: config.customConfigs.user.clone(),
                },
            }
        });

        this.callParent(arguments);
    },


    items: [{
        xtype: 'container',
        layout: 'vbox',
        padding: 10,
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Name',
                bind: {
                    value: '{user.name}'
                }
            }, {
                xtype: 'combobox',
                fieldLabel: 'Is active',
                editable: false,
                displayField: 'name',
                bind: {
                    value: '{user.isActive}'
                },
                store: [{
                    name: true
                }, {
                    name: false
                }]
            }, {
                xtype: 'datefield',
                fieldLabel: 'Date',
                formatter: 'date("m/d/Y")',
                bind: {
                    value: '{user.date}'
                }
            }, {
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    text: 'Save',
                    listeners: {
                        click: 'setData'
                    }
                }, {
                    xtype: 'button',
                    margin: '0 0 0 10',
                    text: 'Cancel',
                    listeners: {
                        click: 'onCancel'
                    }
                }]
            }
        ]
    }],
});
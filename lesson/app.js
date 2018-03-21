/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */

Ext.application({
    extend: 'lesson.Application',

    name: 'lesson',

    requires: [
        // This will automatically load all classes in the lesson namespace
        // so that application classes do not need to require each other.
        'lesson.*'
    ],

    // The name of the initial view to create.
    mainView: 'lesson.view.Main'
});

// This is main process of Electron, started as first thing when your
// app starts. This script is running through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import { app, Menu } from 'electron';
import createWindow from './helpers/window';
import jetpack from 'fs-jetpack';
import pathUtil from 'path';
import toolbarMenu from './platform/toolbarmenu/main';

// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import env from './env';
import manifest from './manifest';

var mainWindow;

var shouldQuit = app.makeSingleInstance(function(commandLine, workingDirectory) {
  // Someone tried to run a second instance, we should focus our window.
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});

if (shouldQuit) {
  app.quit();
}

app.on('ready', function () {
    var mainWindow = createWindow('main', {
        isMaximized: true,
        title: manifest.productName,
        width: 1000,
        height: 600,
        webPreferences: {
            preload: pathUtil.resolve(pathUtil.join(__dirname, 'platform/preloader/main.js'))
        }
    });
    
    mainWindow.maximize();
    
    mainWindow.loadURL('file://' + __dirname + '/app.html');

/*
    if (env.name !== 'production') {
        mainWindow.openDevTools();
    }
*/
    //Set Main Toolbar Menu
    toolbarMenu.setToolbarMenu(env, manifest);
});

app.on('window-all-closed', function () {
    app.quit();
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const createWindow = () => {
    const window = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { preload: `${__dirname}/src/index.js` },
    });
    window.loadFile("index.html");
};
electron_1.app.on("ready", () => {
    createWindow();
});
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        electron_1.app.quit();
});

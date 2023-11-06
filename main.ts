import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { preload: `${__dirname}/src/index.js` },
  });

  window.loadFile("index.html");
};

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

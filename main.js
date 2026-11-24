const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 850,
    title: "Fortnite Sprites Tracker",
    icon: path.join(__dirname, "icon.ico"),
    backgroundColor: "#0e131f",
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile(path.join(__dirname, "app", "index.html"));
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
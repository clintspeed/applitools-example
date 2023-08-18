module.exports = {
  // Concurrency refers to the number of visual checkpoints Applitools will perform in parallel
  testConcurrency: 5,
  // then the SDK will automatically read the `APPLITOOLS_API_KEY` environment variable to fetch it.
  showLogs: true,
  batchName: "Example: Cypress in JavaScript with the Ultrafast Grid",
  browser: [
    // Add 3 desktop browsers with different viewports for cross-browser testing in the Ultrafast Grid.
    { width: 1920, height: 1080, name: "chrome" },
    { width: 1920, height: 1080, name: "firefox" },
    { width: 1440, height: 900, name: "safari" },
    // Add 2 mobile emulation devices with different orientations for cross-browser testing in the Ultrafast Grid.
    { deviceName: "Galaxy S22", screenOrientation: "portrait" },
    {
      iosDeviceInfo: {
        deviceName: "iPhone 14",
        screenOrientation: "portrait",
        iosVersion: "latest",
      },
    },
  ],
};

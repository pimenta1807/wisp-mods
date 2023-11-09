# wisp-mods

## Background-image
1. JS Injector so we can inject a custom class for style if needed.
2. Chose a img, a SVG file is cool, the one I used is 16kb

3. Convert it to base64 with [Base64.Guru](https://base64.guru/converter/encode/image/svg), set the ouput format to CSS Background Image.
Get the `background-image: url("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZG............` 

4. CSS Injector to add the image, replacing the url.

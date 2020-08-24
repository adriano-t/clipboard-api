# clipboard-api
javascript clipboard api test

```js
const canvas = document.createElement("canvas");
canvas.width = 100;
canvas.height = 100;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#eee";
ctx.fillRect(10, 10, 50, 50);
canvas.toBlob(function(blob) { 
	const item = new ClipboardItem({ "image/png": blob });
	navigator.clipboard.write([item]);
	alert("Copied! paste it on paint");
});
```

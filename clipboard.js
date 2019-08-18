 

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

 /*
var canvas = document.createElement("canvas");
canvas.width = 100;
canvas.height = 100;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#eee";
ctx.fillRect(10, 10, 50, 50);
	
console.log("asd");
var image = new Image();
image.src = canvas.toDataURL(); 
image.addEventListener('load', function() { 
	console.log("LOADED")
}); 
	
var data = ctx.getImageData(0,0,canvas.width,canvas.height);
 
const imageData = new ArrayBuffer(4096)
canvas.toBlob(function(blob) {
	 
	// const blob = new Blob(['hello'], {type: 'text/plain'});
	// const item = new ClipboardItem({'text/plain': blob}); 
	 const item = new ClipboardItem({ "image/png": blob });
	 navigator.clipboard.write([item]);
});
;

const item2 = new ClipboardItem({
    "image/png": new Blob([imageData], {type: "image/png"}),
    "text/plain": "An image of a blob",
  }
);
navigator.clipboard.write([item2]);




	var cdata;
document.addEventListener('copy', function(e) {
	console.log("copy")
	
	
	console.log("data",data)
	// e.clipboardData is initially empty, but we can set it to the
	// data that we want copied onto the clipboard.
	// e.clipboardData.setData('text/plain', 'Hello, world!');
	// e.clipboardData.setData('text/html', '<b>Hello, world!</b>'); 
	console.log("-------------------cd", e.clipboardData)
	var file = new File([image], "file.png", {type: "image/png"});
	console.log("file",file)
	cdata = e.clipboardData;
	console.log("setdata",e.clipboardData.setData('image/png', file));  
	console.log("items", e.clipboardData.items.length);
	console.log("item[0]", e.clipboardData.items[0]);
	console.log("dragimage", e.clipboardData.setDragImage(image, 0, 0))
	
	console.log("-------------------cd", e.clipboardData)
	console.log("adding", e.clipboardData.items.add(file, 'image/png'))
	console.log("items", e.clipboardData.items.length, e.clipboardData.items)
	console.log("-------------------cd", e.clipboardData)

	// This is necessary to prevent the current document selection from
	// being written to the clipboard.
	e.preventDefault();
});

window.addEventListener("paste", function(pasteEvent){
		if(pasteEvent.clipboardData == false){
			console.log("no clipboard data");
		};

		var items = pasteEvent.clipboardData.items;

		if(items == undefined){
			console.log("no items: " , items.length); 
		};
		
		
		
		console.log("items: " , items.length);

		for (var i = 0; i < items.length; i++) {
			var type = items[i].type;
			console.log("type:", type, items[i]); 
			
			if (type.indexOf("image") != -1)
			{		 
				var blob = items[i].getAsFile(); 
				if(blob){
					var img = new Image();
					
					var URLObj = window.URL || window.webkitURL;
					img.src = URLObj.createObjectURL(blob);
					img.addEventListener('load', function() { 
						ctx.drawImage(this, 0, 0);
					}); 
				}
			}
			else if (type.indexOf("text") != -1)
			{		 
				items[i].getAsString(function (s){
					console.log("clipboard text:",s)
				});
			} 
		}
	}, true);
	
/*
var data = new Blob(["Text data"], {type : "text/plain"});
navigator.clipboard.write(data).then(function() {
		console.log("Copied to clipboard successfully!");
}, function() {
		console.error("Unable to write to clipboard. :-(");
});
*/
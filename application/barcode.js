console.log('start');

var configuration = {
	inputStream: {
		name: "Live",
		type: "LiveStream",
		constraints: {
			width: 640,
			height: 480,
			facing: "environment" // or user
		},
		area: {
			top: "0%",
			right: "0%",
			left: "0%",
			bottom: "0%"
		},
		singleChannel: false
	},
	tracking: false,
	debug: true,
	controls: false,
	locate: true,
	numOfWorkers: 4,
	visual: {
		show: true
	},
	decoder: {
		readers: ["code_128_reader"]
	},
	locator: {
		patchSize: "medium",
		halfSample: true
	}
}

Quagga.init(configuration,
	function(error){
	if(error){
		console.log(error);
		return
	}
	console.log("Quagga Initialized! Let's go.")
	Quagga.start();
});

console.log('end');
//alert("hello world");
//var frecnote = 440;

$(document).ready(function(){

// white keys
	$("#c4").click(whiteTrans);
	$("#d4").click(whiteTrans);
	$("#e4").click(whiteTrans);
	$("#f4").click(whiteTrans);
	$("#g4").click(whiteTrans);
	$("#a4").click(whiteTrans);
	$("#b4").click(whiteTrans);
	$("#c5").click(whiteTrans);
	$("#d5").click(whiteTrans);
	$("#e5").click(whiteTrans);


// FUNCTIONS FOR TRANSITIONS

	function whiteTrans(){
		$(this).addClass("wkp");
		var oneSec = setTimeout(backColor, 1000, $(this));
		// oneSec;
	};
	function backColor(el){
		el.removeClass("wkp");
	};


//	FUNCTIONS FOR STAGE

	$("#c4").click(function(){
		$("#stage").css("animation", "aniC 2s infinite both");
		play(261.63);
	});
	$("#cs4").click(function(){
		$("#stage").css("animation", "aniCs 2s infinite both");
		play(277.18);
	});
	$("#d4").click(function(){
		$("#stage").css("animation", "aniD 2s infinite both");
		play(293.66);
	});
	$("#ef4").click(function(){
		$("#stage").css("animation", "aniEf 2s infinite both");
		play(311.13);
	});
	$("#e4").click(function(){
		$("#stage").css("animation", "aniE 2s infinite both");
		play(329.63);
	});
	$("#f4").click(function(){
		$("#stage").css("animation", "aniF 2s infinite both");
		play(349.23);
	});
	$("#fs4").click(function(){
		$("#stage").css("animation", "aniFs 2s infinite both");
		play(369.99);
	});
	$("#g4").click(function(){
		$("#stage").css("animation", "aniG 2s infinite both");
		play(392.00);
	});
	$("#gs4").click(function(){
		$("#stage").css("animation", "aniGs 2s infinite both");
		play(415.30);
	});
	$("#a4").click(function(){
		$("#stage").css("animation", "aniA 2s infinite both");
		play(440);
	});
	$("#bf4").click(function(){
		$("#stage").css("animation", "aniBf 2s infinite both");
		play(466.16);
	});
	$("#b4").click(function(){
		$("#stage").css("animation", "aniB 2s infinite both");
		play(493.88);
	});
	$("#c5").click(function(){
		$("#stage").css("animation", "aniC 2s infinite both");
		play(523.25);
	});
	$("#cs5").click(function(){
		$("#stage").css("animation", "aniCs 2s infinite both");
		play(554.37);
	});
	$("#d5").click(function(){
		$("#stage").css("animation", "aniD 2s infinite both");
		play(587.33);
	});
	$("#ef5").click(function(){
		$("#stage").css("animation", "aniEf 2s infinite both");
		play(622.25);
	});
	$("#e5").click(function(){
		$("#stage").css("animation", "aniE 2s infinite both");
		play(659.25);
	});
}); 

// AUDIO PRODUCTION

var audioCtx;
function play(frec){
	// create web audio api context
	audioCtx = new (window.AudioContext || window.webkitAudioContext)();

	// create Oscillator node
	var oscillator = audioCtx.createOscillator();

	oscillator.type = 'sine';
	oscillator.frequency.setValueAtTime(frec, audioCtx.currentTime); // value in hertz
	oscillator.connect(audioCtx.destination);
	oscillator.start();
	oscillator.stop(audioCtx.currentTime + 1);
	setTimeout(closeContext,1000);
}

function closeContext(){
	audioCtx.close();
}




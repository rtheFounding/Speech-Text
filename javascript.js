window.onload = function() {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    var startBtn = document.getElementById('start-btn');
    var stopBtn = document.getElementById('stop-btn');
    var result = document.getElementById('result');

    startBtn.onclick = function() {
        recognition.start();
    };

    stopBtn.onclick = function() {
        recognition.stop();
    };

    recognition.onresult = function(event) {
        var transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }
        result.textContent = transcript;
    };

    recognition.onerror = function(event) {
        console.log('Error occurred in recognition: ' + event.error);
    };
};
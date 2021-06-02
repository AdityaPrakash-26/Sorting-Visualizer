var bars = [];

for (var n = 0; n < 100; ++n) {
    var randomNum = Math.floor(Math.random() * 101);
    bars.push(randomNum);
}

for(var i = 0; i<100; i++){
    console.log(bars[i]);
}
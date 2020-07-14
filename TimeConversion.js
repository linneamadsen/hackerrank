'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    if(s[8] == "P"){
        var new_s = '';
        var hour = '';
        var hour = s[0] + s[1];
        var rest_of_time = s[2] + s[3] + s[4] + s[5] + s[6] + s[7];
        hour = Number(hour);
        if (hour < 12){
        hour = hour + 12;
        }
        // hour = toString(hour);
        console.log(hour);
        new_s = hour + rest_of_time;
        return new_s;
    }
    if(s[8] == "A"){
        var new_s_2 = '';
        if(s[0] == "1" && s[1] == "2"){
            var hour = "00";
            var rest_of_time = s[2] + s[3] + s[4] + s[5] + s[6] + s[7];
            return hour + rest_of_time;
        }
        return s.substr(0, 8);
    }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}

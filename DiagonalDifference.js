'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    var squareNumber = arr.length
    console.log(arr);
    console.log(squareNumber);
    var left_to_right_diag = 0;
    var right_to_left_diag = 0;
    for (var i = 0; i < squareNumber; i++){
        left_to_right_diag = left_to_right_diag + arr[i][i]  
        right_to_left_diag = right_to_left_diag + arr[i][squareNumber-1-i]
    }

    var diagonalDifference;
    diagonalDifference = Math.abs(left_to_right_diag - right_to_left_diag);
    // console.log("right_to_left_diag" + right_to_left_diag);
    // console.log("left_to_right_diag" + left_to_right_diag);
    // console.log("diagonalDifference" + diagonalDifference)
    return diagonalDifference

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

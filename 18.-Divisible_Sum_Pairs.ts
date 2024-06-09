"use strict";

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  var pairs: number = 0;
  for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j < n; j++) {
      if (i !== j && (ar[i] + ar[j]) % k === 0) {
        pairs++;
      }
    }
  }
  return Math.floor(pairs / 2);
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const firstMultipleInput: string[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const n: number = parseInt(firstMultipleInput[0], 10);

  const k: number = parseInt(firstMultipleInput[1], 10);

  const ar: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result: number = divisibleSumPairs(n, k, ar);

  ws.write(result + "\n");

  ws.end();
}

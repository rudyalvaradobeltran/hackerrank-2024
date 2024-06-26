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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
  var highestScore: number = scores[0];
  var lowestScore: number = scores[0];
  var highestScoreCount: number = 0;
  var lowestScoreCount: number = 0;
  for (var i = 1; i <= scores.length - 1; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestScoreCount++;
    }
    if (scores[i] < lowestScore) {
      lowestScore = scores[i];
      lowestScoreCount++;
    }
  }
  return [highestScoreCount, lowestScoreCount];
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const n: number = parseInt(readLine().trim(), 10);

  const scores: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((scoresTemp) => parseInt(scoresTemp, 10));

  const result: number[] = breakingRecords(scores);

  ws.write(result.join(" ") + "\n");

  ws.end();
}

// create a dictionary to store the roll results
let rollCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

// repeat until any number reaches 10 times
while (Math.max(...Object.values(rollCounts)) < 10) {
    // roll the die and update the roll counts
    let rollResult = Math.floor(Math.random() * 6) + 1;
    rollCounts[rollResult]++;

    // print the current roll counts
    console.log(rollCounts);
}

// find the number that reached maximum times and minimum times
let maxRoll = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
let minRoll = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);

// print the results
console.log(`The number ${maxRoll} was rolled ${rollCounts[maxRoll]} times (maximum).`);
console.log(`The number ${minRoll} was rolled ${rollCounts[minRoll]} times (minimum).`);

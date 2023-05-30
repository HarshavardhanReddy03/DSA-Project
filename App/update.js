let bars = [];
const def = "#fd0081", chng = "#431f91", finished = "#8ef511", selected = "yellow";
let isPaused = false; // Variable to track if sorting is paused

window.onload = setup();

async function setup() {
  let b = document.getElementById("bars");
  let d = document.getElementById("delay");
  document.getElementById("b").innerText = b.value;
  document.getElementById("d").innerText = d.value + "ms";

  if (bars.length != parseInt(b.value)) {
    generateBars(parseInt(b.value));
  }
}

// ...

// Function to pause or resume the sorting operation
async function pauseResumeSorting() {
  isPaused = !isPaused; // Toggle the paused state

  if (!isPaused) {
    // Resume sorting
    document.getElementById("pauseBtn").innerText = "Pause";
    await performSorting();
  } else {
    // Sorting is paused
    document.getElementById("pauseBtn").innerText = "Resume";
  }
}

// Perform sorting based on the selected algorithm
async function performSorting() {
  let selectedAlgorithm = document.getElementById("algorithm").value;

  switch (selectedAlgorithm) {
    case "selectionSort":
      await SelectionSort();
      break;
    case "bubbleSort":
      await BubbleSort();
      break;
    case "insertionSort":
      await InsertionSort();
      break;
    case "mergeSort":
      await MergeSort();
      break;
    case "quickSort":
      await QuickSort();
      break;
    case "heapSort":
      await HeapSort();
      break;
    default:
      break;
  }
}

// ...

// Modified sorting functions to check for pause state

// Selection Sort
async function SelectionSort() {
  // ...

  for (let i = 0; i < bars.length; i++) {
    // ...

    for (let j = i + 1; j < bars.length; j++) {
      // ...

      if (isPaused) {
        // Sorting is paused, wait until resumed
        while (isPaused) {
          await Sleep(100); // Adjust the delay as needed
        }
      }

      // ...
    }

    // ...
  }

  Finished_Sorting();
}

// Bubble Sort
async function BubbleSort() {
  // ...

  for (let i = 0; i < bars.length - 1; i++) {
    // ...

    for (let j = 0; j < bars.length - i - 1; j++) {
      // ...

      if (isPaused) {
        // Sorting is paused, wait until resumed
        while (isPaused) {
          await Sleep(100); // Adjust the delay as needed
        }
      }

      // ...
    }

    // ...
  }

  Finished_Sorting();
}

// Insertion Sort
async function InsertionSort() {
  // ...

  for (let i = 1; i < bars.length; i++) {
    // ...

    while (j >= 0 && parseInt(bars[j].split(/[:%]/)[1]) > parseInt(key.split(/[:%]/)[1])) {
      // ...

      if (isPaused) {
        // Sorting is paused, wait until resumed
        while (isPaused) {
          await Sleep(100); // Adjust the delay as needed
        }
      }

      // ...
    }

    // ...
  }

  Finished_Sorting();
}

// Merge Sort
// ...

// Quick Sort
// ...

// Heap

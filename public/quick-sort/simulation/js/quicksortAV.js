//Comments Dictionary
comments = {
  "av_c1": "Done sorting!",
  "av_c2": "Select the pivot.",
  "av_c3": "Move the pivot to the end.",
  "av_c4": "Partition the subarray.",
  "av_c5": "When the right bound crosses the left bound, all elements to the left of the left bound are less than the pivot and all elements to the right are greater than or equal to the pivot.",
  "av_c6": "Move the pivot to its final location.",
  "av_c7": "Left sublist contains a single element which means it is sorted.",
  "av_c8": "Call quicksort on the left sublist.",
  "av_c9": "Right sublist contains a single element which means it is sorted.",
  "av_c10": "Call quicksort on the right sublist.",
  "av_c11": "Move the left bound to the right until it reaches a value greater than or equal to the pivot.",
  "av_c12": "Step right.",
  "av_c13": "That is as far as we go this round.",
  "av_c14": "Move the right bound to the left until it crosses the left bound or finds a value less than the pivot.",
  "av_c15": "Step left.",
  "av_c16": "Swap the selected values.",
  "av_c17": "Bounds have crossed.",
  "av_c18": "Here is a visualization of the entire Quicksort process."
};

commentsQueue = [];

const displayComment = function(str){
  $('#ins').html(str);
};

/*global alert: true, ODSA, console */
$(document).ready(function() {
  "use strict";
  var av;   // for JSAV library object

  // Load the config object with interpreter and code created by odsaUtils.js
  var config = ODSA.UTILS.loadConfig(),
      interpret = config.interpreter,       // get the interpreter
      settings = config.getSettings();      // Settings for the AV

  // add the array layout setting preference
  var arrayLayout = settings.add("layout", {type: "select",
    options: {bar: "Bar", array: "Array"},
    label: "Array layout: ", value: "array"});

  // Initialize the arraysize dropdown list
  ODSA.AV.initArraySize(5, 12, 8);

  // Execute the "Run" button function
  function runIt() {
    var arrValues = ODSA.AV.processArrayValues();

    // If arrValues is null, the user gave us junk which they need to fix
    if (arrValues) {
      ODSA.AV.reset(true);
      av = new JSAV($(".avcontainer"), {settings: settings});

      // Initialize the original array
      var arr = av.ds.array(arrValues, {indexed: true, layout: arrayLayout.val()});
      //av.umsg(interpret("av_c18"));
      av.displayInit();

      quicksort(arr, 0, arr.size() - 1);

      //av.umsg(interpret("av_c1"));
      commentsQueue.push(comments["av_c1"]);
      av.recorded(); // mark the end
    }
  }

  function quicksort(arr, left, right) {
    //av.umsg(interpret("av_c2"));
    commentsQueue.push(comments["av_c2"]);

    var pivotIndex = Math.floor((left + right) / 2);
    arr.addClass(pivotIndex, "processing");
    av.step();

    //av.umsg(interpret("av_c3"));
    commentsQueue.push(comments["av_c3"]);
    arr.swapWithStyle(pivotIndex, right);
    av.step();

    //av.umsg(interpret("av_c4"));
    commentsQueue.push(comments["av_c4"]);
    arr.setLeftArrow(left);
    arr.setRightArrow(right - 1);
    av.step();
    // finalPivotIndex will be the final position of the pivot
    var finalPivotIndex = partition(arr, left, right - 1, arr.value(right));

    //av.umsg(interpret("av_c5"));
    commentsQueue.push(comments["av_c5"]);
    av.step();

    //av.umsg(interpret("av_c6"));
    commentsQueue.push(comments["av_c6"]);
    arr.toggleArrow(finalPivotIndex);
    arr.swapWithStyle(right, finalPivotIndex);
    arr.removeClass(finalPivotIndex, "processing");
    arr.addClass(finalPivotIndex, "deemph");
    av.step();

    // Sort left partition
    var subArr1 = arr.slice(left, finalPivotIndex);
    if (subArr1.length === 1) {
      //av.umsg(interpret("av_c7"));
      commentsQueue.push(comments["av_c7"]);
      arr.toggleArrow(finalPivotIndex - 1);
      av.step();
      arr.toggleArrow(finalPivotIndex - 1);
      arr.addClass(left, "deemph");
    } else if (subArr1.length > 1) {
      //av.umsg(interpret("av_c8"));
      commentsQueue.push(comments["av_c8"]);
      av.step();
      quicksort(arr, left, finalPivotIndex - 1);
    }

    // Sort right partition
    var subArr2 = arr.slice(finalPivotIndex + 1, right + 1);
    if (subArr2.length === 1) {
      //av.umsg(interpret("av_c9"));
      commentsQueue.push(comments["av_c9"]);
      arr.toggleArrow(finalPivotIndex + 1);
      av.step();
      arr.toggleArrow(finalPivotIndex + 1);
      arr.addClass(finalPivotIndex + 1, "deemph");
    } else if (subArr2.length > 1) {
      //av.umsg(interpret("av_c10"));
      commentsQueue.push(comments["av_c10"]);
      av.step();
      quicksort(arr, finalPivotIndex + 1, right);
    }
  }

  function partition(arr, left, right, pivotVal) {
    var origLeft = left;

    while (left <= right) {
      // Move the left bound inwards
      //av.umsg(interpret("av_c11"));
      commentsQueue.push(comments["av_c11"]);
      av.step();
      while (arr.value(left) < pivotVal) {
        //av.umsg(interpret("av_c12"));
        commentsQueue.push(comments["av_c12"]);
        arr.clearLeftArrow(left);
        left++;
        arr.setLeftArrow(left);
        av.step();
      }

      arr.highlight(left);
      //av.umsg(interpret("av_c13"));
      commentsQueue.push(comments["av_c13"]);
      av.step();

      // Move the right bound inwards
      //av.umsg(interpret("av_c14"));
      commentsQueue.push(comments["av_c14"]);
      av.step();
      // If its desirable to have the right bound continue into sorted sections, replace origLeft with 0
      while ((right > origLeft) && (right >= left) && (arr.value(right) >= pivotVal)) {
        //av.umsg(interpret("av_c15"));
        commentsQueue.push(comments["av_c15"]);
        arr.clearRightArrow(right);
        right--;
        arr.setRightArrow(right);
        av.step();
      }

      if (right > left) {
        arr.highlight(right);
        //av.umsg(interpret("av_c13"));
        commentsQueue.push(comments["av_c13"]);
        av.step();
        // Swap highlighted elements
        //av.umsg(interpret("av_c16"));
        commentsQueue.push(comments["av_c16"]);
        arr.swap(left, right);
        av.step();
        arr.unhighlight([left, right]);
      } else {
        //av.umsg(interpret("av_c17"));
        commentsQueue.push(comments["av_c17"]);
        arr.unhighlight(left);
        av.step();
        break;
      }
    }

    // Clear the arrows and mark the final position of the pivot
    arr.clearLeftArrow(left);
    arr.clearRightArrow(right);
    arr.toggleArrow(left);

    // Return first position in right partition
    return left;
  }

  // Connect action callbacks to the HTML entities
  $("#run").click(runIt);
  $("#ssperform").submit(function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    runIt();
  });
  $("#reset").click(ODSA.AV.reset);  
});

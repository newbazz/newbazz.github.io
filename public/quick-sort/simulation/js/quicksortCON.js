//Comments Dictionary
comments = {
  "av_c1": "When we start the partition function, pivot value 60 has been moved to the right most position.",
  "av_c2": "The left and right bounds are set to positions 0 and 8, respectively",
  "av_c3": "Now move left bound rightward as long as it is at a value less than 60. Since it starts on 76 which is greater than 60, there is no movement of the left bound at this time.",
  "av_c4": "Likewise, the right bound starts at a value less than 60, so it does not move.",
  "av_c5": "Swap the values at the bounds.",
  "av_c6": "Now move the left bound to the right as long as it is at a value less than the pivot.",
  "av_c7": "Step.",
  "av_c8": "Now we are at 88, which is greater than or equal to 60.",
  "av_c9": "Now we move the right bound to the left until it reaches a value less than 60.",
  "av_c10": "Now the right bound is at 42, which is less than 60.",
  "av_c11": "Swap.",
  "av_c12": "Once again, move the left bound to the right.",
  "av_c13": "Left bound is at 85, which is bigger than the pivot value.",
  "av_c14": "Move the right bound to the left until we reach a value that is smaller than 60.",
  "av_c15": "Note that the right bound has crossed over the left bound. So partition is done.",
  "av_c16": "Since the left bound has reached position 4, this is the value returned by the partition function."  
};

commentsQueue = [];

const displayComment = function(str){
  $('#ins').html(str);
};

/*global ODSA */
$(document).ready(function() {
  "use strict";
  var av_name = "quicksortCON";
  var interpret = ODSA.UTILS.loadConfig({av_name: av_name}).interpreter;

  var theArray = [76, 6, 57, 88, 85, 42, 83, 73, 48, 60];
  var av = new JSAV(av_name);
  // Create an array object under control of JSAV library
  var arr = av.ds.array(theArray, {indexed: true});

  // Slide 1
  //av.umsg(interpret("av_c1"));
  commentsQueue.push(comments["av_c1"]);
  arr.addClass(9, "processing");
  av.displayInit();

  // Slide 2
  arr.removeClass(9, "processing");
  arr.setLeftArrow(0);
  arr.setRightArrow(8);
  //av.umsg(interpret("av_c2"));
  commentsQueue.push(comments["av_c2"]);
  av.step();

  // Slide 3
  //av.umsg(interpret("av_c3"));
  commentsQueue.push(comments["av_c3"]);
  av.step();

  // Slide 4
  //av.umsg(interpret("av_c4"));
  commentsQueue.push(comments["av_c4"]);
  av.step();

  // Slide 5
  arr.swap(0, 8);
  //av.umsg(interpret("av_c5"));
  commentsQueue.push(comments["av_c5"]);
  av.step();

  // Slide 6
  //av.umsg(interpret("av_c6"));
  commentsQueue.push(comments["av_c6"]);
  av.step();

  // Slide 7
  //av.umsg(interpret("av_c7"));
  commentsQueue.push(comments["av_c7"]);
  arr.clearLeftArrow(0);
  arr.setLeftArrow(1);
  av.step();

  // Slide 8
  //av.umsg(interpret("av_c7"));
  commentsQueue.push(comments["av_c7"]);
  arr.clearLeftArrow(1);
  arr.setLeftArrow(2);
  av.step();

  // Slide 9
  arr.clearLeftArrow(2);
  arr.setLeftArrow(3);
  //av.umsg(interpret("av_c8"));
  commentsQueue.push(comments["av_c8"]);
  av.step();

  // Slide 10
  //av.umsg(interpret("av_c9"));
  commentsQueue.push(comments["av_c9"]);
  av.step();

  // Slide 11
  //av.umsg(interpret("av_c7"));
  commentsQueue.push(comments["av_c7"]);
  arr.clearRightArrow(8);
  arr.setRightArrow(7);
  av.step();

  // Slide 12
  //av.umsg(interpret("av_c7"));
  commentsQueue.push(comments["av_c7"]);
  arr.clearRightArrow(7);
  arr.setRightArrow(6);
  av.step();

  // Slide 13
  arr.clearRightArrow(6);
  arr.setRightArrow(5);
  //av.umsg(interpret("av_c10"));
  commentsQueue.push(comments["av_c10"]);
  av.step();

  // Slide 14
  //av.umsg(interpret("av_c11"));
  commentsQueue.push(comments["av_c11"]);
  arr.swap(3, 5);
  av.step();

  // Slide 15
  //av.umsg(interpret("av_c12"));
  commentsQueue.push(comments["av_c12"]);
  av.step();

  // Slide 16
  arr.clearLeftArrow(3);
  arr.setLeftArrow(4);
  //av.umsg(interpret("av_c13"));
  commentsQueue.push(comments["av_c13"]);
  av.step();

  // Slide 17
  //av.umsg(interpret("av_c14"));
  commentsQueue.push(comments["av_c14"]);
  av.step();

  // Slide 18
  //av.umsg(interpret("av_c7"));
  commentsQueue.push(comments["av_c7"]);
  arr.clearRightArrow(5);
  arr.setRightArrow(4);
  av.step();

  // Slide 19
  arr.clearRightArrow(4);
  arr.setRightArrow(3);
  //av.umsg(interpret("av_c15"));
  commentsQueue.push(comments["av_c15"]);
  av.step();

  // Slide 20
  //av.umsg(interpret("av_c16"));
  commentsQueue.push(comments["av_c16"]);
  av.recorded();
});

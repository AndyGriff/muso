/*
 * muso
 * https://github.com/AndyGriff/muso
 *
 * Copyright (c) 2013 Andy Griffiths
 * Licensed under the MIT license.
 */

'use strict';
var _ = require('underscore');

exports.notes = function() {
  var allNotes=new Array("C","C#","D","D#","E","F","F#","G","G#","A","A#","B");
  return allNotes;
};
exports.keys = function() {
  //start with an ordered array of ints representing the chromatic scale
  var chromaticScale=new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

  //multiply each element in the array by 7
  var transformed = _.map(chromaticScale, function(num){ return num * 7; });

  // apply a modulo 12 reduction
  var chromaticKeys = _.map(transformed, function(num){ return num % 12; });
  
  // get the chromatic notes
  var notes = this.notes();
  var allKeys = _.map(chromaticKeys, function(num){ return notes[num]; });

  return allKeys;
};

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
exports.enharmonic = function(note) {
	
  // pretty agricultural here, work out if it's a sharp or a flat
  var sharps=new Array("C#","D#","F#","G#","A#");
  var flats=new Array("Db","Eb","Gb","Ab","Bb");
  var returnNote = note;
  
  if (_.some(sharps,function(sharpNote){ return sharpNote == note; }))
  {
	//shurely some way to make this better
    // this is a sharp, so look it up in the flats array
    var index = _.indexOf(sharps, note);
	returnNote = flats[index];
  }
  else if (_.some(flats,function(flatNote){ return flatNote == note; }))
  {
    // this is a flat, so look it up in the flats array
    var index = _.indexOf(flats, note);
	returnNote = sharps[index];
  }
  return returnNote;
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
exports.major = function(key) {
  //get the major scale
 
  //start with an ordered array of ints representing the major scale sequence (WWHWWWH)
  var majorScale=new Array(0, 2, 4, 5, 7, 9, 11);

  // get the chromatic notes
  var notes = this.notes();

  // What note do we start on?
  var startIndex = _.indexOf(notes,key)

  console.log("startIndex is " + startIndex);
  // Is this a valid key?
  if (startIndex == -1)
     return undefined;

  // otherwise, just use this index to offset our major scale sequence
  var allNotes = _.map(majorScale, function(num){ var idx = (num + startIndex) % 12; return notes[idx]; });
  return allNotes;
};

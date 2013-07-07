'use strict';

var muso = require('../lib/muso.js');
var _ = require('underscore');

exports['notes'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'correctly matches array of notes': function(notes) {
    notes.expect(1);
    // tests here
    var allNotes=new Array("C","C#","D","D#","E","F","F#","G","G#","A","A#","B");
    notes.deepEqual(muso.notes(), allNotes,'notes are incorrect');
    notes.done();
  }
};

exports['keys'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'correctly gives all keys': function(keys) {
    keys.expect(1);
    // tests here
    var allKeys=new Array("C", "G", "D", "A", "E", "B", "F#", "C#","G#", "D#", "A#", "F");
    keys.deepEqual(muso.keys(), allKeys,'keys are incorrect');
    keys.done();
  }
};
exports['enharmonic'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'correctly gives enharmonic equivalents': function(enharmonic) {
    enharmonic.expect(1);

    // tests here
    var expectedNotes=new Array("C#","D#","F#","G#","A#","Db","Eb","Gb","Ab","Bb","A","C");

    var notesToTest=new Array("Db","Eb","Gb","Ab","Bb","C#","D#","F#","G#","A#","A","C");

    var actualNotes = _.map(notesToTest, function(note){ return muso.enharmonic(note); });
    enharmonic.deepEqual(actualNotes, expectedNotes,'enharmonic notes are incorrect');
    enharmonic.done();
  }
};
exports['scale'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'correctly gives major scale notes': function(scale) {
    scale.expect(2);

    // tests here

    // G MAJOR
    var gExpectedNotes=new Array("G","A","B","C","D","E","F#");
	var gKey = "G";

    var gScale = muso.major(gKey);
    scale.deepEqual(gScale, gExpectedNotes,'G Major scale is incorrect');
	
    // C MAJOR
    var cExpectedNotes=new Array("C","D","E","F","G","A","B");
	var cKey = "C";

    var cScale = muso.major(cKey);
    scale.deepEqual(cScale, cExpectedNotes,'C Major scale is incorrect');


    scale.done();
  }
};
exports['chords'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'correctly gives chords for a key': function(chords) {
    chords.expect(2);


    chords.done();
  }
};


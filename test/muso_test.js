'use strict';

var muso = require('../lib/muso.js');

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

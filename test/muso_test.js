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
    var allNotes=new Array("A","A#","B","C","C#","D","D#","E","F","F#","G","G#");
    notes.deepEqual(muso.notes(), allNotes,'notes are incorrect');
    notes.done();
  },
};

import Jasmine from 'jasmine';

const jasmine = new Jasmine();

// Add a custom reporter to log results for each describe block
jasmine.addReporter({
    jasmineStarted: function() {
        console.log('Jasmine tests started');
    },
    suiteStarted: function(result) {
        console.log(`Suite started: ${result.description}`);
    },
    specDone: function(result) {
        console.log(`Spec: ${result.description} - ${result.status}`);
    },
    suiteDone: function(result) {
        console.log(`Suite finished: ${result.description}`);
    },
    jasmineDone: function() {
        console.log('Jasmine tests finished');
    }
});

jasmine.loadConfigFile('spec/support/jasmine.mjs');
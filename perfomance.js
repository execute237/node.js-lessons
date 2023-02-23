const perf_hooks = require('perf_hooks');

testWithoutMark = perf_hooks.performance.timerify(testWithoutMark); // perfomace без .mark

const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    console.log(items.getEntries());
    const entry = items.getEntriesByName('slow').pop();
    console.log(`${entry.name}: ${entry.duration}`);
    observer.disconnect();
});

performanceObserver.observe({entryTypes : ['measure', 'function']});

function testWithoutMark () {
    const arr = [];
    for(let i = 0; i < 10000000; i++){
        arr.push(i*i);
    }
}

function slow () {
    performance.mark('start'); // отметка с именем 
    const arr = [];
    for(let i = 0; i < 10000000; i++){
        arr.push(i*i);
    }
    performance.mark('end')
    performance.measure('slow', 'start', 'end');
}
testWithoutMark();
slow();
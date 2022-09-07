import async from "async";

// create a queue object with concurrency 2
var q = async.queue(function(task, callback) {
    console.log('Hello ' + task.name);
    callback();
  }, 2);
  
  // assign a callback
  q.drain(() => {
    console.log('Successfully processed all items');
})
  
  // add some items to the queue
  q.push({name: 'foo'}, function(err) {
    console.log('Finished processing foo');
  });
  
  q.push({name: 'bar'}, function (err) {
    console.log('Finished processing bar');
  });
  
  // add some items to the queue (batch-wise)
  q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
    console.log('Finished processing item');
  });
  
  // add some items to the front of the queue
  q.unshift({name: 'bar'}, function (err) {
    console.log('Finished processing bar');
  });
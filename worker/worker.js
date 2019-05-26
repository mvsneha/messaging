onmessage = event => {
  console.log(`message from index: ${event.data}`);
  postMessage('From Worker');
}

/*
addEventListener('message', event => {
  console.log(`message from index: ${event.data}`);
  event.ports[0].postMessage('From worker')
}, false);

addEventListener('error', event => {
  console.log(event.message)
}, false);*/

//soal 5 
function delayedMessage(message, delay) {
    setTimeout(() => console.log(message), delay);
  }
  
  console.log(delayedMessage("Hello after delay", 2000));
  
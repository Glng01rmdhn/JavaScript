//soal 4 

function performTasks() {
    console.log("tugas 1");
    setTimeout(() => {
      console.log("tugas 2");
      setTimeout(() => {
        console.log("tugas 3");
      }, 1000);
    }, 3000);
  }
  
  performTasks();
  
const customFetch = (back, time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (back) { 
        resolve(task);
      } else {
        reject("Error")
      }
    }, time);
  });
}
export default customFetch;
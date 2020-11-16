module.exports =  (response, key) => {
  // let item;
  // if (localStorage.getItem(key) === null) {
  //   item = [];
  // } else {
  //   item = JSON.parse(localStorage.getItem(key));
  // }

  // item.push(response);
  // localStorage.removeItem(key)
  localStorage.setItem(key, JSON.stringify(response))
};
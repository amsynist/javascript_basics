const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

setInterval(() => {
  let myDate = new Date();
  let hour = myDate.getHours();

  let min = myDate.getMinutes();
  let seconds = myDate.getSeconds();
  let date = myDate.toLocaleDateString(undefined, options);
  let time = hour + ':' + min + ':' + seconds;
  document.getElementById('click').innerHTML = time + ' <br>on ' + date;
}, 1000);

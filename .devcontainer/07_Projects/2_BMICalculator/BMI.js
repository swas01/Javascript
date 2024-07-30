 
```
 ##Project 2
```
 
 const form = document.querySelector('form');

//this usecase will give you empty value
//const height = parseInt(document.querySelector('height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault(); //dont submit default value

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  if (weight <= 18.6) {
    results.innerHTML = `you are under weight ${weight}`;
  } else if (weight >= 24.9) {
    results.innerHTML = `you are over weight ${weight}`;
  } else {
    results.innerHTML = `you are in normal range`;
  }
});




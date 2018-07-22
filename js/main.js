let state = {
  data: [],
};
console.log("did this work?")
function doFetch() {
  let element = document.querySelector('#input');
  let inputTerm = element.value;
  fetch('https://ghibliapi.herokuapp.com/films/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setState({data: data.data});
    let output = document.querySelector('#movie_output');
    output.innerHTML = '';

    for (let info of state.data) {
      console.log(${data.data.title});

    }
  })
  };

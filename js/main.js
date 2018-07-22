function render(){

}
function addElement(image, text){
  let content = d.getElementById("#result");
  let element = d.createElement('div');
  let paragraph = d.createElement('p');
  let img = d.createElement('img');

  img.src = image;
  element.classList.add('Card');
  paragraph.classList.add('content');
  paragraph.textContent = text;

  element.appendChild(img);
  element.appendChild(paragraph);
  content.appendChild(element); 
}

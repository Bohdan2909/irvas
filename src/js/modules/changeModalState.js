import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => { 
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');
   
  checkNumInputs('#width');
  checkNumInputs('#height');

function bindActionToElems (event, elem, prop) {
  elem.forEach((item, i) => {
    item.addEventListener(event, () => {
      switch(item.nodeName) {
        case 'SPAN' :
          state[prop] = 1;
          break;
        case 'INPUT' :
          if (item.getAttribute('type') === 'checkbox'){
            i === 0 ? state[prop] = 'Холодне' : state[prop] = 'Тепле';
            elem.forEach((box, j) => {
              box.checked = false;
              if (i === j){
                box.checked = true;
              }
            });
          }else {
            state[prop] = item.value;
          }
          break;
        case 'SELECT' :
            state[prop] = item.value;
          break;
      }
    });
  });
}
bindActionToElems('click',windowForm, 'form');
bindActionToElems('input', windowWidth, 'width');
bindActionToElems('input', windowHeight, 'height');
bindActionToElems('change', windowType, 'type');
bindActionToElems('change', windowProfile, 'profile');


 };



 export default changeModalState;
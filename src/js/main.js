import './slider';
import tabs from './modules/tabs';
import modals from './modules/modals';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';



window.addEventListener('DOMContentLoaded', () => {

  let modalState = {};
  let deadline = '2022-08-29';

  modals();
  tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more' , 'inline-block');
  forms(modalState);
  changeModalState(modalState);
  timer('.container1', deadline);
  images();
});


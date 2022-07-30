const images = () => { 
  const imgPopup = document.createElement('div');
  const workSection = document.querySelector('.works');
  const bigImage = document.createElement('img');

imgPopup.classList.add('popup');
workSection.append(imgPopup);
imgPopup.style.cssText ="justify-content: center";"align-items: center";"display: none";

imgPopup.append(bigImage);


workSection.addEventListener('click', function (e) {
  e.preventDefault();
  const target = e.target;
  if(target && target.classList.contains('preview')){
    imgPopup.style.display = 'flex';
    const path = target.parentNode.getAttribute('href');
    bigImage.setAttribute('src', path);
  }
  if(target && target.matches('div.popup')){
    imgPopup.style.display = 'none';
  }
});
 };


 export default images;
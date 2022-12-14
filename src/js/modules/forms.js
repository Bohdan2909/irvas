import checkNumInputs from "./checkNumInputs";



const forms = (state) => { 
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
  
        // phoneInputs = document.querySelectorAll('input[name="user_phone"]');

checkNumInputs('input[name="user_phone"]');
  // phoneInputs.forEach(item => {
  //   item.addEventListener('input', () => {
  //     item.value = item.value.replace(/\D/, '');
  //   });
  // });
  const message = {
    loading: 'Загрузка...',
    success: 'Дякуємо, скоро ми з вами звяжемось!',
    failru: 'Щось пішло не так...'
  };

  const postData = async (url, data) => { 
      document.querySelector('.status').textContent = message.loading;

      let res = await fetch(url, {
        method: "POST",
        body: data
      });
      return await res.text();
   };
  const clearInputs = () => { 
      inputs.forEach((input) => {
        input.value = '';
      });
   };

  form.forEach(item => {
    item.addEventListener('submit', function (e) {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
       item.appendChild(statusMessage);


       const formData = new FormData(item);
        if (item.getAttribute('data-calc') === 'end'){
          for (let key in state){
            formData.append(key, state[key]);
          }
        }
       postData('assets/server.php', formData)
        .then(res =>  {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => statusMessage.textContent = message.failru)
        .finally(() => {
            clearInputs();
            setTimeout(() => { 
              statusMessage.classList.remove('status');
             }, 5000);
        });

    });
  });
 };


 export default forms;
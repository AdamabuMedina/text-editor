var editBtn = document.getElementsByClassName('redactor');
var saveBtn = document.getElementsByClassName('save');
var editBtn = document.getElementsByClassName('redactor');
var editables = document.querySelectorAll('#title, #author, #content')

editBtn.addEventListener('click', function (e) {
   if (!editables[0].isContentEditable) {
      editables[0].contentEditable = 'true';
      editables[1].contentEditable = 'true';
      editables[2].contentEditable = 'true';
      saveBtn.addEventListener("click", function () {
         saveBtn.removeAttr(disabled);
      }) = 'Save Changes';
   } else {
      // выключаем режим редактирования
      editables[0].contentEditable = 'false';
      editables[1].contentEditable = 'false';
      editables[2].contentEditable = 'false';
      // изменяем текст и цвет кнопки
      saveBtn.innerHTML = 'Enable Editing';
      // сохраняем данные в localStorage
      for (var i = 0; i < editables.length; i++) {
         localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
      }
   }
});
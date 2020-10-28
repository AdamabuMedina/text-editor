if (localStorage.getItem("text-in-editor") !== null) {
   document.getElementById("editor").innerHTML = localStorage.getItem("text-in-editor")
}

document.addEventListener('keydown', function (e) {
   localStorage.setItem('text_in_editor', document.getElementById('editor').innerHTML);
});
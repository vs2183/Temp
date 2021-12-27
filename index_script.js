function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("txt");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    var image = document.getElementById('btn');
    image.style.width = '50px';
    image.style.height = '50px';
    
}
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("txt1");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    var image = document.getElementById('btn1');
    image.style.width = '50px';
    image.style.height = '50px';
    
}

// wait for the DOM to completely load
document.addEventListener('DOMContentLoaded', function() {
    // grab the #translate-btn
    const speechBtn = document.getElementById('speech-btn');
  
    // attach an 'click' eventListener to #translate-btn
    speechBtn.addEventListener('click', function() {
      const word = window.getSelection().toString();
      function WriteToFile()
            { 
                var txt = new ActiveXObject("Scripting.FileSystemObject");
                var s = txt.CreateTextFile("Output.txt", true);
                s.WriteLine(word);
                s.Close();
            }
      });
    });
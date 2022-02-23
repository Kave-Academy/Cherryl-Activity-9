//Using Click button
function run() {

    let highLight = document.getElementsByTagName('strong');
  
    for (let i = 0; i < highLight.length; i++) {
        highLight[i].style.backgroundColor = "yellow";
       }
      }


//Using mouse Over link and Mouse Out link
function mouseOver() {

    let highLight = document.getElementsByTagName('strong');
  
    for (let i = 0; i < highLight.length; i++) {
        highLight[i].style.backgroundColor = "yellow";

   
       }
    }


    function mouseOut() {

        let highLight = document.getElementsByTagName('strong');
      
        for (let i = 0; i < highLight.length; i++) {
            highLight[i].style.backgroundColor = "";
    
       
           }
        }




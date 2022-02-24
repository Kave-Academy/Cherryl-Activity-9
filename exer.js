
//Using mouse Over link and Mouse Out link
function mouseOver() {

    let highLight = document.getElementsByTagName('strong');
  
    for (let i = 0; i < highLight.length; i++) {
        highLight[i].style.backgroundColor = "#017141";

   
       }
    }

//Using Mouse Out link
    function mouseOut() {

        let highLight = document.getElementsByTagName('strong');
      
        for (let i = 0; i < highLight.length; i++) {
            highLight[i].style.backgroundColor = "";
    
       
           }
        }




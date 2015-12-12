window.onload = function () {

   var heroImage = document.getElementById('hero'); 
  
    var imageElement = document.getElementById('thumbImage');
    var imageList = imageElement.getElementsByTagName('img');
     
   // console.log(imageList);
    for(var i = 0; i < imageList.length; i++){
     // console.log(imageList[i])
      
      imageList[i].onclick = function(evt) {
        //var hero = this;
   // console.log(hero);
        //heroImage = hero;
        var alt = evt.srcElement.getAttribute('alt');
        var src = evt.srcElement.getAttribute('src');
        console.log(alt, src);
        heroImage.setAttribute('src', src);
        heroImage.setAttribute('alt', alt);
      }    
   
    }
    i = 0;
    heroImage.onclick = function(evt) {

      // i = 0;
      // heroImage.setAttribute('src',imageList[i].srcElement.getAttribute('src'));
     /* for(var i = 0; i < imageList.length; i++){
          var img-item = imageList[i];
           var src = img-item.srcElement.getAttribute('src');
           console.log(src);
      }*/
      
      var src = imageList[i].getAttribute('src');
      heroImage.setAttribute('src', src);
      i++;
      if (i > imageList.length) {
        i = 0
        
      }
      console.log(i);
    }

}
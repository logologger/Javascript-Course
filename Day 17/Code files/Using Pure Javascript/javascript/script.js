
         function bindHTML(event){

           console.log(event.target.value);
           var length_binder=document.getElementsByTagName("span").length;





           for(var i=0;i<length_binder;i++){

          document.getElementsByTagName("span")[i].innerHTML=event.target.value;//ng-bind
       }

         }

     const button      = document.getElementById('on_click_img');
        const img      = document.getElementById('click');
       
        let on_off     = false;
        let isClicking = false; 
        
        button.addEventListener('click', function() {
         
       
            if(on_off){
              
               img.style.top       = '-60px';
               img.style.width     = '100%';
               img.style.height    = '200px';
               img.style.objectFit = 'cover';
               img.style.display   = 'block'; 
               img.style.position  = 'relative'; 
               img.style.zIndex    = '1'; 
               on_off              = false;
               img.src             = "https://github.com/user-attachments/assets/04bb6aa9-2692-46ab-ade3-253c930354d1";
             
            }else{
                
                img.style.height     = '950px';
                img.style.width      = '100%';
                img.style.top        = '-660px';
                img.style.objectFit  = 'cover';
                img.style.display    = 'block'; 
                img.style.position   = 'relative'; 
                img.style.zIndex     = '1'; 
                on_off               = true;
                img.src              = "https://github.com/user-attachments/assets/37ade96d-4aaa-4682-80ac-a321bfba7e37"; 
              
            }
              button.disabled=true;
                /// 이쁘게 정리해 봤어요 ^^
            setTimeout(function() {
                button.disabled = false;
               }, 500);

            
        });

       

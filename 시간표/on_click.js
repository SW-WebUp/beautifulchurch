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
               img.src             = "https://github.com/user-attachments/assets/cef706ce-703f-4b49-8999-f23807fb5940";
             
            }else{
                
                img.style.height     = '950px';
                img.style.width      = '100%';
                img.style.top        = '-660px';
                img.style.objectFit  = 'cover';
                img.style.display    = 'block'; 
                img.style.position   = 'relative'; 
                img.style.zIndex     = '1'; 
                on_off               = true;
                img.src              = "https://github.com/user-attachments/assets/085a2976-e073-4555-8152-d51a8aac68fd"; 
              
            }
              button.disabled=true;
                /// 이쁘게 정리해 봤어요 ^^
            setTimeout(function() {
                button.disabled = false;
               }, 500);

            
        });

       

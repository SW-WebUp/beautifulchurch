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
               img.src             = "https://github.com/user-attachments/assets/5591b8ed-1237-443b-bb46-ecaabddc7a66"; // 클릭 했을때 작게 보이게 하는 것
             
            }else{
                
                img.style.height     = '950px';
                img.style.width      = '100%';
                img.style.top        = '-495px';
                img.style.objectFit  = 'cover';
                img.style.display    = 'block'; 
                img.style.position   = 'relative'; 
                img.style.zIndex     = '1'; 
                on_off               = true;
                img.src              = "https://github.com/user-attachments/assets/ecdd7853-366f-4c79-88fa-d99c2b4f57b2";  // 클릭 했을때 크게 보이게 하는 것
              
            }
              button.disabled=true;
                /// 이쁘게 정리해 봤어요 ^^
            setTimeout(function() {
                button.disabled = false;
               }, 500);

            
        });

       

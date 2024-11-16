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
               img.src             = "https://github.com/user-attachments/assets/5500eeb6-ddb3-4a9d-a986-c37dbeb33622"; // 클릭 했을때 작게 보이게 하는 것
             
            }else{
                
                img.style.height     = '950px';
                img.style.width      = '100%';
                img.style.top        = '-495px';
                img.style.objectFit  = 'cover';
                img.style.display    = 'block'; 
                img.style.position   = 'relative'; 
                img.style.zIndex     = '1'; 
                on_off               = true;
                img.src              = "https://github.com/user-attachments/assets/73a7f698-631f-4b37-ba18-3eb14f5fd823";  // 클릭 했을때 크게 보이게 하는 것
              
            }
              button.disabled=true;
                /// 이쁘게 정리해 봤어요 ^^
            setTimeout(function() {
                button.disabled = false;
               }, 500);

            
        });

       


    var user_key = sessionStorage.getItem("user");
    var video_video = document.getElementById("video_video");   // Video Tag Global Varaible
    var play_pause_icon = document.getElementById("play_pause_icon");   //Play Pause Icon Global Variable
      
        //  When You Click On Play Icon 
        play_pause_icon.onclick =
            function(){
                if(play_pause_icon.className == "fas fa-play-circle"){
                    video_video.play();
                    play_pause_icon.className= "fas fa-pause-circle";
                }

                else if(play_pause_icon.className == "fas fa-pause-circle"){
                    video_video.pause();
                    play_pause_icon.className= "fas fa-play-circle"; 
                }
            }

        //  Auto Matic When Video Play Progress Bar & Timing Show
        video_video.ontimeupdate =
            function(){
                var result_tag = document.getElementById("time_tag_P"); //Jisme Time Hoga P Tag
                var current_time = this.currentTime;    //Current Time ya Duration 
                var total_time = this.duration;     //Total Time ya Duration
                var current_minute = parseInt(current_time/60);     //Current Time Ka Minute
                var current_sec = current_time - current_minute*60;     //Current Time Ka Second
                var total_minute = parseInt(total_time/60);
                var total_second = total_time - total_minute*60;


                result_tag.innerHTML= current_minute+ ":" + parseInt(current_sec) + " / " + total_minute+":" + parseInt(total_second);

                // Progress Bar JS Coding Started Here
                var persenteg_for_bar = current_time*100/total_time;    //For Progress Bar For Value in (%)
                var progres_bar = document.getElementById("progres_bar");   //Progress Bar Div
                    progres_bar.style.width= persenteg_for_bar+"%"; 


                    if(current_time == total_time){
                        play_pause_icon.className= "fas fa-play-circle";
                    }
                    
            }

        //Progress Box With Oninput Coding
            var progress_box = document.getElementById("progres_box");
                progress_box.onclick =
                    function(event){
                        var persenteg_width = event.offsetX/this.offsetWidth;
                            
                            this.style.cursor= "pointer";
                            video_video.currentTime= persenteg_width*video_video.duration;
                    }


        //Playlist Coding Started Here
        var add_video_box_icon = document.getElementById("add_video_box_icon");
            add_video_box_icon.onclick =
                function(){
                    var add_video_box = document.getElementById("add_video_box");

                    if(this.className == "fas fa-plus-circle"){
                        add_video_box.style.display= "block";
                        this.className= "fas fa-times-circle";
                        this.style.color= "red";
                    }

                    else if(this.className == "fas fa-times-circle"){
                        add_video_box.style.display= "none";
                        this.className= "fas fa-plus-circle";
                        this.style.color= "purple";
                    }
                }

                function player_container_fun(){
                    var add_video_box = document.getElementById("add_video_box");
                        add_video_box.style.display= "none";
                        add_video_box_icon.className = "fas fa-plus-circle";
                        add_video_box_icon.style.color= "purple";
                }


        //Video Add Karne Wale Inputs
        var add_video_frm = document.getElementById("add_video_frm");
            add_video_frm.onsubmit =
                function(){
                    var add_vdo_name_input = document.getElementById("add_vdo_name_input");
                    var add_vdo_url_input = document.getElementById("add_vdo_url_input");
                    var add_vdo_object = {name:add_vdo_name_input.value,link:add_vdo_url_input.value};
                    var add_vdo_object_json = JSON.stringify(add_vdo_object);
                    
                        if(add_vdo_name_input.value == "" || add_vdo_url_input.value == ""){
                            
                            return false;
                        }

                        else{
                            localStorage.setItem(user_key+"_video"+add_vdo_name_input.value,add_vdo_object_json);
                        }
                }

        //Dynamacly Video Show
        function dynamacly_vdo_show(){
            var i;
                for(i=0;i<localStorage.length;i++){
                    var all_key = localStorage.key(i);
                    if(all_key.match(user_key+"_video")){
                        var obj_data_key = localStorage.getItem(all_key);
                        var obj_data_key_json = JSON.parse(obj_data_key);

                        //Dynamic Play & Delet Box Coding Started Here
                            var dynamic_vdo_box = document.createElement("DIV");
                                dynamic_vdo_box.setAttribute("id","dynamic_vdo_box");

                            var p_vdo_name = document.createElement("P");
                                p_vdo_name.setAttribute("id","dynamic_vdo_box_p");
                                p_vdo_name.setAttribute("class","dynamic_vdo_p");
                                p_vdo_name.innerHTML= obj_data_key_json.name;

                            var play_btn = document.createElement("BUTTON");
                                play_btn.setAttribute("type","button");
                                play_btn.setAttribute("id","play_btn");
                                play_btn.setAttribute("class","vido_play_btn");
                                play_btn.innerHTML= "Play";

                            var delet_btn = document.createElement("BUTTON");
                                delet_btn.setAttribute("type","button");
                                delet_btn.setAttribute("id","delet_btn");
                                delet_btn.innerHTML= "Delet";
                                delet_btn.setAttribute("class","vdo_delet_btn");

                                dynamic_vdo_box.appendChild(p_vdo_name);
                                dynamic_vdo_box.appendChild(play_btn);
                                dynamic_vdo_box.appendChild(delet_btn);

                            var playlist_bottom_box = document.getElementById("playlist_bottom_box");
                                playlist_bottom_box.appendChild(dynamic_vdo_box);

                        //Dynamic Play & Delet Box Coding Ended Here

                        
                    }
                }
        }

        dynamacly_vdo_show();   //Window Onload Hote Hi Excute Hona

        //PlayList Play Button Coding (Local Storage Se Play Karna)
        function Play_function(){
            var vido_play_btn = document.getElementsByClassName("vido_play_btn");
            var i;
                for(i=0;i<vido_play_btn.length;i++){
                    vido_play_btn[i].onclick = function(){
                        var parent = this.parentElement;
                        var parent_p = parent.getElementsByTagName("P");
                        var obj_data_playbtn = localStorage.getItem(user_key+"_video"+parent_p[0].innerHTML)
                        var obj_data_playbtn_json = JSON.parse(obj_data_playbtn);
                        var saurse = document.getElementById("saurse");
                        var speed_show_box = document.getElementById("spedd_show_box");
    
                                Play_function_play_innerhtml();

                                speed_show_box.style.display= "none";
                                saurse.setAttribute("src",obj_data_playbtn_json.link);
                                video_video.load();
                                video_video.play();
                                play_pause_icon.className = "fas fa-pause-circle"
                                this.innerHTML= "Playing...";
                                this.style.backgroundColor= "blue";

                    }
                }
            }

        Play_function();

            function Play_function_play_innerhtml(){
                var vido_play_btn = document.getElementsByClassName("vido_play_btn");
                var i;
                    for(i=0;i<vido_play_btn.length;i++){
                        vido_play_btn[i].innerHTML= "Play";
                        vido_play_btn[i].style.backgroundColor= "#4285f4";
                    }
            }


        //Search Bar Coding Started Here
        var search_input = document.getElementById("search_input");
        search_input.oninput = 
            function(){
                var dynamic_vdo_p = document.getElementsByClassName("dynamic_vdo_p");
                var i;
                    for(i=0;i<dynamic_vdo_p.length;i++){
                        if(dynamic_vdo_p[i].innerHTML.toUpperCase().match(search_input.value.toUpperCase())){
                            var parent = dynamic_vdo_p[i].parentElement;
                            parent.style.display= "block";
                        }

                        else{
                            var parent = dynamic_vdo_p[i].parentElement;
                            parent.style.display= "none";
                        }
                    }

                    
            }


            function next_pre_btn_function(){
                var next_btn = document.getElementById("right_change_btn");
                var previous_btn = document.getElementById("left_change_btn");

                     //Next Playing Button Coding Started Here
                     previous_btn.onclick =
                        function(){
                            this.style.color= "rgb(2, 188, 244)";

                            setTimeout(function(){previous_btn.style.color= "white";},150);


                            var all_play_btn = document.getElementsByClassName("vido_play_btn");
                            var i;
                                for(i=0;i<all_play_btn.length;i++){

                                        if(all_play_btn[i].innerHTML == "Playing..."){
                                            var parent = all_play_btn[i].parentElement.previousSibling;
                                            var previous_btn_tag = parent.getElementsByTagName("BUTTON")[0];
                                                previous_btn_tag.click();
                                                return false;
                                        }
                                }
                        }


                    //Next Playing Button Coding Started Here
                    next_btn.onclick =
                        function(){
                            this.style.color= "rgb(2, 188, 244)";

                            setTimeout(function(){next_btn.style.color= "white";},150);

                            var all_play_btn = document.getElementsByClassName("vido_play_btn");
                            var i;
                                for(i=0;i<all_play_btn.length;i++){

                                        if(all_play_btn[i].innerHTML == "Playing..."){
                                            var parent = all_play_btn[i].parentElement.nextSibling;
                                            var next_btn_tag = parent.getElementsByTagName("BUTTON")[0];
                                                next_btn_tag.click();
                                                return false;
                                        }
                                }
                        }
                    
            }
    
            next_pre_btn_function()


            //Volume Slider & Volume Icon Onclick 
            function volume_function(){
                var volume_icon = document.getElementById("volume_icon");
                var volume_slider = document.getElementById("volume_slider");
                    volume_icon.onclick =
                        function(){
                            
                                
                                if(volume_slider.style.display == "none"){
                                    volume_slider.style.display= "block";
                                    
                                }

                                else{
                                    volume_slider.style.display= "none";
                                    
                                }
                        }

                        volume_slider.oninput =
                            function(){
                                video_video.volume= this.value;
                                
                            }
                        
                        volume_slider.onmouseout =
                            function(){
                                this.style.display= "none";
                            }    


            }
    
            volume_function();

            var speed_icon = document.getElementById("speed_icon");
                speed_icon.onclick =
                    function(){
                        var speed_slider = document.getElementById("speed_slider");
                        var speed_show_box = document.getElementById("spedd_show_box");

                            if(speed_slider.style.display == "none"){
                                speed_slider.style.display= "block";

                                    speed_slider.oninput = function(event){
                                        video_video.playbackRate= this.value;
                                        speed_show_box.style.display= "block";
                                        speed_show_box.innerHTML= "Speed"+ " "+this.value+"x";
                                    }

                                    speed_slider.onmouseout =
                                        function(){
                                            this.style.display= "none";
                                            if(speed_show_box.innerHTML != "Speed 1x" && speed_show_box.style.display == "block"){
                                                speed_show_box.style.display= "block";
                                            }

                                            else{
                                                speed_show_box.style.display= "none";
                                            }
                                        }
                            }

                            else{
                                speed_slider.style.display= "none";
                            }

                            

                                
                            

                    }



            //Full Screen Function Coding Started Here
            function Full_Screen_fun(){
                var full_screen_icon = document.getElementById("full_screen_icon");
                    full_screen_icon.onclick = 
                    function(){
                        
                            video_video.requestFullscreen();
                        }
            }

            Full_Screen_fun();

        //Delet PlayList Button Coding (Local Storage Se Delet Karna)
        function delet_fun(){
            var vido_delet_btn = document.getElementsByClassName("vdo_delet_btn");
            var i;
                for(i=0;vido_delet_btn.length;i++){
                    vido_delet_btn[i].onclick = function(){
                        var parent = this.parentElement;
                        var parent_p = parent.getElementsByTagName("P");
                        
                        localStorage.removeItem(user_key+"_video"+parent_p[0].innerHTML);
                        parent.className= "animate__animated animate__bounceOut";

                        setTimeout(function(){parent.remove();},600);
                            
                    }
                }
        }

        delet_fun();

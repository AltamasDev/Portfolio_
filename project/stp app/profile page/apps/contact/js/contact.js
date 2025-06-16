

// Window Onload Hote hi Condition
    window.onload =
        function(){
            var user_key = sessionStorage.getItem("user");  //Session Storage Ki User Key Email

            //Condition ki agar Session Mojud N Ho To
            if(user_key == null){
                window.location.replace("../../../index.html");
            }

            // Agar Session Mojud Ho tab Sabhi Coding Else me
            else{

                //Jab Plus Wale Icon Par Click Ho coding Started Here
                var plus_add_icon = document.getElementById("plus_add_icon");   // Global
                    plus_add_icon.onclick =
                        function(){
                            var add_contact_main_box = document.getElementById("add_contact_main_box");
                                add_contact_main_box.style.display= "flex";
                                plus_add_icon.style.display= "none";

                                //Close BTN Coding Started Here
                                var close_btn = document.getElementById("close_btn");   //Not Global
                                var cont_name = document.getElementById("cont_name");
                                var cont_num = document.getElementById("cont_num");
                                    close_btn.onclick =
                                        function(){
                                            cont_name.value= "";
                                            cont_num.value= "";
                                            cont_name.style.border= "2px solid purple";
                                            cont_name.style.borderLeft= "5px solid purple";
                                            cont_num.style.border= "2px solid purple";
                                            cont_num.style.borderLeft= "5px solid purple";
                                            add_contact_main_box.style.display= "none";
                                            plus_add_icon.style.display= "block";
                                        }
                        }
                //Jab Plus Wale Icon Par Click Ho coding Ended Here


                var profile_pic = localStorage.getItem(user_key+"image");  // Global
                var profile_circle = document.getElementById("profile_cirle");  // Global
                var big_profile_circle = document.getElementById("big_profile_circle"); // Global
                var big_profile_box = document.getElementById("big_profile_box");   // Global


                        // Window Load Hote Hi Profile Wali Coding
                        profile_circle.style.backgroundImage= "url("+profile_pic+")";
                        profile_circle.style.backgroundSize= "cover";
                        big_profile_circle.style.backgroundImage= "url("+profile_pic+")";
                        big_profile_circle.style.backgroundSize= "cover";


                        //Jab Profile Circle pr Onclick Ho
                        profile_circle.onclick =
                            function(){
                                big_profile_box.style.display= "flex";
                            }
                        
                        
                        var profile_cross_icon = document.getElementById("profile_cross_icon"); //Global
                        
                        //Jab Big Profile Circle Ke Cross Pr Click Ho 
                            profile_cross_icon.onclick =
                                function(){
                                    big_profile_box.style.display= "none";
                                }

                var add_btn = document.getElementById("add_btn");   //Global

                    //Add BTN Coding Started Here
                    add_btn.onclick =
                        function(){
                            var cont_name = document.getElementById("cont_name");
                            var cont_num = document.getElementById("cont_num");

                            var data_object = {username:cont_name.value,number:cont_num.value};
                            var json_data = JSON.stringify(data_object);

                            //Add BTN pr Click ho If Condition
                                if(cont_name.value != "" && cont_num.value != ""){
                                    //add BTN pr Click Karke Data LocalStorage me Store Ho jaye
                                    localStorage.setItem(user_key+"_contact"+cont_name.value,json_data);
                                        
                                    

                                }


                                //Add BTN pr Click ho Else Condition
                                else{

                                    // Bina Input Bhare add BTN pr Click Ho Uske Baad
                                    if(cont_name.value == ""){
                                        cont_name.style.border= "2px solid red";
                                    }
                                    else{
                                        if(cont_num.value == ""){
                                            cont_num.style.border= "2px solid red";
                                        }
                                    }

                                    // Jab Input Box Red Ho Jaye
                                    cont_name.onclick =
                                        function(){
                                            cont_name.style.border= "2px solid purple";
                                            cont_name.style.borderLeft= "5px solid purple";
                                        }

                                    cont_num.onclick =
                                        function(){
                                            cont_num.style.border= "2px solid purple";
                                            cont_num.style.borderLeft= "5px solid purple";
                                        }

                                    return false;
                                }
                        }
                    //Add BTN Coding Ended Here
            }

            //Coding For Add Contact Data Dinamcly
            function all_add_contact(){

                //Loop for Dynamic 
                var i;
                for(i=0;i<localStorage.length;i++){
                    var all_key = localStorage.key(i);

                    //Matching Email + _Contact Key
                    if(all_key.match(user_key+"_contact")){
                        var json_txt = localStorage.getItem(all_key);   //JSON TEXT
                        var all_data = JSON.parse(json_txt);    //JSON TEXT To  Real Text

                            //Contact Div Coding Started Here Jisme Contact Show Honge

                                //All Item Selected Which Make A Box
                                var contact_box = document.createElement("DIV");
                                contact_box.setAttribute("id","all_contact_box_boxes");
                                var user_p = document.createElement("P");
                                user_p.setAttribute("class","contact_name");
                                var user_i = document.createElement("I");
                                user_i.setAttribute("class","fas fa-user");
                                var line = document.createElement("HR");
                                line.style.marginTop= "5px";
                                var number_p = document.createElement("P");
                                number_p.style.marginTop= "5px";
                                number_p.setAttribute("class","contact_number");
                                var number_i = document.createElement("I");
                                number_i.setAttribute("class","fas fa-mobile-alt");
                                var tool_box = document.createElement("DIV");
                                tool_box.setAttribute("id","tool");
                                var edit_i = document.createElement("I");
                                edit_i.setAttribute("class","fas fa-edit edit");
                                edit_i.setAttribute("id","edit_icon");
                                var delet_i = document.createElement("I");
                                delet_i.setAttribute("class","fas fa-trash del");
                                delet_i.setAttribute("id","delet_icon");

                                user_p.appendChild(user_i);
                                user_p.innerHTML += " "+all_data.username;

                                number_p.appendChild(number_i);
                                number_p.innerHTML += " "+all_data.number;

                                tool_box.appendChild(edit_i);
                                tool_box.appendChild(delet_i);

                                contact_box.appendChild(user_p);
                                contact_box.appendChild(line);
                                contact_box.appendChild(number_p);
                                contact_box.appendChild(tool_box);
                                

                                var all_contact_boxss = document.getElementById("all_contact_box");

                                    all_contact_boxss.appendChild(contact_box);
                            //Contact Div Coding Ended Here
                            
                    }
                }
            }

            all_add_contact();

            // Search Bar Search Functionality Coding Started Here
            var search_input = document.getElementById("search_input");

                search_input.oninput =
                    function(){
                        var all_contact_name = document.getElementsByClassName("contact_name");
                        var all_contact_number = document.getElementsByClassName("contact_number");
                        var i;

                            for(i=0;i<all_contact_name.length || i<all_contact_number.length;i++){
                                if(all_contact_name[i].innerHTML.toUpperCase().match(search_input.value.toUpperCase()) != null || all_contact_number[i].innerHTML.match(search_input.value) != null ){
                                 all_contact_name[i].parentElement.style.display= "flex";   
                                }

                                else{
                                    all_contact_name[i].parentElement.style.display= "none";
                                }
                            }
                    }

            //Contact Delet Coding Started Here
            function del_function(){
                var del = document.getElementsByClassName("del");
                var i;
                    for(i=0;i<del.length;i++){
                        del[i].onclick=function(){
                            var del_parent = this.parentElement.parentElement;
                            var p_ele = del_parent.getElementsByClassName("contact_name")[0];
                            var username_p = p_ele.innerHTML.replace('<i class="fas fa-user"></i>','');
                                
                                localStorage.removeItem(user_key+"_contact"+username_p.trim());
                                
                                del_parent.className= "animate__animated animate__bounceOut";

                                setTimeout(function(){del_parent.remove();},1000);
                        }
                    }
                }

            del_function();



            function edit_function(){
                var edit = document.getElementsByClassName("edit");
                var i;
                    for(i=0;i<edit.length;i++){
                        edit[i].onclick = function(){
                            var parent = this.parentElement.parentElement;
                            var parent_p = parent.getElementsByTagName("P");
                            var name = parent_p[0].innerHTML.replace('<i class="fas fa-user"></i>','').trim();
                            var number = parent_p[1].innerHTML.replace('<i class="fas fa-mobile-alt"></i>','').trim();
                            var cont_name = document.getElementById("cont_name");
                            var cont_num = document.getElementById("cont_num");
                            var close_btn = document.getElementById("close_btn");
                            
                                add_btn.innerHTML= "Update";
                                close_btn.style.display= "none";
                                cont_name.value= name;
                                cont_num.value= number;
                                plus_add_icon.click();

                                
                                localStorage.removeItem(user_key+"_contact"+name);
                                
                        }
                    }
            }

            edit_function();
        }
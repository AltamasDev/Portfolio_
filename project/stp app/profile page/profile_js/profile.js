
                var session_user_email = sessionStorage.getItem("user");
                var profile_container = document.getElementById("profile_container");
                var main_profile_container = document.getElementById("main_profile_container");
                var localstorage_pic = localStorage.getItem(session_user_email+"image");
                var Object_data = localStorage.getItem(session_user_email);
                var Object_data_text = JSON.parse(Object_data);
                    
                    if(session_user_email == null){
                        window.location.replace("../index.html");
                    }

                    else{
                        var profile_input = document.getElementById("profile_upload_input");
                            
                        // Profile me User Name Automatic By Object Variable
                        var profile_user_name = document.getElementById("profile_user_name");

                            profile_user_name.innerHTML= Object_data_text.username;
                        
                            profile_input.onchange =
                                function(){

                                    var reader = new FileReader();
                                    reader.readAsDataURL(profile_input.files[0]);

                                    reader.onload =
                                        function(){
                                            var filename = reader.result;   //picture URL Path
                                            var profile_circle = document.getElementById("profile_box");
                                            var profile_icon = document.getElementById("profile_icon");

                                                profile_icon.style.display= "none";
                                                profile_circle.style.backgroundImage= "url("+filename+")";
                                                profile_circle.style.backgroundSize= "cover";

                                                //file name mean's pic loacalStorage me save karna hai
                                                localStorage.setItem(session_user_email+"image",filename);


                                                    //Onchange hote hi Nexy BTN Acctivate ho jaye
                                                    var profile_next_btn = document.getElementById("profile_next_btn");

                                                    profile_next_btn.style.backgroundColor= "rgba(239, 42, 239, 0.937)";

                                                    //Next BTN Par Onclick Karne Par 
                                                    profile_next_btn.onclick =
                                                        function(){
                                                            
                                                                profile_container.style.display= "none";
                                                                main_profile_container.style.display= "block";
                                                                window.location.reload();
                                                        }

                                        }
                                }
                                
                                if(localstorage_pic != null){
                                    profile_container.style.display= "none";
                                    main_profile_container.style.display= "block";
                                }


                            // Logout BTN Coding 
                                var profile_logout_btn = document.getElementById("profile_logout_btn");

                                    profile_logout_btn.onclick =
                                        function(){
                                            sessionStorage.clear();
                                            window.location.replace("../index.html");
                                        }
                    }


                    //Main Profile Circle me automatic Pic aana or user name
                    var main_profile_circle = document.getElementById("main_profile_circle");
                    var main_profile_username = document.getElementById("main_profile_username");

                        if(Object_data_text.email != null){
                            main_profile_circle.style.backgroundImage= "url("+localstorage_pic+")";
                            main_profile_circle.style.backgroundSize= "cover";
                        }
                        main_profile_username.innerHTML= Object_data_text.username;



                    //Main Profile Logout BTN
                    var main_logout = document.getElementById("logout");
                    var main_profile_logout_text = document.getElementById("main_profile_logout_text");
                        main_logout.onclick =   
                            function(){
                                main_profile_logout_text.innerHTML= "Please Wait...";
                                setTimeout(function(){
                                    
                                    sessionStorage.clear();
                                    window.location.replace("../index.html");
                                },2000);
                            }
            
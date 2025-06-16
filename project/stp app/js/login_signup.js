

//Sinup form Onsubmit Coding Started Here
//Sinup form Onsubmit Coding Started Here
    var signup_frm = document.getElementById("signup_frm");

    signup_frm.onsubmit =
        function signup_frm_onsubmit(){
            //Sign-Up Input's Value's
            var user = document.getElementById("user_name").value;
            var email = document.getElementById("signup_email").value;
            var phone = document.getElementById("signup_phone_no").value;
            var pass = document.getElementById("signup_password").value;
        
            var user_object_data = {username:user,email:email,phone:phone,password:pass};   //Object Data
            var user_object_text_data = JSON.stringify(user_object_data);   // JSON for objet Data to text data


                function signup_btn_timeout(){  //setTimeout vala function
                        var signup_box = document.getElementById("signup");
                        var login_box = document.getElementById("login");
                        var signup_btn = document.getElementById("signup_btn");

                            signup_btn.style.backgroundColor= "rgba(239, 42, 239, 0.937)";
                            signup_btn.innerHTML= "Sign Up";
                            signup_frm.reset();
                            signup_box.style.display= "none";
                            login_box.style.display= "block";
                }


                //signup btn par Onsubmit karne par lagne wali Condition
                if(user != "" && email != "" && phone != "" && pass != ""){
                    var signup_btn = document.getElementById("signup_btn");

                    localStorage.setItem(email,user_object_text_data);
                        signup_btn.style.backgroundColor= "green";
                        signup_btn.innerHTML= "<i class='fa-solid fa-circle-check'></i> \ Sign Up Successful !";
                        
                            setTimeout(signup_btn_timeout,2000);   //setTimeout vala function
                            
                                 return false;  //Return Flase for Reload After Submit Form
                }       

                else if(user == "" || email == "" || phone == "" || pass == ""){

                    alert("Please Enter All Detail");
                    return false;   //Return false for Onsubmit When input emputy
                }
        }


        // Signup Email Oninput Coding 
        function signup_email_match(){
            var email_email = document.getElementById("signup_email");
            var email = document.getElementById("signup_email").value;
            var signup_btn = document.getElementById("signup_btn");

                if(localStorage.getItem(email) != null ){
                    var email_notic = document.getElementById("email_notice");

                        email_notic.style.display= "block";
                        email_email.style.borderBottom= "2px solid red"; 
                        signup_btn.disabled= true;
                        signup_btn.style.backgroundColor= "#a5a5a5";
                }

                else{
                    var email_notic = document.getElementById("email_notice");

                        email_notic.style.display= "none";
                        email_email.style.borderBottom= "1px solid #ccc";
                        signup_btn.disabled= false;
                        signup_btn.style.backgroundColor= "rgba(239, 42, 239, 0.937)";
                }
        }


//Login form Onsubmit Coding Started Here
//Login form Onsubmit Coding Started Here
    var login_frm = document.getElementById("login_frm");

        login_frm.onsubmit =
            function(){
                var email = document.getElementById("login_email").value;
                var pass = document.getElementById("login_password").value;

                    

                    if(email == "" || pass == ""){
                        var login_btn = document.getElementById("login_btn");

                        login_btn.style.backgroundColor= "#a5a5a5";
                        return false
                    }

                    else if(localStorage.getItem(email) != null){
                        var obj_data = localStorage.getItem(email);
                        var datas =  JSON.parse(obj_data);
                        var correct_email = datas.email;
                        var correct_pass = datas.password;

                        if(correct_email==email){
                            var email_notice = document.getElementById("login_email_notice");
                            email_notice.style.display= "none";

                            if(correct_pass==pass){
                                var login_btn = document.getElementById("login_btn");

                                login_btn.innerHTML= "Login...";
                                login_btn.style.backgroundColor= "rgba(239, 42, 239, 0.937)";
                                setTimeout(
                                    function(){
                                        
                                        login_frm.reset();
                                        login_btn.innerHTML= "Login";
                                        sessionStorage.setItem("user",email);
                                        window.location.replace("profile page/profile.html");
                                    },
                                    2000
                                );
                                return false;
                            }

                            else{
                                var pass_pass_login = document.getElementById("login_password");
                                var pass_notice = document.getElementById("login_pass_notice");

                                pass_pass_login.style.borderBottom= "1px solid red";
                                pass_notice.style.display= "block";

                                pass_pass_login.onclick =
                                    function(){
                                        var email_email_login = document.getElementById("login_email");
                                        
                                        email_email_login.style.borderBottom= "1px solid #ccc";
                                        email_notice.style.display= "none";
                                        pass_pass_login.style.borderBottom= "1px solid #ccc";
                                        pass_notice.style.display= "none";
                                    }
                            
                                return false;
                            }
                        }

                        else{
                            return false;
                        }

                    }


                    else{
                        var email_email_login = document.getElementById("login_email");
                        var email_notice = document.getElementById("login_email_notice");

                            email_email_login.style.borderBottom= "1px solid red";
                            email_notice.style.display= "block";

                            email_email_login.onclick =
                                function(){
                                    
                                    email_email_login.style.borderBottom= "1px solid #ccc";
                                    email_notice.style.display= "none";
                                }


                            return false;
                    }
            }


            var email_login = document.getElementById("login_email");
            var password_login = document.getElementById("login_password");

            email_login.onclick =
            function(){
                var login_btn = document.getElementById("login_btn");

                    login_btn.style.backgroundColor= "rgba(239, 42, 239, 0.937)";
            }
            
            
            
            password_login.onclick =
            function(){
                var login_btn = document.getElementById("login_btn");
                    
                    login_btn.style.backgroundColor= "rgba(239, 42, 239, 0.937)";
            }
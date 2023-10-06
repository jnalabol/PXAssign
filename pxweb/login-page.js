(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-ULPLJAP59HWA-2");
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
let phoneNumber;
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if(username==="jyo@gmail.com")
        phoneNumber = "8341967395";
    else
        phoneNumber = "9103647395";

    if ((username === "user@gmail.com" && password === "user")||(username === "jyo@gmail.com" && password === "jyo")){
       var id = username.substr(0,5);
        
        //passing user and account objects:
        aptrinsic("identify",
            {
                //User Fields
                "id": id, // Required for logged in app users
                "email": username,
                "firstName": "Jyoshna",
                "lastName": "Nalabolu",
                "phoneNumber":phoneNumber,
            },
            {
                //Account Fields
                "id": "IBM", //Required
                "name": "International Business Machine",
            });
        if(username === "user@gmail.com"){
            aptrinsic("set", "user", {"firstName" : "Mounika", "lastName" : "Nalabolu"});
        }
        alert("You have successfully logged in.");
        location.href = "page.html";
       
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

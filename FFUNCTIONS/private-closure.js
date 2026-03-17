function createLogin()        // 👉 Outer function
{          
    let password = "1234";        // Private variable
    return function (input)          // 👉 Inner function
    {   
    if (input === password) 
        {
            console.log("Access Granted");
        }  
    else 
        {
            console.log("Wrong Password");
        }
    };
}
let login = createLogin();
login("1234");

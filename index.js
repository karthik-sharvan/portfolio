function nam()
{
           var n=document.getElementById("na").value
           var ncheck=/^[a-zA-Z_]{3,100}$/
        if(n==" "||!n.match(ncheck))
        {
            alert("USE ONLY ALPHABETS IN NAME AND NAME SHOULD BE MINIMUN 3 CHARACTERS")
            return false;
        }
        else{
            return true;
        }
}

function mobile()
{
        var m=document.getElementById("num").value
        var mcheck=/^[0-9]{10}$/
     if(m==" "||!m.match(mcheck))
     {
         alert("Enter valid mobile number")
         return false;
     }
     else{
         return true;
     }
}

function gmail()
{
        var g=document.getElementById("mail").value
        var gcheck=/^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z ]{1,3}$/
     if(g==" "||!g.match(gcheck))
     {
         alert("Enter valid mailid")
         return false;
     }
     else{
         return true;
     }
}
function details()
{
  var con={
           NAME:document.getElementById("na").value,
           Mobile_Number:document.getElementById("num").value,
           Gmail_id:document.getElementById("mail").value
          }
    
        //   console.log(con.NAME)
        //   console.log(con. Mobile_Number)
        //   console.log(con.Gmail_id)
        for(let key in con) 
        {
            console.log(key + ": " + con[key]);
    
        }
}






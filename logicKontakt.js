
document.addEventListener("DOMContentLoaded", init);

function init(){
    console.log("Content loaded!")

    document.getElementById('btn_send').addEventListener("click", ()=>{

        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        let vN = document.getElementById('vn').value;
        let nN = document.getElementById('nn').value;
        let eM = document.getElementById('mail').value;
        let mE = document.getElementById('nr').value;



        if(eM.match(mailformat)){
            document.getElementById('kgM').innerHTML = "";
           /* Email.send({
                Host: "smtp.gmail.com",
                Username : "javascript.private@gmail.com",
                Password : "mjyebqffkslhbnqe",
                To : `javascript.private@gmail.com`,
                From : "javascript.private@gmail.com",
                Subject : `Anfrage von ${vN} ${nN}`,
                Body : `${vN} <br/> ${nN} <br/> ${eM} <br/><br/> Nachricht: <br/>  ${mE}`,
            });*/
            document.getElementById('hackenErfolg').style.visibility = "visible";
            swal("Fertig!", "Deine Anfrage wurde gesendet", "success");

        }else{
            //alert("Dies ist keine gültige Mailadresse!")
            document.getElementById('kgM').innerHTML = "Bitte gib eine gültige Email-Adresse ein!"
            document.getElementById('mail').value = "";
            document.getElementById('hackenErfolg').style.visibility = "collapse";

        }


    })


}









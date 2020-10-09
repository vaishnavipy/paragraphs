window.onload = function(){
              

    document.getElementById("generate").onclick = function(){
        
        let changed_number =  document.getElementById("no").value;

            console.log("add")
            console.log()
        let content = document.getElementById("content").children;

        if(parseInt(changed_number) > 1 && parseInt(changed_number) < 10   ){
            console.log(changed_number)

           
        
       for(var i =1 ; i <= parseInt(changed_number) ; i++){
        console.log(i+"Iam i")
        document.getElementById(i.toString()).style.position ="relative"
        document.getElementById(i.toString()).classList.remove("inactive");
        document.getElementById(i.toString()).classList.add("active");


        }

         
       for(var i =parseInt(changed_number)+1 ; i < 9 ; i++){

            document.getElementById(i).classList.add("inactive");
            document.getElementById(i).classList.remove("active");


            }
       
    }else if(parseInt(changed_number) == 0){

        for(var i =1 ; i <= 9 ; i++){
       
       document.getElementById(i.toString()).classList.add("inactive");
       document.getElementById(i.toString()).classList.remove("active");
      


       }


    }
    else{

        console.log("Iam else")

        for(var i =1 ; i <= 9 ; i++){
       
        document.getElementById(i.toString()).classList.add("inactive");
        document.getElementById(i.toString()).classList.remove("active");
        document.getElementById(i.toString()).style.position ="absolute"
        document.getElementById(i.toString()).style.top ="5px"


        }

        let random = Math.floor(Math.random()*8)+1;

        console.log(random+"Iam random")

        document.getElementById(random.toString()).classList.remove("inactive");
        document.getElementById(random.toString()).classList.add("active");



    }

    }


}





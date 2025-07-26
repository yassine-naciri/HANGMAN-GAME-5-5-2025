
const btn = document.querySelectorAll('button');


let secret_word = "hello"
let current_word = ""
let dis_word = "-"
let times = 0

for (let index = 0; index < btn.length; index++) {
	let cli = btn[index]
	cli.addEventListener('click', Clicked)
}


let setValues = document.querySelector("h2")
setValues.style.fontSize = "80px"


for (let index = 0; index < secret_word.length; index++) {
    setValues.innerHTML = dis_word.repeat(index)
   
}


let byUId = document.getElementById(0).style.display = "block"
function img_adder(uid) {

    
    let pics = document.querySelector("img")
    let byUId = document.getElementById(uid).style.display = "block"
    let older = document.getElementById(uid-1).style.display = "none"

}


function img_adder25(uid) {
    
    let old_uid = uid -1
    
    
    let pics = document.querySelector("img")
    pics.style.display = "none"

    let pic = document.createElement("img")
    pic.setAttribute("src",`./public/images/${uid}.png`)
    document.querySelector(".ui").appendChild(pic)    
}

let current_words = ""
function Clicked(e) {
    

    if(secret_word==current_words.toLowerCase())
    {
        document.querySelector("h2").style.color = 'green'
        alert("GOOD JOB")

        return
    }
    else{
        
    }

	let button = e.target.textContent;
    let ind = secret_word.indexOf(button.toLowerCase())

    //alert("index of is is " + ind)
    current_word = current_word + button
    let input = document.querySelector("h2")
    
    //alert(setValues.textContent)
 
    
    
    if(secret_word.includes(button.toLowerCase()))
    {
        
        let chars = e.target.textContent;
        current_words = current_words + chars

        
        setValues.textContent[ind] = current_word
        
         
        input.innerHTML =   current_words //*setValues.innerHTML.indexOf()
        
        //setValues.textContent.indexOf() = current_word


        e.target.style.color = "green"
    }
    else{
        e.target.style.color = "red"
        console.log("none")
        if(times == 8)
        {

            alert("finished")
            alert("The secret word is " + secret_word)
            location.reload();
        }else{
            times+= 1
        }


        switch (true) {
            
            case times==0:
                console.log("swi")
                img_adder(0)
                break
            case times==1:
                console.log("swi")
                img_adder(1)
                break
            case times==2:
                img_adder(2)
                break;

            case times==3:
                console.log("swi")
                img_adder(3)
                break
            case times==4:
                img_adder(4)
                break;


            case times==5:
                console.log("swi")
                img_adder(5)
                break
            case times==6:
                img_adder(6)
                break;
            case times==7:
                console.log("swi")
                img_adder(7)
                break
            case times==8:
                img_adder(8)
                
                break;



            default:
                break;
        }
    }
  
}






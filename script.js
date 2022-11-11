const accordion = document.getElementsByClassName("contentBx");
for (let i = 0; i < accordion.length; i++) {
        const element = accordion[i];
        console.log(element)
        accordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
        })
    }
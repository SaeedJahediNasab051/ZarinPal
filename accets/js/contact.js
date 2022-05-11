const input = document.querySelector(".contact-us-input")
const us = document.querySelector(".contact-us-label")



input.addEventListener("focus", () => {
    document.querySelector("input").placeholder = " "
    input.style.direction = "ltr"
    us.style.display = "inline"
    
  })
  
  input.addEventListener("blur", () => {
    if (input.value.length <= 0) {
      document.querySelector("input").placeholder = "شماره همراه"
      input.style.direction = "ltr"
      us.style.animation = "showInput .4s 1"
      us.style.display = "none"
    }
    if(input.value == 0){
      input.style.direction = "rtl"
    }
  })
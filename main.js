window.onload = function(){


// Set all the answers to display none once page is loaded
let answer = document.querySelectorAll(".answer");

answer.forEach(a => {
  a.style.display = "none";
});

let question = document.querySelectorAll(".question ");

question.forEach(q=>{

  q.addEventListener("click", function(e){

    let li = e.target.parentElement;
    let img = e.target.children[1];
    let liOfQuestion = li.children[1];

    if(liOfQuestion.style.display === "none"){
      liOfQuestion.style.display = "block";
      img.style.transform = "rotate(0deg)";
    }
    else{
      liOfQuestion.style.display = "none";
      img.style.transform = "rotate(90deg)";
    }

  })
})

}

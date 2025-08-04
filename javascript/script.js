// card generation
let reason = document.getElementById('reason-to-join');

card.forEach((val)=>{
  const producedHTML = `<div id="reason-box">
  <h4>${val.heading}</h4>
  <p>${val.para}</p>
  <img src="${val.img}" alt="pic">
          </div>
          `;
          reason.innerHTML+=producedHTML;
});

let quesans = document.getElementById('frequently-ques');
faqs.forEach((value,id)=>{
  const faqHTML = `
  <button id="click-down" onclick="toggleAnswer('info${id}')">
            <h4>${value.question}</h4>
            <p id="info${id}">${value.answer}</p>
          </button>`;
          quesans.innerHTML+=faqHTML;
});

function toggleAnswer(id) {
  const answer = document.getElementById(id);
  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}


// movies generation
const container = document.querySelector('.image-container');

movies.forEach((pic)=>{
  let movieHTML = `
  <img src="${pic.img}" alt="movies" />
  `;
  container.innerHTML+=movieHTML;
});
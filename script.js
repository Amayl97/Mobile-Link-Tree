const sendMsgBtn = document.getElementById("btn");
const rightChatCont = document.querySelector(".rightMsgsCont");
const inputText = document.getElementById("msgInp");


sendMsgBtn.addEventListener("click", () => {
    console.log("working");
    const msg = inputText.value.trim();
    if(msg === "") return;
   const rightMsgs = document.createElement("div");
   rightMsgs.className = "rightMsgs";

   const p = document.createElement("p");
   p.className = "rightMsg";
   p.textContent = msg;

   rightMsgs.appendChild(p);
   rightChatCont.appendChild(rightMsgs);

   inputText.value = "";
   inputText.focus();
})
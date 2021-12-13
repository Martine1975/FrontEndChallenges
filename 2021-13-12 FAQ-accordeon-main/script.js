// accordion menu
// Script waarmee de afzonderlijke vragen worden geopend door erop te klikken


{
   window.addEventListener("pageshow", faqMenu);
   const getQuestions = document.getElementsByClassName('question');
   const getAnswers = document.getElementsByClassName('answer');
   const getImages = document.getElementsByTagName('img');
   const arrowImages = [];
   const getAnswersHeight = [];

   function faqMenu() {
      // verberg alle vragen
      for (let i = 0; i < getAnswers.length; i++) {
         getAnswersHeight.push(getAnswers[i].scrollHeight);
         getAnswers[i].style.visibility = "hidden";
         getAnswers[i].style.height = "0px";
         getAnswers[i].style.opacity = 0;
         getAnswers[i].style.padding = "0px 0px 0px 0px"
      }
      console.log(document.getElementsByClassName('box')[0]);


      // vind alle arrow-images op de pagina
      for (let i = 0; i < getImages.length; i++) {
         if (getImages[i].alt === "arrow") {
            arrowImages.push(getImages[i]);
            console.log(arrowImages);
         }
      }
      //als mouseover vragen maak vraag rood en voeg muishandje toe en verplaats doosje
      for (let i = 0; i < getQuestions.length; i++) {
         getQuestions[i].onmouseover = function () { mouseOver() };
         function mouseOver() {
            getQuestions[i].style.color = "hsl(14, 88%, 65%)";
            getQuestions[i].style.cursor = "pointer";
            document.getElementsByClassName('box')[0].style.right = "130px";
            document.getElementsByClassName('box')[0].style.transition = "all 0.3s";
            // als vraag = open geen rode kleur of pointer
            if (getQuestions[i].style.fontWeight === "700") {
               getQuestions[i].style.color = "hsl(237, 12%, 33%)";
               getQuestions[i].style.cursor = "auto";
            }
         }
         // als muishandje naar volgende vraag gaat --> andere vragen zwart
         getQuestions[i].onmouseout = function () { mouseOut() };
         function mouseOut() {
            getQuestions[i].style.color = "hsl(237, 12%, 33%)";
            document.getElementsByClassName('box')[0].style.right = "90px";
         }
         //als ik op de vraag klik maak antwoord zichtbaar
         getQuestions[i].onmousedown = function () { mouseClick(); }
         function mouseClick() {
            //Sluit alle vragen waar al op geklikt is
            for (let i = 0; i < getQuestions.length; i++) {
               if (getAnswers[i].style.height !== "0px") {
                  getAnswers[i].style.height = "0px";
                  getAnswers[i].style.padding = "0px 0px 0px 0px";
                  getAnswers[i].style.visibility = "hidden";
                  getQuestions[i].style.fontWeight = "400";
                  getAnswers[i].style.opacity = 0;
                  arrowImages[i].style.transform = "rotate(0deg)";
                  getQuestions[i].style.color = "hsl(237, 12%, 33%)";

               }
            }
            //open vraag en maak deze vet en draai het pijltje
            getQuestions[i].style.color = "hsl(238, 29%, 16%)";
            getQuestions[i].style.fontWeight = "700";
            arrowImages[i].style.transform = "rotate(180deg)";
            arrowImages[i].style.transition = "all 0.3s"
            getAnswers[i].style.visibility = "visible";
            getAnswers[i].style.height = getAnswersHeight[i] + 'px';
            getAnswers[i].style.padding = "15px 30px 0px 0px";
            getAnswers[i].style.opacity = 1;
            getAnswers[i].style.transition = "opacity 1.2s, height 0.3s, padding 0.2s";
         }
      }
   }
}
// console.log(document.getElementsByClassName('box')[0].offsetLeft);
// console.log(getAnswers[i].style.visibility);
// console.log(document.getElementsByClassName('box')[0].offsetLeft);
//             console.log(getAnswers[i].style.visibility);

//             document.getElementsByClassName('box')[0].style.transition = "all 0.5s";
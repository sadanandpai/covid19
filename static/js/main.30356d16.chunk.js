(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(3),r=t.n(s),o=(t(9),t(1));t(10),t(11);var l=function(e){var a,t=Object(n.useState)({selectionClass:"box"}),s=Object(o.a)(t,2),r=s[0],l=s[1];function c(a){l({selectionClass:"box answer-selected",selectionOption:a.target.value}),a.persist(),setTimeout((function(){a.target.checked=!1,e.changeQuestionHandler(a.target.value)}),1e3),setTimeout((function(){l({selectionClass:"box"})}),2e3)}if(void 0!==e.children){var d="hidden";a="result"}else a="hidden-display";return i.a.createElement("div",{className:r.selectionClass},i.a.createElement("img",{src:"corona.png",alt:"corona",className:"corona-bottom-right"}),i.a.createElement("div",{className:a},"Thanks for participating in the quiz.",i.a.createElement("br",null),"Your score is ",e.children," out of 10"),i.a.createElement("div",{className:d},i.a.createElement("h2",null,e.question.quest),i.a.createElement("div",{className:"margin-10"},i.a.createElement("div",{className:"align-v-middle w-50 inline-block"},i.a.createElement("input",{type:"radio",name:"answer",value:"a",onChange:c})),i.a.createElement("div",{className:"align-v-middle w-rest inline-block"},e.question.a)),i.a.createElement("div",{className:"margin-10"},i.a.createElement("div",{className:"align-v-middle w-50 inline-block"},i.a.createElement("input",{type:"radio",name:"answer",value:"b",onChange:c})),i.a.createElement("div",{className:"align-v-middle w-rest inline-block"},e.question.b)),i.a.createElement("div",{className:"margin-10"},i.a.createElement("div",{className:"align-v-middle w-50 inline-block"},i.a.createElement("input",{type:"radio",name:"answer",value:"c",onChange:c})),i.a.createElement("div",{className:"align-v-middle w-rest inline-block"},e.question.c)),i.a.createElement("div",{className:"margin-10"},i.a.createElement("div",{className:"align-v-middle w-50 inline-block"},i.a.createElement("input",{type:"radio",name:"answer",value:"d",onChange:c})),i.a.createElement("div",{className:"align-v-middle w-rest inline-block"},e.question.d))))};var c=function(){var e,a=[{quest:"1. Where did the first Covid-19 outbreak happen?",a:"Newyork, USA",b:"Wuhan, China",c:"Shanghai, China",d:"Beijing, China"},{quest:"2. When did WHO declare Covid-19 as pandemic?",a:"17 Mar 2020",b:"16 Mar 2020",c:"11 Mar 2020",d:"9 Mar 2020"},{quest:"3. What is the incubation period for Covid 19?",a:"2-14 days",b:"1-10 days",c:"5-15 days",d:"0-15 days"},{quest:"4. What is the minimum distance to be maintained in public places in between 2 people?",a:"5 ft",b:"3 ft",c:"6 ft",d:"4 ft"},{quest:"5. which are the mode of transmission?",a:"Air",b:"Different surfaces",c:"Both A and B",d:"Water"},{quest:"6. How long does the virus stay in Air?",a:"2 hrs",b:"5 hrs",c:"4 hrs",d:"3 hrs"},{quest:"7. What are the clinical features observed in Covid 19 patients?",a:"Dry Cough, Fever, Shortness of breath",b:"Pain in abdomen, vomitting, diarrhea",c:"Fever, vomitting, fatigue",d:"Fever, cold, cough"},{quest:"8. What is helpline number to report about Covid 19 symptoms given by Government of India?",a:"1075 +91-11-23978046",b:"1075 +91-11-2197707",c:"1075 +91-11-2309009",d:"1075 +91-11-23458791"},{quest:"9. Which is the recommended mask for Covid 19?",a:"Surgical mask",b:"FFP1 mask",c:"N95 mask",d:"Cloth mask"},{quest:"10. What are preventive measures suggested for Covid 19?",a:"HANDS-Wash them often ELBOW-Cough into it, FACE -Don't touch it",b:"SPACE-Keep safe distance, HOME-Stay if you can",c:"All of the above",d:"None of the above"}],t=[175667596,-658731874,-1296971367,1642744,516595227,48156476,769360365,-196076807,-808546037,-128829340],s=Object(n.useState)({id:0,answers:[]}),r=Object(o.a)(s,2),c=r[0],d=r[1];return c.answers.length===t.length&&(e=c.answers.filter((function(e,n){return t[n]===function(e){var a,t,n=0;for(a=0;a<e.length;a++)t=e.charCodeAt(a),n=(n<<5)-n+t,n|=0;return n}(a[n][e])})).length),i.a.createElement("div",{className:"App"},i.a.createElement(l,{question:a[c.id],changeQuestionHandler:function(e){c.answers.push(e),c.id!==t.length-1?d({id:c.id+1,answers:c.answers}):d({id:c.id,answers:c.answers})}},e),i.a.createElement("img",{src:"virus.png",alt:"virus",className:"virus1"}),i.a.createElement("img",{src:"virus.png",alt:"virus",className:"virus2"}),i.a.createElement("img",{src:"virus.png",alt:"virus",className:"virus3"}),i.a.createElement("div",{className:"bottom-right-fixed"},"Developed in React",i.a.createElement("br",null),"by ",i.a.createElement("a",{href:"https://www.linkedin.com/in/sadananadpai/"},"Sadanand Akshay Pai")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(c,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.30356d16.chunk.js.map
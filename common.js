function home()
{
    window.location="index.html";
}   

function facts()
{
    window.location="facts.html";
}   

function types()
{
    window.location="types.html";
}   

function attacks()
{
    window.location="attacks.html";
}   

function global()
{
    window.location="global.html";
}   

function practice()
{
    window.location="practice.html";
}   

function quiz()
{
    window.location="quiz.html";
}   

function extra()
{
    window.location="extra.html";
}

var answers = ["A", "C", "B"],
    tot = answers.length;
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
}

function returnScore() {
    const idkidc2 = document.getElementById('scorebtn');
    idkidc2.style.display = 'none';
    alert("Your score is a " + getScore() + "/" + tot + "!");
    if ("ok") {
    window.location="quiz.html";
    } 
}

function nextq() {
    const element = document.getElementById('quiz2');
    element.style.display = 'block';
    const idk = document.getElementById('nextq');
    idk.style.display = 'none';
    const next = document.getElementById('nextq2');
    next.style.display = 'block';
}

function nextq2() {
    const element2 = document.getElementById('quiz3');
    element2.style.display = 'block';
    const idk2 = document.getElementById('nextq2');
    idk2.style.display = 'none';
    const next2 = document.getElementById('scorebtn');
    next2.style.display = 'block';
}

function showConfirm() {
    const form = document.getElementById('myForm');
              
        form.addEventListener('submit', function(event) 
        {
            const fnameInput = document.getElementById('finput');
            const emailInput = document.getElementById('einput');
            const lnameInput = document.getElementById('linput');
            const numberInput = document.getElementById('ninput');
              
            if (fnameInput.value.trim() === '' || emailInput.value.trim() === '' || lnameInput.value.trim() === '' || numberInput.value.trim() === '') {
                event.preventDefault();
                alert('Please fill in all required fields.');
            }

            else {
                const namef = document.getElementById("finput");
                const namefvalue = namef.value;
                alert("Thank you for registering, " + namefvalue + "! We will get back to you soon!");
            }
        })
}

function fbook() {
    const flabel = document.getElementById("newinfo");
    flabel.textContent = "Data of more than 530 million Facebook users, including  names, Facebook IDs, dates of birth, and relationship status, was published online in April 2021. Facebook, now Meta, said the information was obtained through scraping (the use of software to extract data from websites) in 2019.";
}

function av() {
    const avlabel = document.getElementById("newinfo");
    avlabel.textContent = "In June 2021, Audi and Volkswagen revealed a data breach had affected more than 3.3 million customers and prospective buyers, who were primarily U.S.-based. The breach was blamed on an associated vendor, which was purportedly responsible for exposing the data between August 2019 and May 2021.";
}

function tm() {
    const tmlabel = document.getElementById("newinfo");
    tmlabel.textContent = "In August 2021, telecoms firm T-Mobile suffered a cybersecurity breach that led to the data of around 50 million existing customers and prospects being stolen. The data, which included customer addresses, drivers' licenses, and social security numbers, was stolen by a 21-year-old, who claimed to have obtained around 106GB of information.";
}

function sg() {
    const sglabel = document.getElementById("newinfo");
    sglabel.textContent = "The value of a cryptocurrency linked to but not officially associated with the Netflix program Squid Game plummeted after a suspected exit scam in November 2021. The cryptocurrency’s value dropped from $2,850 to $0.003028 overnight, which resulted in investors losing millions of dollars.";
}

function unical() {
    const unicallabel = document.getElementById("newinfo");
    unicallabel.textContent = "The University of California, in San Francisco, suffered a ransomware attack that led to hackers demanding a settlement payment of $3 million on June 1, 2020. The university’s system was targeted by malware that could encrypt various servers and steal and encrypt critical data. The university negotiated and paid a settlement fee of $1.14 million but later revealed no data had been compromised";
}

function z() {
    const zlabel = document.getElementById("newinfo");
    zlabel.textContent = "Videoconferencing service Zoom saw a massive increase in activity throughout 2020 with people working from home and speaking to friends and family through the application. However, in April 2020, a cyberattack known as Zoombombing enabled cyber criminals to join private meetings, access conversations, and share offensive images, videos, and screens. Zoom updated its application to enhance security levels.";
}
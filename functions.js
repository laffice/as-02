function showOnly(id){
    const allSection = document.getElementById('all-section');
    const interviewSection = document.getElementById('interview-section');
    const rejectedSection = document.getElementById('rejected-section');


  
    interviewSection.classList.add('hidden');
    rejectedSection.classList.add('hidden');
    allSection.classList.add('hidden');
    

    const seletedSection = document.getElementById(id);
    seletedSection.classList.remove('hidden');
}


// buttons color change 

function buttonColorChange(btnId) {
    const allBtn = document.getElementById('all');
    const interviewBtn = document.getElementById('interview');
    const rejectedBtn = document.getElementById('rejected');

    allBtn.classList.remove('bg-blue-600', 'text-white');
    interviewBtn.classList.remove('bg-blue-600', 'text-white');
    rejectedBtn.classList.remove('bg-blue-600', 'text-white');
    
    const selectedBtn = document.getElementById(btnId);
    selectedBtn.classList.add('bg-blue-600', 'text-white');
}



// event listeners for the buttons in index.html

function applyStatus ( Id, text, bgColor, textColor) {
   const statusBtn = document.getElementById(Id);
   statusBtn.innerText = text;
    statusBtn.style.backgroundColor = bgColor;
    statusBtn.style.color = textColor;

    //  const job = document.getElementById("job-1");
    // const inetrviewCont = document.getElementById("interview-container");
    // const cloneNode = job.cloneNode(true);
    // inetrviewCont.appendChild(cloneNode);

    jobCounts();
}


document.getElementById("interview-btn-1").addEventListener("click", function() {
    
    applyStatus("status-1", "INTERVIEW", "#10b610", "white");
    
    // const job = document.getElementById("job-1");
    // const inetrviewCont = document.getElementById("interview-container");
    // const cloneNode = job.cloneNode(true);
    // inetrviewCont.appendChild(cloneNode);

    

});

document.getElementById("reject-btn-1").addEventListener("click", function() {
    applyStatus("status-1", "REJECTED", "#f81717", "white");
   
});





document.getElementById("interview-btn-2").addEventListener("click", function() {
    applyStatus("status-2", "INTERVIEW", "#10b610", "white");
});

document.getElementById("reject-btn-2").addEventListener("click", function() {
    applyStatus("status-2", "REJECTED", "#f81717", "white");
});


document.getElementById("interview-btn-3").addEventListener("click", function() {
    applyStatus("status-3", "INTERVIEW", "#10b610", "white");
});

document.getElementById("reject-btn-3").addEventListener("click", function() {
    applyStatus("status-3", "REJECTED", "#f81717", "white");
});


document.getElementById("interview-btn-4").addEventListener("click", function() {
    applyStatus("status-4", "INTERVIEW", "#10b610", "white");
});

document.getElementById("reject-btn-4").addEventListener("click", function() {
    applyStatus("status-4", "REJECTED", "#f81717", "white");
});


document.getElementById("interview-btn-5").addEventListener("click", function() {
    applyStatus("status-5", "INTERVIEW", "#10b610", "white");
});

document.getElementById("reject-btn-5").addEventListener("click", function() {
    applyStatus("status-5", "REJECTED", "#f81717", "white");
});



document.getElementById("interview-btn-6").addEventListener("click", function() {
    applyStatus("status-6", "INTERVIEW", "#10b610", "white");
});

document.getElementById("reject-btn-6").addEventListener("click", function() {
    applyStatus("status-6", "REJECTED", "#f81717", "white");
});



document.getElementById("interview-btn-7").addEventListener("click", function() {
    applyStatus("status-7", "INTERVIEW", "#10b610", "white");
});

document.getElementById("reject-btn-7").addEventListener("click", function() {
    applyStatus("status-7", "REJECTED", "#f81717", "white");
});


document.getElementById("interview-btn-8").addEventListener("click", function() {
    applyStatus("status-8", "INTERVIEW", "#10b610", "white");
});

document.getElementById("reject-btn-8").addEventListener("click", function() {
    applyStatus("status-8", "REJECTED", "#f81717", "white");
});





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




// deleting jobs from the list


function deleteJob(Id) {
   
    const jobDel = document.getElementById(Id).remove();
    jobCounts();
}



document.getElementById("del-btn-1").addEventListener("click", function() {
    deleteJob("job-1");
})



document.getElementById("del-btn-2").addEventListener("click", function() {
    deleteJob("job-2");
})



document.getElementById("del-btn-3").addEventListener("click", function() {
    deleteJob("job-3");
})



document.getElementById("del-btn-4").addEventListener("click", function() {
    deleteJob("job-4");
})



document.getElementById("del-btn-5").addEventListener("click", function() {
    deleteJob("job-5");
})



document.getElementById("del-btn-6").addEventListener("click", function() {
    deleteJob("job-6");
})



document.getElementById("del-btn-7").addEventListener("click", function() {
    deleteJob("job-7");
})



document.getElementById("del-btn-8").addEventListener("click", function() {
    deleteJob("job-8");
})



// job counts

function jobCounts(){
    const jobs = document.querySelectorAll(".job-card");
    const count = jobs.length;
    document.getElementById("job-count").innerText = count;
    document.getElementById("total-jobs").innerText = count;
    const rejectPage = document.getElementById("rej-page");

    const interviewPage = document.getElementById("int-page");
    const interviewCount = document.querySelectorAll(".status-box");

    let interviewNum = 0;
    let rejectedNum = 0;

    for (let status of interviewCount){
        if (status.innerText === "INTERVIEW"){
            interviewPage.classList.add('hidden');
            interviewNum++;
        }
         else if (status.innerText === "REJECTED"){
            rejectPage.classList.add('hidden');
            rejectedNum++;
        }
    }
    document.getElementById("interview-count").innerText = interviewNum;
    document.getElementById("rejected-count").innerText = rejectedNum;
    document.getElementById("itn-count").innerText = interviewNum;
    document.getElementById("rej-count").innerText = rejectedNum;
}





// function moveToInterview(jobId, statusId) {

//     const job = document.getElementById(jobId);

//     document
//         .getElementById("interview-container")
//         .appendChild(job);

//     changeStatus(statusId, "INTERVIEW", "green");

//     updateCounts();
// }






// function moveToRejected(jobId, statusId) {

//     const job = document.getElementById(jobId);

//     document
//         .getElementById("rejected-container")
//         .appendChild(job);

//     changeStatus(statusId, "REJECTED", "red");

//     updateCounts();
// }




// document.getElementById("interview-btn-1")
// .addEventListener("click", function () {

//     moveToInterview("job-1", "status-1");
// })

// document
// .getElementById("reject-btn-1")
// .addEventListener("click", function () {

//     moveToRejected("job-1", "status-1");

// });

// document
// .getElementById("del-btn-1")
// .addEventListener("click", function () {

//     deleteJob("job-1");
// });
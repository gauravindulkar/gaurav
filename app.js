const skillsSection = document.getElementById('mySkills');

const progress = document.querySelectorAll('progress');

function showprogress(){
    progress.forEach(progress=> {
        const value = progress.dataset.progress;
        progress.style.opacity = 1;
        progress.style.width = `${value}%`;
    });
}

function hideprogress(){
    progress.forEach(progress => {
        progress.style.opacity = 0;
        progress.style.width = 0;
    });
}

window.addEventListener('load',() => {
    const sectionPos = skillsSection.getBoundingClientRect().bottom;
    const screenPos = window.innerHeight / 2;

    if(sectionPos >= screenPos){
        showprogress();
    }
    else{
        hideprogress();
    }
});
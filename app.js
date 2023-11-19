
const panels = document.querySelectorAll(".panel");

panels.forEach((panel)=>{
    panel.addEventListener("click", (e)=>{
        console.log(e.target.classList);
        console.log(e.target);
        console.log(e.currentTarget);
        const current = e.currentTarget;
        let working = document.querySelector(".panel.active");
        if (working) {
            working.classList.remove('active');
        }
        current.classList.add('active');

    })
})

/* 
重點：
    事件監聽：
        e.target:觸發的元素
        e.currentTarget:監聽的元素
*/
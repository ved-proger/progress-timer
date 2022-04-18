function progressView(){
    let diagramBox = document.querySelectorAll('.diagram.progress');

    diagramBox.forEach((box) => {
        let start = 1;
        let finish = box.dataset.percent;

        function timer(start){
            let maxPersent = box.dataset.maxPercent;
            let deg = (360 * start / maxPersent) + 180;
            // let deg = (360 * box.dataset.percent / maxPersent) + 180;

            if(start >= maxPersent / 2){
                box.classList.add('over_50');
            }else{
                box.classList.remove('over_50');
            }

            box.querySelector('.text b').textContent = start;
            box.querySelector('.piece.right').style.transform = `rotate(${deg}deg)`;


            if(start < finish){
                setTimeout(() =>{
                    timer(start + 1)
                }, 1000)
            }else{
                setTimeout(() => {
                    alert(" Timer counter finish")
                }, 1000)
            }
        }

        timer(start);
    });
}

progressView();

function countdownView(){
    let diagramBox = document.querySelector('.diagram.timer');
    let start = diagramBox.dataset.seconds;

    function timer(seconds){
        let deg = (360 * seconds / start) + 180;
        if(seconds >= diagramBox.dataset.seconds / 2){
            diagramBox.classList.add('over_50');
        }else{
            diagramBox.classList.remove('over_50');
        }

        diagramBox.querySelector('.piece.right').style.transform = `rotate(${deg}deg)`;
        diagramBox.querySelector('.text b').textContent = seconds;

        if(seconds){
            setTimeout(function(){
                timer(seconds - 1);
            }, 1000);
        }else{
            setTimeout(() => {
                alert("Timer counter finish down ")
            }, 1000)
        }
    }

    timer(start)

}

countdownView()
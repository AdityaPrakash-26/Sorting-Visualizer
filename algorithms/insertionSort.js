async function insertion(){
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        if(flag==true){
            return;
        }
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'blue';

        await delayTime(delay);
        if(flag==true){
            return;
        }

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            if(flag==true){
                return;
            }
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await delayTime(delay);
            if(flag==true){
                return;
            }
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await insertion();
    if(flag==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});

async function selection(){
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        if(flag==true){
            return;
        }
        let min_index = i;
        // Change color of the bar being compared
        ele[i].style.background = 'lightgreen';
        for(let j = i+1; j < ele.length; j++){
            if(flag==true){
                return;
            }
            console.log('In jth loop');
            // Change color of current bar
            ele[j].style.background = 'cyan';

            await delayTime(delay);
            if(flag==true){
                return;
            }
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = '#e43f5a';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = '#e43f5a';
            }   
        }
        await delayTime(delay);
        if(flag==true){
            return;
        }
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = '#e43f5a';
        // change the sorted elements color to green
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    flag = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await selection();
    if(flag==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});
function fieldValidate(fieldId){
    const fieldElement = document.getElementById(fieldId);
    fieldElement.value = 0;
    fieldElement.style.color = 'black';
    document.getElementById(fieldId).addEventListener('keyup',(e)=>{
        if(isNaN(e.target.value) || e.target.value < 0 ){
            e.target.value = 0;
        }
    });
}
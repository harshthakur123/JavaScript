const form=document.querySelector('form')
//This will give you empty values
// const height=parseInt(document.querySelector('#height').value)



form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')

    if(height==='' || height<0 || isNaN(height)){
        document.getElementById('checkHeight').innerHTML="Please give valid height"
    }else if(weight==='' || weight<0 || isNaN(weight)){
        document.getElementById('checkWeight').innerHTML="Please give valid weight"
    }else{
        const bmi=(weight / ((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            result.innerHTML=`<span style="color: red;">BMI = ${bmi} (Underweight)</span>`
        }else if(bmi>=18.6 && bmi<24.9){
            result.innerHTML=`<span style="color:  rgb(26, 189, 75);">BMI = ${bmi} (Normal)</span>`
        }else{
            result.innerHTML=`<span style="color: red;">BMI = ${bmi} (Overweight)</span>`
        }
        
    }



})
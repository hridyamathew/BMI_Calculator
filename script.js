const calculate=()=>{
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    if(height && weight) {
        let disp = document.getElementById('disp')
        disp.style.display = 'block'
        let bmi = weight/height**2
        bmi = bmi.toFixed(1)
        let result = document.getElementById('result')
        result.innerHTML = bmi
        let category = document.getElementById('category')
        let slide = document.getElementById('slide')
        if(bmi < 18.5) {
            category.innerHTML = 'Underweight'
            category.style.color = 'yellow'
            slide.style.width = '13%'
        }
        else if(bmi < 25) {
            category.innerHTML = 'Normal'
            category.style.color = 'green'
            slide.style.width = '38%'
        }
        else if(bmi < 30) {
            category.innerHTML = 'Overweight'
            category.style.color = 'orange'
            slide.style.width = '68%'
        }
        else {
            category.innerHTML = 'Obese'
            category.style.color = 'red'
            slide.style.width = '90%'
        }
    }
    else {
        alert('Please enter your weight and height !!!')
    }
    

}
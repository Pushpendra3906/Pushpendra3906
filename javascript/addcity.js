
var newCity= document.querySelector('#addCity')
var errorSmall= document.querySelector('small')
var ddCities= document.querySelector('#ddCities')


function addCity(){
    
    if(newCity.value==''){
        errorSmall.className= 'error'
        errorSmall.innerText='Please enter a valid city.'
    }
    else if(checkIfCityExists()){
        errorSmall.className='warn'
        errorSmall.innerText='City already exists.'
    }
    else{
        var opt= document.createElement('option')
        opt.value= newCity.value
        opt.innerText= newCity.value
        ddCities.appendChild(opt)

        errorSmall.className='success'
        errorSmall.innerText='City added successfully!'
    }

}

function removeError(){
    errorSmall.className='hidden'
}

function checkIfCityExists(){

    for(var city of ddCities){
        if(newCity.value.toLowerCase()==city.value.toLowerCase())
        {
            return true
        }
    }

    return false;
}
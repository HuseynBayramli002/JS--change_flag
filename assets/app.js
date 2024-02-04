let filtRegions = document.querySelector('.header__filt-regions');
let regionsContainer=document.querySelector('.header__regions-container');
let modeColor=document.querySelector('.modecolor');


modeColor.addEventListener('click',()=>{
    if(document.documentElement.getAttribute('data-theme')=='lightMode'){
        document.documentElement.setAttribute('data-theme', 'darkMode')
    }else{
        document.documentElement.setAttribute('data-theme', 'lightMode')
    }
})

filtRegions.addEventListener("click", () => {
    if (regionsContainer.style.display === "none") {
        regionsContainer.style.display = "block";
    } else {
        regionsContainer.style.display = "none";
    }

})


function getCountries(){
    fetch('https://restcountries.com/v3.1/all ')
    .then((res)=>res.json())
    .then((data)=>{
        countries()
    })
}
getCountries()


function allCountries(country){
    

}
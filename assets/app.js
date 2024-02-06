let modeColor = document.querySelector('.modecolor');
let countryContainer = document.querySelector(".main");
let regionsContainer = document.querySelector(".header__regions__container")
let searchInput = document.querySelector(".header__search__input")

//! Dark thema 
modeColor.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') == 'lightMode') {
        document.documentElement.setAttribute('data-theme', 'darkMode')
    } else {
        document.documentElement.setAttribute('data-theme', 'lightMode')
    }
})
//! Olkeleri apiden cagima
function getCountries() {
    fetch('https://restcountries.com/v3.1/all ')
        .then((res) => res.json())
        .then((data) => {
            allCountries(data);
        })
}
getCountries()
//! Olkeleri elave etme
function allCountries(countries) {
    countryContainer.innerHTML = ''
    countries.forEach(function (country) {
        const { population, name, flags, region, capital } = country;
        countryContainer.innerHTML += `
        <div class="main__country">
            <div class="main__flag">
                <img src="${flags.png}" alt="">
            </div>
            <div class="main__country-name">
                <h2>${name.common}</h2>
                <h4>Population: <span>${population}</span></h4>
                <h4>Region: <span>${region}</span></h4>
                <h4>Capital: <span>${capital}</span></h4>
            </div>
        </div>
        `;
    });

}
//! Filtere gore olkeleri filtirlemek
regionsContainer.addEventListener("click", sellectRegion)
function sellectRegion(e) {
    if (e.target.value !== "") {
        fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
            })
    } else {
        getCountries()
    }
}
//! Search input vasitesile olke melumati tapmaq
searchInput.addEventListener('input', function (e) {
    searchCountry = e.target.value.toLowerCase()
    fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
            allCountries(data)
        })
})
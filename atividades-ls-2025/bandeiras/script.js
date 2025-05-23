import flags from './model/flags.js'; 

function bandeira_card(flag){
    let card = 
    `
    <div class="flag col-2 my-2 text-center">
        <img src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${flag.id}.svg" alt="${flag.name}" style="height: 6REM;width: 6rem;">
        <p>${flag.name}</p>
    </div>
    `;
    return card;
};

document.getElementById("containerflags").insertAdjacentHTML("beforeend", flags.map( (x) => bandeira_card(x)  ).join(''))
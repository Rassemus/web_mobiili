const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});


const buttons = document.querySelectorAll(".read-more-btn");

if(buttons) {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".service-card");
            card.classList.toggle("expanded");

            button.textContent =
                card.classList.contains("expanded")
                    ? "Näytä vähemmän"
                    : "Lue lisää";
        });
    });
}


// Referenssit 
const references = [
    {
        id: 1,
        name: "FinTech Oy",
        description: "Toteutimme kokonaisvaltaisen riskikartoituksen ja rakensimme yritykselle digitaalisen riskienhallintamallin.",
        quote: "Yhteistyö toi selkeyttä riskienhallintaan ja paransi raportointia merkittävästi."
    },
    {
        id: 2,
        name: "Teollisuus Group",
        description: "Sparrasimme johtoa strategisten riskien tunnistamisessa ja rakensimme jatkuvan riskiseurantamallin.",
        quote: "Ammattilaisten tuki oli ratkaisevaa päätöksenteon kehittämisessä."
    },
    {
        id: 3,
        name: "Maailman vakuutajat Oy",
        description: "Toteutimme hybridinä, tarvittava määrä konsultointia sekä kokonaisvaltainen alustan käyttöoikeus.",
        quote: "Riskeeraajien hybridi toteutus soveltui hyvin yrityksellemme. Saimme tarvittavan määrän konsultaatiota kun oma osaamisemme ei riittänyt vaikka riskien hallinta alusta oli todella helppo käyttöinen."
    },
    {
        id: 4,
        name: "Lorem Oy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
    },
    {
        id: 5,
        name: "Lorem Oy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
    },
    {
        id: 6,
        name: "Lorem Oy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
    },
    {
        id: 7,
        name: "Lorem Oy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
    }
];

const container = document.getElementById("references-container");

if(container){
    references.map(ref => {
        const card = document.createElement("div");
        card.classList.add("reference-card");

        card.innerHTML = `
            <div id="${ref.id}">
            <span>${ref.name}</span>
            </div>
            <blockquote>"${ref.quote}"</blockquote>
            <p>${ref.description}</p>
        `;

        container.appendChild(card);
    });
}


// CONTACT 

const form = document.getElementById("contactForm");

if(form){
    const originalForm = form.innerHTML;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Estää sivun reloadin
        
        form.innerHTML = `
        <div class="success-box">
        <h3>Kiitos yhteydenotostasi!</h3>
        <p>Palaamme asiaan mahdollisimman pian.</p>
        </div>
        `;

        // Palauta lomake 6 sekunnin kuluttua
        setTimeout(() => {
            form.innerHTML = originalForm;
        }, 6000);
    });
}
        

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener('click', function(e) {

        const targetId = this.getAttribute('href');

        if (targetId && targetId !== "#") {

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth'
                });

            }

        }

    });

});


// WhatsApp Number

const whatsappNumber = "917509970907";


// Header Button - Get ID WhatsApp

function showMessage() {

    window.open(
        "https://wa.me/" + whatsappNumber,
        "_blank"
    );

}


// Hero Explore Button

function exploreGames() {

    const gamesSection = document.querySelector('#games');

    if (gamesSection) {

        gamesSection.scrollIntoView({
            behavior: 'smooth'
        });

    }

}


// Floating Contact Button - WhatsApp

function contactUs() {

    window.open(
        "https://wa.me/" + whatsappNumber,
        "_blank"
    );

}


// IPL IMAGE - WhatsApp

const whatsappImage = document.querySelector('.whatsapp-image');

if (whatsappImage) {

    whatsappImage.style.cursor = "pointer";

    whatsappImage.addEventListener('click', function() {

        window.open(
            "https://wa.me/" + whatsappNumber,
            "_blank"
        );

    });

}


// ALL TOP GAME CARDS - WhatsApp

document.querySelectorAll('.top-game-card').forEach(function(card) {

    card.style.cursor = "pointer";

    card.addEventListener('click', function() {

        window.open(
            "https://wa.me/" + whatsappNumber,
            "_blank"
        );

    });

});

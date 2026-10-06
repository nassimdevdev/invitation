document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const instructionText = document.getElementById('instruction-text');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    
    // Select the new food elements from your HTML
    const menuCard = document.getElementById('menu-card');
    const foodOptions = document.querySelectorAll('input[name="food"]');
    const submitFoodBtn = document.getElementById('submit-food-btn');
    
    let isOpen = false;

    // Gestion de l'ouverture au clic sur l'enveloppe
    envelope.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && !isOpen) {
            envelope.classList.add('open');
            isOpen = true;
            instructionText.innerText = "jareb 9oul lee trah 😉";
        }
    });

    // Effet humoristique : Le bouton "Non" s'échappe au survol ou au clic tactile
    const flyAway = () => {
        if (!isOpen) return;
        const x = Math.random() * 160 - 80;
        const y = Math.random() * 160 - 80;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    };

    noBtn.addEventListener('mouseover', flyAway);
    noBtn.addEventListener('touchstart', flyAway);

    // Quand elle clique sur "ey" (Oui)
    yesBtn.addEventListener('click', () => {
        // Pluie massive de cœurs
        for (let i = 0; i < 40; i++) {
            setTimeout(createHeart, i * 100);
        }
        
        // Hide the envelope framework
        envelope.style.display = "none";
        
        // Reveal the food selection card
        menuCard.style.display = "block";
        instructionText.innerHTML = "<strong>Ekhtar chnowa bech neklo... 🥰</strong>";
    });

    // Active le bouton une fois qu'elle choisit une option
    foodOptions.forEach(option => {
        option.addEventListener('change', () => {
            submitFoodBtn.disabled = false;
        });
    });

    // Écran de confirmation final après avoir cliqué sur "C'est bon!"
    submitFoodBtn.addEventListener('click', () => {
        const selectedFood = document.querySelector('input[name="food"]:checked').value;
        
        // Nouvelle explosion de cœurs
        for (let i = 0; i < 30; i++) {
            setTimeout(createHeart, i * 80);
        }

        instructionText.innerHTML = "<strong>jaw ay taw nrak7o el wa9t ❤️✨</strong>";
        
        menuCard.innerHTML = `
            <h2 style="color: #ff477e; font-size: 1.6rem; margin-bottom: 10px; font-family: 'Georgia', serif;">Aya behi! 🎉</h2>
            <p style="font-size: 1.1rem; line-height: 1.5; font-family: 'Georgia', serif; color: #333;">
                Moch normal, bech neklo <strong>${selectedFood}</strong>! <br><br>
                Hadher rouhek mela ❤️
            </p>
        `;
    });
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    const size = Math.random() * 20 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 2 + 's';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

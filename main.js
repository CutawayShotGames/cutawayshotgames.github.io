document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('#nav-links a');
    
    // Define page content
    const pages = {
        home: `
            <img src="cutawayshotgames.png" alt="CSG Logo" width="200" style="display: block; margin: 0 auto;">
            <div class="hero">
                <h1>Welcome to Cutaway Games</h1>
                <p>Games designed to take cutaways from the stress that surrounds us.</p>

 <p>Cutaway Games focuses on delivering engaging and immersive gaming experiences across various platforms, mainly for mobile devices and PC.
We prioritise fun and intriguing experiences and unique genres to stand out in the gaming market.
Consisting of a team of skilled and motivated video game / software developers, we work collaboratively to bring our creative vision to life. We also act as video game publishers.</p>
            </div>
            
            
        `,
        
        games: `
            <h1 style="text-align: center; margin-bottom: 2rem;">Our Games</h1>
            <div class="grid">
                <div class="card">
                    <img src="cbtd.png" alt="CountryBalls Tower Defense" class="card-img">
                    <div class="card-content">
                        <h3>Countryballs: Tower Defense</h3>
                        <p>Countryballs: Tower Defense is a fresh addition to the Countryball franchise, which features different countryballs with different abilities to fight rockets and save the world!</p>
                        <p><strong>Platforms: </strong> Android, PC(Coming Soon)</p>
                        <a href="https://play.google.com/store/apps/details?id=com.PruzVesco.CountryballsTowerDefense" class="btn" style="margin-top: 1rem;">Play Now</a>
                    </div>
                </div>
                
                <div class="card">
                    <img src="cbmg.png" alt="Countryballs: Minigames" class="card-img">
                    <div class="card-content">
                        <h3>Countryballs: Minigames</h3>
                        <p>This game is pure challenge! In many different minigames, beat your own highscore to climb the ranks. You will find yourself in a leaderboard where you can compare your best scores with others.</p>
                        <p><strong>Platforms: </strong> Android</p>
                        <a href="https://play.google.com/store/apps/details?id=com.CutawayShotGames.CountryballsMinigames" class="btn" style="margin-top: 1rem;">Play Now</a>
                    </div>
                </div>
                
                <div class="card">
                    <img src="cbzh2.png" alt="Countryballs: Zombie Hunt" class="card-img">
                    <div class="card-content">
                        <h3>Countryballs: Zombie Hunt</h3>
                        <p>A world-wide zombie epidemic broke out. Quick, defeat the waves of zombies to save the world!</p>
                        <p><strong>Platforms: </strong> Android</p>
                        <a href="https://play.google.com/store/apps/details?id=com.CutawayShotGames.CountryballsZombieHunt" class="btn" style="margin-top: 1rem;">Play Now</a>
                    </div>
                </div>
                
                <div class="card">
                    <img src="thcg.png" alt="The Hardest Countryballs Game" class="card-img">
                    <div class="card-content">
                        <h3>The Hardest Countryballs Game</h3>
                        <p>Jump right into the worlds most difficult countryballs game, a game featuring several very hard levels all around the world with collectable artefacts.
Beat your own times and become the very best.</p>
                        <p><strong>Platforms: </strong>Mobile</p>
                        <a href="https://play.google.com/store/apps/details?id=com.CutawayShotGames.TheHardestCountryballsGame" class="btn" style="margin-top: 1rem;">Play Now</a>
                    </div>
                </div>

                <div class="card">
                    <img src="alh.png" alt="Ace's Learning Hub" class="card-img">
                    <div class="card-content">
                        <h3>Ace's Learning Hub</h3>
                        <p>Prepare for your upcoming school exams with confidence using Ace, your ultimate study companion! Whether you're struggling to find the right study methods or aiming to ace your tests, Ace has got you covered.</p>
                        <p><strong>Platforms: </strong>Mobile</p>
                        <a href="https://play.google.com/store/apps/details?id=com.cutawayshotgames.Aceslearninghub" class="btn" style="margin-top: 1rem;">Play Now</a>
                    </div>
                </div>

                <div class="card">
                    <img src="20cq.png" alt="20th Century Quiz" class="card-img">
                    <div class="card-content">
                        <h3>20th Century Quiz</h3>
                        <p>The twentieth century (1900-1999) was full of important breakthroughs as well as huge catastrophes. Improve your trivia about this century with this app by answering diverse multiple choice questions and beat your own highscore!</p>
                        <p><strong>Platforms: </strong>Mobile</p>
                        <a href="https://play.google.com/store/apps/details?id=com.OblivityStudios.TwentiethCenturyQuiz" class="btn" style="margin-top: 1rem;">Play Now</a>
                    </div>
                </div>
            </div>
        `,
        
        team: `
            <h1 style="text-align: center; margin-bottom: 2rem;">Our Team</h1>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">We're a diverse group of passionate developers, artists, and storytellers committed to creating unforgettable gaming experiences.</p>
            
            <div class="grid">
                <div class="card team-member">
                    <img src="nk.png" alt="nk">
                    <div class="card-content">
                        <h3>Niels Kochert</h3>
                    </div>
                </div>
                
                <div class="card team-member">
                    <img src="pd.png" alt="pd">
                    <div class="card-content">
                        <h3>Pabak Dev</h3>
                    </div>
                </div>
                
                <div class="card team-member">
                    <img src="st.png" alt="st">
                    <div class="card-content">
                        <h3>Saba Tsitaishvili</h3>
                    </div>
                </div>
                
<div class="card team-member">
                    <img src="mj.png" alt="mj">
                    <div class="card-content">
                        <h3>Mohamad Hani Janaty</h3>
                    </div>
                </div>
                
                <div class="card team-member">
                    <img src="pb.png" alt="pb">
                    <div class="card-content">
                        <h3>P.B.</h3>
                    </div>
                </div>
                
        `,
        
        software: `
            <h1 style="text-align: center; margin-bottom: 2rem;">Our Software</h1>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">Beyond games, we develop cutting-edge software tools for game creators and interactive media professionals.</p>
            
            <div class="grid">
                <div class="card">
                    <img src="fire2d.png" alt="Fire2D" class="card-img">
                    <div class="card-content">
                        <h3>Fire2D Framework</h3>
                        <p>A game framework with API inspired by fantasy consoles</p>
                        <a href="https://cutawayshot-games.itch.io/fire2d-game-framework" class="btn">Learn More</a>
                    </div>
                </div>
                
                <div class="card">
                    <img src="neskit.png" alt="NESkit" class="card-img">
                    <div class="card-content">
                        <h3>NESkit</h3>
                        <p>An easy to use development kit for Nintendo Entertainment System</p>
                        <a href="https://cutawayshot-games.itch.io/neskit" class="btn">Learn More</a>
                    </div>
                </div>
                
                <div class="card">
                    <img src="8bit.png" alt="8-BitStudio" class="card-img">
                    <div class="card-content">
                        <h3>8-Bit Studio</h3>
                        <p>A very simple music creation tool, compatible with NESkit</p>
                        <a href="https://cutawayshot-games.itch.io/8-bit-studio" class="btn">Learn More</a>
                    </div>
                </div>
                
                <div class="card">
                    <img src="supershield.png" alt="SuperShield" class="card-img">
                    <div class="card-content">
                        <h3>SuperShield</h3>
                        <p>An affordable but strong DRM solution for indie devs</p>
                        <a href="https://cutawayshot-games.itch.io/supershield" class="btn">Learn More</a>
                    </div>
                </div>
            </div>
        `,
        
        contact: `
            <h1 style="text-align: center; margin-bottom: 2rem;">Contact Us</h1>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">Have questions, feedback, or want to work with us? We'd love to hear from you!</p>
            
            <div class="grid" style="grid-template-columns: 1fr 1fr;">
                <div class="card">
                    <div class="card-content">
                         <h3>Legal Notice</h3>
                        <p><i class="fas fa-envelope" style="color: var(--primary); margin-right: 10px;"></i>Name: Niels Kochert</p>
                        <p><i class="fas fa-phone" style="color: var(--primary); margin-right: 10px;"></i>Address: Thomas-Mann-Strasse 17, 68799 Reilingen</a></p>
                        <p><i class="fas fa-envelope" style="color: var(--primary); margin-right: 10px;"></i>E-Mail: kochertn@gmail.com</p>
                        <p><i class="fas fa-phone" style="color: var(--primary); margin-right: 10px;"></i>Phone number: +49 170 7449060</a></p>

                        <h3>Get In Touch</h3>
                        <p><i class="fas fa-envelope" style="color: var(--primary); margin-right: 10px;"></i>pruzvescocbtd@gmail.com</p>
                        <p><i class="fas fa-phone" style="color: var(--primary); margin-right: 10px;"></i>Discord <a href="https://discord.gg/kaK6BXpdfV">Link</a></p>
                    </div>
                </div>
                
            </div>
        `
    };
    
    // Function to load page content
    function loadPage(page) {
        contentDiv.innerHTML = pages[page];
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.id === page) {
                link.classList.add('active');
            }
        });
        
        // Add form submission handler if on contact page
        if (page === 'contact') {
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                });
            }
        }
    }
    
    // Set up navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.id;
            loadPage(page);
            // Update URL without page reload
            history.pushState(null, null, this.href);
        });
    });
    
    // Handle back/forward browser navigation
    window.addEventListener('popstate', function() {
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
        loadPage(currentPage);
    });
    
    // Load initial page based on URL
    const initialPage = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
    loadPage(initialPage);
});
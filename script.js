function showFact(){

    const facts = [
        "I bought a Kawasaki Blue Racket for a 2025 Badminton Game at work, then had it benched for a year due to impulsive buying!",
        "I joined Comshots on February 2026 and I am on my 6th game this Mid-March of 2026!",
        "My goal is to play 25-30 Day Badminton Doubles Queues yearly with a minimum of 100 matches for 2026!",
        "I have a manuscript pending since 2016 which I'm writing for my love for mechatronics and its interaction with humanity.",
        "I like sketching and painting birds. Their skill for flight must have privileged them to see the sun closer than myself.",
        "I am a protestant and previously worked as a Sunday School Teacher. I still believe in the wonders of the Almighty Father!",
        "I still fear that AI will take over our jobs and that I am part of accelerating it in the hardware level as a Test Product Engineer",
        "I was born in San Pablo City, Laguna. I took my elementary and high school teachings in Davao City, Dava Del Sur. Now, I live in Dasmarinas City, Cavite for work."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("fact").innerText = randomFact;
}
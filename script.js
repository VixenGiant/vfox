function showFact(){

    const facts = [
        "I enjoy learning how websites work.",
        "Badminton is one of my favorite sports.",
        "I like experimenting with music samples."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("fact").innerText = randomFact;
}
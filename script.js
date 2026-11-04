
const enterButton = document.getElementById("enterButton");
const message = document.getElementById("message");

enterButton.addEventListener("click", function() {
    message.innerHTML = `
        <h2>
            Miguel = HETERO
            <br>
            Sempre o mais aurudo do mundo
            <br>
            100000000<sup>1000</sup> × melhor do que o Heitor
        </h2>

        <p class="aura">
            + ♾️ De aura
            <br>
            porque eu quero
        </p>
    `;

    enterButton.style.display = "none";
});

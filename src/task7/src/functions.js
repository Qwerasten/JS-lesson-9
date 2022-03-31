export function addChangeVisibilityListener() {
    const input = document.getElementById("paragraph_text");
    const button = document.getElementById("add_paragraph");

    input.addEventListener("input", () => {
        button.style.visibility = input.value ? "visible" : "hidden";
    });
}

export function addClickListener() {
    const input = document.getElementById("paragraph_text");
    const button = document.getElementById("add_paragraph");

    let parCounter = 3;
    button.addEventListener("click", () => {
        const allParagraps = document.getElementsByTagName("p");
        const par = document.createElement("p");
        par.textContent = input.value;
        input.before(par);
        parCounter++;
        if (parCounter > 5) {
            allParagraps[0].remove();
        }
    });
}

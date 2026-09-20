const typesGrid = document.getElementById("types-grid");


function renderTypes() {

    Object.entries(types).forEach(([typeName, typeData]) => {

        const drawer = document.createElement("article");

        drawer.classList.add("type-drawer");

        drawer.style.setProperty(
            "--type-color",
            typeColors[typeName]
        );


        const descriptionHTML = typeData.description
            .map(paragraph => `<p>${paragraph}</p>`)
            .join("");


        drawer.innerHTML = `

            <button class="drawer-header">

                <h2>
                    ${typeName}
                </h2>

                <span class="drawer-symbol">
                    +
                </span>

            </button>


            <div class="drawer-content">

                <div class="drawer-inner">


                    <div class="dossier-section">

                        <span class="dossier-label">
                            Social Role
                        </span>

                        <div class="dossier-value">
                            ${typeData.role}
                        </div>

                    </div>


                    <div class="dossier-section">

                        <span class="dossier-label">
                            Weapon
                        </span>

                        <div class="dossier-value">
                            ${typeData.weapon}
                        </div>

                    </div>


                    <div class="dossier-section">

                        <span class="dossier-label">
                            Passion
                        </span>

                        <div class="dossier-value">
                            ${typeData.passion}
                        </div>

                    </div>


                    <div class="dossier-section">

                        <span class="dossier-label">
                            Trait Structure
                        </span>

                        <div class="dossier-value dossier-traits">
                            ${typeData.traits}
                        </div>

                    </div>


                    <div class="dossier-description">
                        ${descriptionHTML}
                    </div>


                </div>

            </div>

        `;


        const header =
            drawer.querySelector(".drawer-header");

        const content =
            drawer.querySelector(".drawer-content");

        const symbol =
            drawer.querySelector(".drawer-symbol");


        header.addEventListener("click", () => {

            const isOpen =
                drawer.classList.contains("open");


            drawer.classList.toggle("open");


            if (isOpen) {

                content.style.maxHeight = null;
                symbol.textContent = "+";

            } else {

                content.style.maxHeight =
                    content.scrollHeight + "px";

                symbol.textContent = "−";

            }

        });


        typesGrid.appendChild(drawer);

    });

}


renderTypes();
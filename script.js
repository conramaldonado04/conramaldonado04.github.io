const projects = [
    {
        name: "MediControl",
        icon: "🏥",
        description: "Sistema de gestión hospitalaria con roles diferenciados para médicos y pacientes. Permite registrar, consultar, modificar y eliminar datos clínicos conectándose a una base de datos MySQL en tiempo real. Proyecto final de Programación 1.",
        features: ["Login por rol", "CRUD completo", "BD MySQL", "Gestión clínica"],
        tech: "C++ · MySQL · POO",
        link: "https://github.com/conramaldonado04/Proyecto_medicontrol"
    },
    // Agregá más proyectos acá con el mismo formato
];

const container = document.getElementById("projects-container");

projects.forEach((project, i) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const index = String(i + 1).padStart(2, "0");
    const featureTags = project.features
        .map(f => `<span class="feat">${f}</span>`)
        .join("");

    card.innerHTML = `
        <div class="card-top">
            <span class="card-index">${index}</span>
            <span class="card-icon">${project.icon}</span>
        </div>
        <h3>${project.name}</h3>
        <p class="card-desc">${project.description}</p>
        <div class="features">${featureTags}</div>
        <div class="card-footer">
            <span class="tech-label">${project.tech}</span>
            <span class="arrow">↗</span>
        </div>
    `;

    card.addEventListener("click", () => {
        window.open(project.link, "_blank");
    });

    container.appendChild(card);
});

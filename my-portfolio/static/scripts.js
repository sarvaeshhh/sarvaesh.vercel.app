// Import GSAP (using a CDN for simplicity)
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js";
document.head.appendChild(script);

script.onload = () => {
    gsap.from("header h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });

    fetch("/projects")
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById("project-list");
            data.forEach(project => {
                const projectItem = document.createElement("div");
                projectItem.classList.add("project");
                projectItem.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}">View Project</a>
                `;
                projectList.appendChild(projectItem);
            });
        });
};
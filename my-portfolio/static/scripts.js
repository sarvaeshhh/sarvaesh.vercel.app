document.addEventListener('DOMContentLoaded', () => {
    const bgAnimation = document.querySelector('.bg-animation');

    if (bgAnimation) {
        const canvas = document.createElement('canvas');
        bgAnimation.appendChild(canvas);
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const particleCount = 50;

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.size > 0.2) this.size -= 0.1;
            }

            draw() {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)'; // Accent color
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
        }

        function init() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push(new Particle(x, y));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                if (particles[i].size <= 0.2) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            // Recycle particles
            if (particles.length < particleCount) {
              const x = Math.random() * canvas.width;
              const y = Math.random() * canvas.height;
              particles.push(new Particle(x,y));
            }
            requestAnimationFrame(animate);
        }

        init();
        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(); // Re-initialize particles on resize
        });
    }

    // Placeholder for project loading - replace with actual project data
    const projectList = document.getElementById('project-list');
    if (projectList) {
        // Example project data - replace with actual data fetching
        const projects = [
            { title: "Project 1", description: "Description of Project 1", link: "#" },
            { title: "Project 2", description: "Description of Project 2", link: "#" },
            { title: "Project 3", description: "Description of Project 3", link: "#" }
        ];

        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="button">View Project</a>
            `;
            projectList.appendChild(projectDiv);
        });
    }
});
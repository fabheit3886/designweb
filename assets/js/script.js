const projectsData = {
    scoreboard: {
        number: "01",
        title: "FRNLP SCOREBOARD",
        description: "Sistema de gerenciamento e visualização de placares para competições de jiu-jitsu.",
        technologies: ["HTML", "CSS", "JS"],
        link: "https://frnlp-scoreboard-system.vercel.app/",
        github: "https://github.com/fabheit3886/frnlp-scoreboard-system"
    },
    cajufestival: {
        number: "02",
        title: "CAJUFESTIVAL",
        description: "Plataforma web interativa desenvolvida para apresentação e gestão do evento CajuFestival.",
        technologies: ["HTML", "CSS", "JS"],
        link: "https://integrador-hotsite-eventos-75vi.vercel.app/",
        github: "https://github.com/fabheit3886/integrador-hotsite-eventos"
    },
    portfolio: {
        number: "03",
        title: "PORTFOLIO",
        description: "Meu portfólio pessoal apresentando minha trajetória, competências e projetos na área de tecnologia.",
        technologies: ["HTML", "SCSS", "JS"],
        link: "https://designweb-beta.vercel.app/",
        github: "https://github.com/fabheit3886/portfolio"
    }
};

const mainNumber = document.querySelector('#project-main .project-number');
const mainTitle = document.getElementById('project-title');
const mainDesc = document.getElementById('project-description');
const mainTechContainer = document.getElementById('project-technologies');
const mainLink = document.getElementById('project-link');
const mainGithub = document.getElementById('project-github');

const secondaryButtons = document.querySelectorAll('.project-secondary');

function updateMainProject(projectKey) {
    const project = projectsData[projectKey];

    if (!project) return;

    const mainCard = document.getElementById('project-main');
    mainCard.style.opacity = '0.4';

    setTimeout(() => {
        mainNumber.textContent = project.number;
        mainTitle.textContent = project.title;
        mainDesc.textContent = project.description;
        mainLink.href = project.link;
        mainGithub.href = project.github;

        mainTechContainer.innerHTML = project.technologies
            .map(tech => `<span>${tech}</span>`)
            .join(' <span>•</span> ');

        mainCard.style.opacity = '1';
    }, 150);
}

secondaryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectKey = button.getAttribute('data-project');
        
        secondaryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        updateMainProject(projectKey);
    });
});
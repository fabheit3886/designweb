// 1. Objeto contendo os dados de todos os projetos
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
        technologies: ["HTML", "SASS", "JS"],
        link: "https://cajufestival.vercel.app/",
        github: "https://github.com/fabheit3886/cajufestival"
    },
    portfolio: {
        number: "03",
        title: "PORTFOLIO",
        description: "Meu portfólio pessoal apresentando minha trajetória, competências e projetos na área de tecnologia.",
        technologies: ["HTML", "SCSS", "JS"],
        link: "#",
        github: "https://github.com/fabheit3886/portfolio"
    }
};

// 2. Seleção dos elementos do painel principal
const mainNumber = document.querySelector('#project-main .project-number');
const mainTitle = document.getElementById('project-title');
const mainDesc = document.getElementById('project-description');
const mainTechContainer = document.getElementById('project-technologies');
const mainLink = document.getElementById('project-link');
const mainGithub = document.getElementById('project-github');

// 3. Seleção dos botões secundários
const secondaryButtons = document.querySelectorAll('.project-secondary');

// 4. Função para atualizar as informações do projeto principal
function updateMainProject(projectKey) {
    const project = projectsData[projectKey];

    if (!project) return;

    // Efeito suave de transição (opcional)
    const mainCard = document.getElementById('project-main');
    mainCard.style.opacity = '0.4';

    setTimeout(() => {
        // Atualiza textos e links
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
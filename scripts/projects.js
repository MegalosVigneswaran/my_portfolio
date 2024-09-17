document.addEventListener('DOMContentLoaded', () => {
    const pmb = document.querySelector('.pmb');
    const promenu = document.querySelector('.promenu');
    const closebutton = document.querySelector('.pmclosebutton');

    pmb.addEventListener('click', () => {
        promenu.classList.toggle('show');
    });
    closebutton.addEventListener('click', () => {
        promenu.classList.remove('show');
    });
    document.addEventListener('click', (event) => {
        if (!promenu.contains(event.target) && !pmb.contains(event.target)) {
            promenu.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const projectSpace = document.getElementById('projectspace');
    const jsonURL = 'https://raw.githubusercontent.com/MegalosVigneswaran/my_portfolio/master/data/projects.json';

    fetch(jsonURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok (${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            const projects = data.projects;
            for (const [projectName, projectDetails] of Object.entries(projects)) {
                const [description, imageURL] = projectDetails;

                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project');

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');

                const img = document.createElement('img');
                img.src = imageURL;
                img.alt = projectName;
                imageContainer.appendChild(img);

                const title = document.createElement('h5');
                title.textContent = projectName;

                const desc = document.createElement('p');
                desc.textContent = description;

                const buttonContainer = document.createElement('center');
                const button = document.createElement('button');
                button.classList.add('smb');
                button.textContent = 'KNOW MORE →';
                buttonContainer.appendChild(button);

                projectDiv.appendChild(imageContainer);
                projectDiv.appendChild(title);
                projectDiv.appendChild(desc);
                projectDiv.appendChild(buttonContainer);

                projectSpace.appendChild(projectDiv);
            }
        })
        .catch(error => {
            console.error('Error fetching the projects JSON:', error);
            projectSpace.innerHTML = '<p style="color: red; text-align: center;">Failed to load projects.</p>';
        });
});

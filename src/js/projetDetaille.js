export function detaille() {
    document.querySelectorAll('.view-project').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = button.getAttribute('data-project');
            const projectCard = document.getElementById(projectId);
            projectCard.classList.add('show');
        });
    });

    document.querySelectorAll('.close-card').forEach(button => {
        button.addEventListener('click', () => {
            const projectCard = button.closest('.project-details-card');
            projectCard.classList.remove('show');
        });
    });
}

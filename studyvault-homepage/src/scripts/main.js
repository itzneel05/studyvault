// This file contains the JavaScript code for the home page. It handles any dynamic behavior, such as event listeners and data fetching.

document.addEventListener('DOMContentLoaded', () => {
    // Fetch courses data from the JSON file
    fetch('./data/courses.json')
        .then(response => response.json())
        .then(data => {
            const coursesContainer = document.getElementById('courses');
            data.courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.classList.add('course');
                courseElement.innerHTML = `
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                `;
                coursesContainer.appendChild(courseElement);
            });
        })
        .catch(error => console.error('Error fetching courses:', error));

    // Example of an event listener for a button
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            alert('Contact us at support@studyvault.com');
        });
    }
});
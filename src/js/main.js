const loadCourses = async () => {
    try {
        const response = await fetch('./src/data/courses.json');
        const courses = await response.json();
        displayCourses(courses);
    } catch (error) {
        console.error('Error loading courses:', error);
    }
};

const displayCourses = (courses) => {
    const coursesContainer = document.getElementById('courses-container');
    courses.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesContainer.appendChild(courseCard);
    });
};

const createCourseCard = (course) => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <p><strong>Level:</strong> ${course.level}</p>
        <p><strong>Price:</strong> $${course.price.toFixed(2)}</p>
    `;
    return card;
};

document.addEventListener('DOMContentLoaded', loadCourses);
# StudyVault Homepage

Welcome to the StudyVault project! This repository contains the source code for the StudyVault website, which provides a platform for online courses.

## Project Structure

The project is organized as follows:

- **index.html**: The main entry point for the website.
- **404.html**: A custom 404 error page.
- **CNAME**: A file for setting a custom domain for the GitHub Pages site.
- **_config.yml**: Configuration settings for the GitHub Pages site.
- **.github/workflows/github-pages.yml**: GitHub Actions workflow for deploying the site.
- **src/data/courses.json**: JSON file containing course data.
- **src/js/main.js**: JavaScript file for loading and displaying course data.
- **src/css/styles.css**: CSS file for styling the website.
- **src/components/course-card.html**: HTML file defining the course card component.
- **assets/fonts/README.md**: Information about the fonts used in the project.
- **assets/icons/README.md**: Information about the icons used in the project.
- **package.json**: Configuration file for npm dependencies and scripts.
- **.gitignore**: Specifies files and directories to be ignored by Git.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd studyvault-homepage
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Open `index.html` in your browser to view the website.

## Usage

The StudyVault website allows users to explore various online courses. Each course is displayed with its title, description, duration, level, and price. The data is dynamically loaded from the `courses.json` file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
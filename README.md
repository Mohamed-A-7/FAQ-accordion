# FAQ Accordion Project

### Project Links
- **GitHub Repository**: [FAQ-accordion Repository](https://github.com/Mohamed-A-7/FAQ-accordion)
- **Live Demo**: [FAQ-accordion Live](https://mohamed-a-7.github.io/FAQ-accordion/)

---

### Description

This project is a **FAQ (Frequently Asked Questions) Accordion** page where users can toggle between showing and hiding answers to questions by clicking on icons. The idea is to provide a clean, interactive experience, letting users view answers without clutter.

---

### Structure

#### HTML
- The page contains a list of questions within `.question-box`, where each question has a title (the question itself) and an icon (either `+` or `-`) to toggle the answer.
- Key elements:
  - `.question-head`: Contains the question and toggle icon.
  - `.question-answer`: Contains the answer, which is hidden initially using the `.hidden` class.

#### CSS
- **CSS variables** define colors and themes (like `--main-color` and `--dark-purple`) to keep a consistent look.
- Background styling uses the `::before` pseudo-element to add a design to the top part of the page.
- A hover effect is applied to questions to change the color slightly when hovered.

#### JavaScript
- The JavaScript uses `forEach` with `addEventListener` to handle the toggle behavior:
  - It first hides any visible answers and sets all icons to `+`.
  - Then, it shows the answer for the clicked question and changes the icon to `-` for an open state.

---

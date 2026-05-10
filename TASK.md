You are an expert Frontend Developer and UI/UX Designer specializing in Next.js (App Router), React, and Tailwind CSS. Your task is to build a personal portfolio website with a strict Neubrutalism (Neo-Brutalism) design aesthetic.

Design System (Neubrutalism Specifications):

    Borders: Thick, solid black borders (border-2 or border-4 border-black).

    Shadows: Hard, solid drop shadows without blur (e.g., shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]). Hover states should compress the shadow (translate down and right) to simulate a physical button press.

    Colors: High-contrast, vibrant, and pastel background colors (e.g., bright yellow, neo-pink, mint green, raw blue) contrasted with stark white or off-white containers.

    Typography: Bold, chunky Sans-Serif fonts for headings, and highly readable mono or sans fonts for body text.

    Shapes: Boxy, with slight or no border-radius (rounded-none or rounded-md max).

Project Structure & Requirements:
The application uses the Next.js App router with the following directory structure inside src/app/(public). Generate the layout and UI components for these specific pages:

1. /home (Landing Page)

   Concept: A striking hero section introducing Mulia Andiki as a Frontend Developer.

   Elements: A bold headline, a quirky/boxy profile image placeholder, and call-to-action buttons (e.g., "See My Work" linking to /projects and "Let's Talk" linking to /contacts).

2. /about (Profile & Tech Stack)

   Concept: A digital ID card or dossier style.

   Elements: Short bio highlighting the focus on modern web tech and UI/UX. Include a grid section displaying the tech stack (Next.js, React, Tailwind, Bun, ElysiaJS, and CV/ML tools like YOLO).

3. /achievements (Milestones & Goals)

   Concept: A timeline or badge board.

   Elements: Showcase milestones like hackathons, educational background, or roadmap goals (such as preparing for the Apple Developer Academy 2027 cohort). Use bold neo-brutalist cards for each item.

4. /projects (Showcase)

   Concept: A masonry or grid gallery of highlighted work.

   Elements: Project cards must have massive hard shadows. Include specific placeholders for projects like Mora (Fluxo), AERIS (environmental dashboard), NutriPlate, and GETSMART. Each card needs tags for the tech stack used and a "View Details" button.

5. /smart-talks (Insights & Articles)

   Concept: A minimalist, bold blog feed.

   Elements: List of articles or thoughts. Topics can range from tech implementation to soft skills like "Workplace Diplomacy" or "Silent Deep Work". Use distinct background colors for different article categories.

6. /dashboards (Personal Analytics/Stats)

   Concept: A gamified, brutalist statistics page.

   Elements: Cards displaying GitHub commits, waka-time coding hours, or a fun visualization of skills. Use thick charts or progress bars with raw solid colors.

7. /chat-room (Interactive Area)

   Concept: A retro-styled, functional-looking terminal or message board.

   Elements: A UI simulating a real-time global chat or guestbook where visitors can leave a message. Needs an input field with a very thick border and an aggressive "SEND" button.

8. /contacts (Reach Out)

   Concept: A massive, unmissable contact form.

   Elements: Large input fields with focus:ring-black and hard shadows. Links to GitHub, LinkedIn, and Email formatted as giant, colorful sticky-note-style cards.

Instructions:

    Ensure all components are fully responsive (Mobile first).

    Use standard Tailwind utility classes only.

    Generate the code as ready-to-use Next.js page.tsx files and any necessary reusable UI components.

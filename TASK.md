You are an expert Frontend Developer and UI/UX Designer specializing in Next.js (App Router), React, and Tailwind CSS. Your task is to build a personal portfolio website with a strict Neubrutalism (Neo-Brutalism) design aesthetic.

Personal Context & Content Payload (Inject these details directly into the UI text/placeholders):

    Name & Identity: Mulia Andiki, a 6th-semester university student and Frontend Developer based in Aceh, Indonesia.

    Tech Stack Focus: Next.js, React, Tailwind CSS, Bun, ElysiaJS, with a growing interest in integrating Machine Learning/Computer Vision (YOLO, TensorFlow.js) and 3D assets into modern web interfaces.

    Specific Projects (to populate the /projects page):

        MORA: Frontend development for MORA, an innovative startup focusing on smart assistant and IoT platforms for high-end residential markets.

        AERIS: An environmental dashboard visualizing real-time air quality, weather, and disaster risk data (integrated with Open-Meteo & API-Ninjas).

        NutriPlate: An IoT/PWA platform using YOLOv8 for child nutrition classification.

        GETSMART (GetMath): A learning analytics platform featuring forum discussions, Google OAuth, and dedicated dashboards.

    Milestones & Goals (to populate the /achievements page): Currently building a highly competitive portfolio to apply for the Apple Developer Academy 2027 cohort (Application target: before June 15, 2026). Background in Natural Sciences (IPA).

    Insights Topics (to populate the /smart-talks page): Topics should revolve around technical implementations, crafting an "English learning roadmap for software engineers," and soft skills focused on team leadership like "Workplace Diplomacy" and "Silent Deep Work."

Design System (Neubrutalism Specifications):

    Borders: Thick, solid black borders (border-2 or border-4 border-black).

    Shadows: Hard, solid drop shadows without blur (e.g., shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]). Hover states should compress the shadow (translate down and right) to simulate a physical button press.

    Colors: High-contrast, vibrant, and pastel background colors (e.g., bright yellow, neo-pink, mint green, raw blue) contrasted with stark white or off-white containers. Use solid hex codes.

    Typography: Bold, chunky Sans-Serif fonts for headings, and highly readable mono or sans fonts for body text.

    Shapes: Boxy, with slight or no border-radius (rounded-none or rounded-md max).

Project Structure & Requirements:
The application uses the Next.js App router with the following directory structure inside src/app/(public). Generate the layout and UI components for these specific pages:

    /home (Landing Page)
    Concept: A striking hero section introducing Mulia Andiki as a Frontend Developer.
    Elements: A bold headline, a quirky/boxy profile image placeholder, and call-to-action buttons (e.g., "See My Work" linking to /projects and "Let's Talk" linking to /contacts).

    /about (Profile & Tech Stack)
    Concept: A digital ID card or dossier style.
    Elements: Short bio highlighting the focus on modern web tech and UI/UX. Include a grid section displaying the tech stack (Next.js, React, Tailwind, Bun, ElysiaJS, and CV/ML tools like YOLO).

    /achievements (Milestones & Goals)
    Concept: A timeline or badge board.
    Elements: Showcase milestones like hackathons, educational background, or roadmap goals (such as preparing for the Apple Developer Academy 2027 cohort). Use bold neo-brutalist cards for each item.

    /projects (Showcase)
    Concept: A masonry or grid gallery of highlighted work.
    Elements: Project cards must have massive hard shadows. Include specific placeholders for projects like MORA, AERIS, NutriPlate, and GETSMART. Each card needs tags for the tech stack used and a "View Details" button.

    /smart-talks (Insights & Articles)
    Concept: A minimalist, bold blog feed.
    Elements: List of articles or thoughts. Topics can range from tech implementation to soft skills like "Workplace Diplomacy" or "Silent Deep Work". Use distinct background colors for different article categories.

    /dashboards (Personal Analytics/Stats)
    Concept: A gamified, brutalist statistics page.
    Elements: Cards displaying waka-time coding hours or a fun visualization of skills. Crucial Requirement: Include a functional-looking "GitHub Contribution Graph" (a grid calendar of small squares with varying shades of green representing daily commits). This commit graph must be styled to fit the neubrutalism aesthetic (e.g., each green square having a thin black border).

    /chat-room (Interactive Area)
    Concept: A retro-styled, functional-looking terminal or message board.
    Elements: A UI simulating a real-time global chat or guestbook where visitors can leave a message. Needs an input field with a very thick border and an aggressive "SEND" button.

    /contacts (Reach Out)
    Concept: A massive, unmissable contact form.
    Elements: Large input fields with focus:ring-black and hard shadows. Links to GitHub, LinkedIn, and Email formatted as giant, colorful sticky-note-style cards.
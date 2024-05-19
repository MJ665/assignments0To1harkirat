npx create-next-app@latest  

✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
















Step 1 - NextJS Intro, Pre-requisites
Pre-requisites
You need to understand basic Frontend before proceeding to this track.
You need to know what React is and how you can create a simple application in it
NextJS Intro
NextJS was a framework that was introduced because of some minor inconviniences in React
In a React project, you have to maintain a separate Backend project for your API routes
React does not provide out of the box routing (you have to use react-router-dom)
React is not SEO Optimised 
not exactly true today because of React Server components
we’ll discuss soon why
Waterfalling problem
 
Let’s discuss some of these problems in the next slides



























Step 2 - SEO Optimisation
 
Google/Bing has a bunch of crawlers that hit websites and figure out what the website does. 
It ranks it on Google based on the HTML it gets back
The crawlers DONT usually run your JS and render your page to see the final output. 
notion image
💡
While Googlebot can run JavaScript, dynamically generated content is harder for the scraper to index
Try visiting a react website
What does the Googlebot get back when they visit a website written in react?
Try visiting https://blog-six-tan-47.vercel.app/signup
notion image
Googlebot has no idea on what the project is. It only sees Vite + React + TS in the original HTML response.
Ofcourse when the JS file loads eventually, things get rendered but the Googlebot doesn’t discover this content very well.


























Step 3 - Waterfalling problem
Let’s say you built a blogging website in react, what steps do you think the request cycle takes?
notion image
 
notion image
 
Fetching the index.html from the CDN
Fetching script.js from CDN
Checking if user is logged in (if not, redirect them to /login page)
Fetching the actual blogs
There are 4 round trips that happen one after the other (sequentially)
💡
The "waterfalling problem" in React, and more broadly in web development, refers to a scenario where data fetching operations are chained or dependent on each other in a way that leads to inefficient loading behavior.
 
What does nextjs provide you?

























Step 4 - Next.js offerings
Next.js provides you the following upsides over React
Server side rendering - Get’s rid of SEO problems
API routes - Single codebase with frontend and backend
File based routing (no need for react-router-dom)
Bundle size optimisations, Static site generation
Maintained by the Vercel team
 
Downsides - 
Can’t be distributed via a CDN, always needs a server running that does server side rendering and hence is expensive
Very opinionated, very hard to move out of it




























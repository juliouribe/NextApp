/*
Fundamentals of NextJS

What is NextJS?
A framework for building fast and search engine friendly applications. Takes
react and makes it a full stack framework. A framework is a combination of libraries
tools and collections.

NextJS has its own router, a compiler, CLI, and nodeJS runtime. A nodeJS runtime
lets you run programs on the server instead of just on the client.

NodeJS runtime runs the backend code. Frontend code is sent to web browser. We
can do server-side rendering where the server is serving the html code.

Making use of static site generation can help us speed up our app.

When setting up a project:
- yes to typescript, eslint, tailwind, and app router
- no to src/ directory and customize import aliases

Project Structure
- app contains all files
- layout file has children which is replaced by a page dynamically
- page.tsx can be deleted and replace the content in main.
- public folder contains public files like images

Routing
Create a folder in app. Add a 'page.tsx' like index.jsx it is convention.
App router just follows folder structures as url paths and only loads files
called page.tsx. Other files will be ignored. New with app router.

When linking to other pages, don't use the anchor because it makes you reload
the whole page. Use a link so only the content is updated, just like React you
stay on the same page. "Client side navigation"

Client vs Server Components
Client side rendering can become resource intensive, no SEO, and less secure
Server-side rendering smaller bundles, resource efficient, SEO, and more secure

Server components cannot:
- listen to browser events
- use effects
- maintain state
- access browser APIs

Default to server components and only use client side when necessary

Example
Lets say you want to build some shopping app. You would want a:
- navbar, sidebar, productList, productCard, pagination, footer

You can do all of those server side and then have a client side AddToCart button
that is part of ProductCard. Only live render the necessary portions.

Inside of the app folder, all components are server components.

To make a component a client side component, simply add 'use client' on a component.
A better way to do this is to break out the portion of the component you want to
have as a client component and make it its own component. Can be as simple as a
button. Import that into your server side component and boom you're all good.

Feels like a lot of work for a small thing but I'm sure it'll pan out.

Data Fetching
Fetching data on the client can become expensive just like rendering and components.
Whenever you want to fetch data from third party or own backend, use server side
components to fetch the data. You can straight up just do
- const res = await fetch(url)
- const users = await res.json()
- use the data in the component
- consider using an interface like User to help typescript understand what you're using

Caching
Storing data somewhere that is faster to access. We can get data from memory,
file system, and network. The further you go the slower it is.
NextJS has some default caching for fetch requests. You can customize how things
are cached.

We can add a cache options to a fetch call,
- Don't cache this: { cache: 'no-store' }
- Cache for a certain period. Every 10 seconds: { next: { revalidate: 10 }}
- caching behavior is only for fetch function. Won't work for Axios

Static Rendering - render at build time
Dynamic Rendering - render at request time

In the users app, we added some time display. In dev it will refresh and update
but in production it wouldn't. With caching enabled, the component will be treated
as a static page and won't need to re-render. However if caching was disabled it
would re-render for every fetch. Moves teh fetch from at build time to runtime.

When you run 'npm run build' nextjs will create a prod build making static and
non-static pages. The empty circle is a static page. Lambda is a dynamic page.
Still server side but updates for every request.

The globals.css file should only contains rules for truly global rules.

CSS Modules
A CSS file that is scoped to a page or component. Create a file with a
name.module.css format. Can use these styles so don't use hyphens and do pascalCase

Tailwind CSS
Classes that control css
Paddings
p-[number]
px-[number] : horizontal padding
py-[number] : vertical
pt-[number] : top only
...

Margins - same thing
m-[number]
mx-[number]
my-[number]
mt-[number]
...

Text
text-xs
text-sm
text-base
text-lg
text-xl
text-2xl

Color
text-[color]
bg-[color]

Thickness
font-thin
font-light
font-normal
font-medium
font-bold

Nice thing about tailwind is that once you delete the component, you don't need
to remember to delete class selectors from CSS. We also only pack the things we
use.

DaisyUI
Is a popular component library for Tailwind. We can use it like we'd use bootstrap
To install all you need is the following:
plugins: [require("daisyui")],
  daisyUI: {
    themes: ["winter"],
  }
*/

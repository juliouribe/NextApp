/*
Routing and APIs

Special Files
page.tsx: only this file is publicly accessible inside of app
layout.tsx
loading.tsx
route.tsx
not-found.tsx
error.tsx

Create components in the same folder as your page.tsx and import them. These
won't be accessible publicly and can be a nice way to organize your components.

Dynamic routes. Create a folder like this users/[id] and then create a pages.tsx.
Here you can pass in props for a user with a props interface.
interface Props {
  params: { id: number }
}
const UserDetailPage = ( {params: { id } }: Props) => {

If you create more components within the [id] folder, they wont have access to
props from the pathname. You'll need them in as new props when calling the component.

To nest a resource, you create additional folders and to have multiple ids, you
create multiple [_id] folders but need to use different ID names: id, photoId, etc.
Then you can increase the number of variables in props since you're nesting several
IDs.

Passing multiple parameters in a URL
So we the thing with the slugs so you can have a long url with multiple slashes
and we can grab each value from there. To make it optional you wrap the folder
with double brackets and use a triple dot to make it as long as you want [[...slug]]

For sorting with users, we use search params via props. In the page.tsx of the
Users page we made a prop to retrieve the value of sortOrder. Then we passed that
into the Users table where we replaced the th with Links that change the url to
include a sortOrder value. Then we use the library fast-sort to do a sort on the
users array depending on the value of sortOrder which we have in the props. We
used a ternary to toggle between sorting by email and name. No desc logic yet.

Layouts
Did lots of stuff with layouts. Apply a navbar to share across all pages. Made
an admin folder where I defined another layout specifically for admin pages.

Navigation, More on Link
Link only downloads the content of the link url. For example going to the users
page only gets the content of the users page.
Links prefetches links that are in the viewport.
Caches pages on the client

Programmatic Navigation
Submitting a form or clicking on a button are examples of this.

Using the router, make sure you component has 'use client'. Then import the
router. Its import to note that we import from 'next/navigation'.
import { useRouter } from 'next/navigation';
Then call an instance of the router:
const router = useRouter();
Use it in a callback
onClick={() => router.push('/users')}

Loading pages
You can wrap something in the <Suspense fallback={<p>Loading...</p>}> component
to tell your page to render something else while the content is rendering.
You can apply a general loading content for all content in the main layout page
by wrapping it in a Suspense component. Or you can make a loading.tsx inside of
app to achieve the same thing in a cleaner way.

Handling Not Found Pages
We can create a not-found.tsx file at the app level to replace the 404 error
message with a custom not found page. This applies anytime.
For a custom not found page for users, you need to import the notFound function
and then call it to render the not found page in another component that uses a prop.
import { notFound } from 'next/navigation'
notFound();

You can do a custom not found page by simply creating another not-found.tsx file
in the respective component folder.

Create an errors.tsx file to replace the default error page. You cannot catch
errors from layout however. We can use a global-errors.tsx file to capture errors
from layout.
*/

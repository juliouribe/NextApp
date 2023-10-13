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


*/

/*
Next Auth

Download the next auth js or auth.js in the future library.
Update .env with NEXTAUTH_URL="http://localhost:3000" and NEXTAUTH_SECRET.
Use openssl rand -base64 32 to generate a random string.

How to use google cloud for google auth
- create a new project
- on the credentials tab, click on consent screen, external,
- for scopes just email and public personal info
- Once done with the consent screen stuff, go to credentials and create credentials
- Create a new "OAuth client ID", use localhost/3000 for JS origins. Then copy
the URL from the next auth docs for redirect url, callback thing for when google
hands token back to you after a login.
- Go back to the route.jsx file for auth and add the providers with the new env
variables for google client ID and secret.
- Now you can add a link to the navbar and use google auth signin.

Next auth keeps track of tokens under
- next-auth.session-token
- next-auth.callback-url
- next-auth.csrf-token

Use useSession to get user info on client side
const { status, data: session } = useSession();
{status === 'authenticated' && <div>{session.user!.name}</div>}

Use getServerSession(authOptions) to get user info on server side
const session = await getServerSession(authOptions);
<h1>Hello {session && <span>{session.user!.name}</span>}</h1>

Database adapters
Hook up your database to the next auth login process with various providers. Use
the recommended models and schema so when a user uses a provider, we save a record
of their signing and create an account in the database for them. The account table
keeps a record for which provider they used.

We then added a hashed password field and installed bcrypt so we can do custom
user login. Then we added to the providers array to accept more login types.
We used bcrypt to compare hashed passwords with a password from the form.

In the API, we made a register folder so we can register with new credentials.
We only made the backend endpoint and tested it with Postman. Its very similar
to the ruby on rails validation logic even using bcrypt.

For fun you can create a register page later to serve up a form and do validation
as users tried to sign up.

*/

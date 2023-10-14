/*
APIs

Create an api folder under app. Then create the resource/model folder. Then create
a route.tsx folder to specific actions for HTTP request types.

Use NextRequest and NextResponse to handle receiving and sending data.
Next response can take in an error code as well with the first arg being the error
message, and the second arg being another object with a status code number.

Prisma is an ORM. Install it using NPM. Then run 'npx prisma init' to get it
setup. This creates a prisma folder with a schema file. Prisma is an ORM that
will help interface with our DB, just like Django Queries and Ruby on Rails Active Record.

Look at schema and .env for how to setup db connection for mysql. The db connection
string will be different depending on what type of database you want to use.

Create schema
npx prisma init

Running a migration
npx prisma migrate dev

Format schema files
npx prisma format

Use a singleton to setup a prisma client in the prisma folder

More API stuff
You can send a POST without csrf tokens. Kind of crazy. Keep the url the /users
one. To do edits, you change the url to include the ID and set the request type
to PUT. This will update an existing record and still no csrf token.

Working with Prisma Client
await prisma.user.findMany(); get all users
await prisma.user.findUnique({
  where: {
    email: 'a'
  }
}); find one user
await prisma.user.create({
  data: {
    name: 'a',
    email: 'a'
  }
}); create a user
await prisma.user.update({
  where: {
    email: 'a'
  },
  data: {
    email: 'b'
  }
}); update a user
*/

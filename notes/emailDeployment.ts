/*
Emails and deployment

We can send emails using the resend library and react email. We will need to
own a DNS domain.

Optimizing
Use the Image component for static images that are inside of our application for
example in the public folder. Import the file and link it. To use the Image
component for hosted images you need to register valid domains to benefit from
caching.

Sizing for images. Common breakpoint for phones is 480px so when using sizes, you
can set max-width media query for 480px for styling for phones. For tablets its
768 and you can have two columns. For everything else taking up a third of the
screen is good.

max-width: 480px - 100vw
max-width: 768px - 50vw
everything else - 33vw

Use the priority attribute with Image components so it gets loaded before its in view.

For google analytics look up the google tag gtag.js.

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'TAG_ID');
  </script>

Put this in your layout file. Wrap the script stuff in {``}. Use the Script
component instead of the regular element script type.

To prevent layout from getting too big, make another component file in the root
directory. Create a fragment and put your Script components in here and import
it into the layout file.
*/

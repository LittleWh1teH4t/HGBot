![haha yes](https://rei-is-a.good-waifu.pw/MK0RTRF.png)

## Hentai.js ~ A Hentai API wrapper!

An API wrapper for computerfreaker's API endpoints!

**An Example for usage:**
```js
const { HentaiClient } = require("hentai.js");

const hentaiClient = new HentaiClient({
    useragent: "Example/Production/0.0.0" // optional useragent (you'll be given a shitty hentai.js useragent if you don't edit this)
});

// Fetching Hentai

hentaiClient.hentai().then((result) => {
    console.log(result);
});

// Getting hentai.js' version

hentaiClient.version;

// Fetching anime

hentaiClient.anime().then((result) => {
    console.log(result);
});

// Fetching D.VA

hentaiClient.dva().then((result) => {
    console.log(result);
});

// Fetching traps

hentaiClient.trap().then((result) => {
    console.log(result);
});

// Fetching hugs

hentaiClient.hug().then((result) => {
    console.log(result);
});

// Fetching baguettes

hentaiClient.baguette().then((result) => {
    console.log(result);
});
```

Made by snarkyllama™

## Links

computerfreaker's website ~ [Click me!](https://computerfreaker.cf/)
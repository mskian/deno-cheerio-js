# Deno Cheerio

[![Test Scrape](https://github.com/mskian/deno-cheerio-js/actions/workflows/test.yml/badge.svg)](https://github.com/mskian/deno-cheerio-js/actions/workflows/test.yml)
![Deno](https://img.shields.io/badge/Deno-464647?style=for-the-badge&logo=deno&logoColor=white)

Cheerio - Porting Cheerio Node Module To Deno using `esm.sh`

## Prerequisites

- Deno on your System <https://deno.land/#installation>

## Usage

- Cheerio Full Docs and usage - <https://cheerio.js.org/>

```js
import { cheerio } from "https://deno.land/x/denocheerio/mod.ts";

fetch(
  "https://notes.santhoshveer.com/",
)
  .then((result) => result.text())
  .then((html) => {
    const $ = cheerio.load(html);
    const title = $('meta[property="og:title"]').attr("content") ||
      $("title").text() || $('meta[name="title"]').attr("content");
    const description = $('meta[property="og:description"]').attr("content") ||
      $('meta[name="description"]').attr("content");
    console.log(title);
    console.log(description);
  }).catch((error) => {
    console.log(error);
  });
```

## Testing

```sh
deno run --allow-net --allow-read test.ts

or

deno task test
```

## Credits

- cheerio Npm Module - <https://github.com/cheeriojs/cheerio>

## LICENSE

MIT

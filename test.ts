import { cheerio } from "./mod.ts";

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

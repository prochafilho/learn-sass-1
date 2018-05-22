const workshopper = require("workshopper-adventure"),
  path = require("path"),
  learnsass = workshopper({
    title: "Learn SASS",
    appDir: __dirname,
    languages: ["en", "it", "pt-br", "ko", "de"],
    footer: {
      file: path.join(__dirname, "footer.{lang}.md")
    }
  });

learnsass.addAll([
  "variables",
  "nesting",
  "imports",
  "mixins",
  "extend_inheritance",
  "operators",
  "nested_properties",
  "parent_selector",
  "interpolation",
  "each",
  "for_loop",
  "while_loop"
]);

module.exports = learnsass;

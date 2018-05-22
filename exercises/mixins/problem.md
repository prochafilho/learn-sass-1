# MIXINS

Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes.

To create a mixin you use the `@mixin` directive and give it a name.

# EXERCISE

Write a mixin `border` that accepts a variable `$thickness` and sets the `border-width` style to the value of `$thickness`. Then, include the mixin in a rule for the `img` element, and set its border thickness to `10px`.

---
layout: default
---

<div style="text-align: center;">
  
[ABOUT](about.html) | [PROJECTS](projects.html) | [CONTACT](contact.html) | [RESUME & CV](resumecv.html)

</div>

## Headings
Use `#` symbols — one per heading level:

# H1 — Page Title
## H2 — Section
### H3 — Subsection
#### H4
##### H5
###### H6

---

## Text Formatting

**Bold** — wrap in `**double asterisks**`
*Italic* — wrap in `*single asterisks*`
~~Strikethrough~~ — wrap in `~~double tildes~~`
**_Bold and italic_** — combine with `**_text_**`
`Inline code` — wrap in backticks

---

## Links & Images

[Link text](https://example.com)
[Link with title](https://example.com "Hover tooltip")

![Alt text](image.jpg)
![Alt text](image.jpg "Image title")

---

## Lists

### Unordered
- Item one
- Item two
  - Nested item (indent 2 spaces)
  - Another nested item
- Item three

### Ordered
1. First
2. Second
   1. Nested ordered
   2. Another nested
3. Third

### Task List
- [x] Completed task
- [ ] Incomplete task
- [ ] Another todo

---

## Blockquotes

> This is a blockquote.
> It can span multiple lines.
>
> > Nested blockquote inside.

---

## Code

Inline: `const x = 5`

Fenced block (specify language for syntax highlighting):

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

```python
def greet(name):
    return f"Hello, {name}!"
```

---

## Tables

| Column 1     | Column 2     | Column 3     |
|:-------------|:------------:|-------------:|
| Left-aligned | Centered     | Right-aligned|
| Row 2 Col 1  | Row 2 Col 2  | Row 2 Col 3  |

Alignment set with colons in the separator row:
- `|:---|` = left
- `|:---:|` = center
- `|---:|` = right

---

## Horizontal Rule

Three or more dashes, asterisks, or underscores:

---
***
___

---

## Footnotes

Here is a claim with a footnote.[^1]

[^1]: This is the footnote text, rendered at the bottom.

---

## Emoji (GitHub Flavored Markdown)

:rocket: :tada: :white_check_mark: :warning:

---

## HTML (works in most renderers)

<details>
  <summary>Click to expand</summary>
  Hidden content revealed on click!
</details>

<kbd>Ctrl</kbd> + <kbd>C</kbd> — keyboard key styling

---

## Escaping Special Characters

Use a backslash `\` to escape:
\*not italic\* \`not code\` \# not a heading

---

## Line Breaks & Paragraphs

Paragraphs are separated by a blank line.

For a hard line break,  
add two spaces at the end of a line.

---

## Definition Lists (some renderers)

Term
: Definition of the term

Another Term
: Its definition

---

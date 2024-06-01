export function shortenParagraph(paragraph, wordLimit = 100) {
  const words = paragraph.split(/\s+/);

  if (words.length > wordLimit) {
    const shortened = words.slice(0, wordLimit).join(" ") + "...";
    return shortened;
  }

  return paragraph;
}

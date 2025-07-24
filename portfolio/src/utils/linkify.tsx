export function linkify(text: string | null) {
  if (!text) return null;

  const regex = /\[([^\]]+)\]{([^}]+)}/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let index = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const displayText = match[1];
    const url = match[2];

    parts.push(
      <a
        key={index++}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="!text-gray-700 !underline hover:!text-red-300"
      >
        {displayText}
      </a>,
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

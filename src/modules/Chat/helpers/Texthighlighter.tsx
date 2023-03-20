import React from "react";

interface Props {
  text: string;
  highlightRanges: [number, number][];
}

const TextHighlighter: React.FC<Props> = ({ text, highlightRanges }) => {
  const isHighlighted = (charIndex: number) => {
    for (let i = 0; i < highlightRanges.length; i++) {
      if (charIndex >= highlightRanges[i][0] && charIndex <= highlightRanges[i][1]) {
        return true;
      }
    }
    return false;
  };

  const getHighlightedText = () => {
    let highlightedText = "";
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      const isCharHighlighted = isHighlighted(i);
      if (isCharHighlighted) {
        highlightedText += `<strong class='highlight' >${char}</strong>`;
      } else {
        highlightedText += char;
      }
    }
    return highlightedText;
  };

  return <p  dangerouslySetInnerHTML={{ __html: getHighlightedText() }} />;
};

export default TextHighlighter;
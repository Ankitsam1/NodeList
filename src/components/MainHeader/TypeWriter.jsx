
import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styled from "styled-components";

function TypeWriter({ values }) {
  const [showCursor, setShowCursor] = useState(false);
  const [text] = useTypewriter({
    words: [
      "Work in silence,let your success make the noise",
      "When a man learns to love, he must bear the risk of hatred",
      "Believe it!",
    ],
    loop: {},
    typeSpeed: 250,
    deleteSpeed: 250,
    delaySpeed: 1000,
    onLoopDone: () => setShowCursor(false), // Hide cursor at the end of each loop
  });

  useEffect(() => {
    setShowCursor(true); // Show cursor when typing starts
  }, [text]);

  return (
    <Container>
      {text}
      <CursorComponent>
        <Cursor show={showCursor} />
      </CursorComponent>
    </Container>
  );
}

const Container = styled.p`
  font-weight: 300;
  display: inline-block;
  margin: 0;
`;

const CursorComponent = styled.span`
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  display: inline;
  animation: blink 0.7s steps(44) infinite normal;

  @keyframes blink {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
`;

export default TypeWriter;

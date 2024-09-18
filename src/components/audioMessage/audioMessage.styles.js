import styled from "styled-components";

export const StyledAudioMessage = styled.div`
  max-width: 55%;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
  &.last::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 10px;
    background-color: var(--warning-300);
    z-index: -1;
  }
  &.last:not(.own)::before {
    left: 0;
  }
  &.own.last::before {
    right: 0;
  }
  & img {
    max-width: 100%;
  }
`

export const StyledAudio = styled.audio`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
`
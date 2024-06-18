import styled from "styled-components";

export const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: calc(100% - 15%);
  background-color: var(--text-lighter);
  color: var(--text);
  z-index: 98;
`;

export const StyledUserInfo = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  & img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid var(--text);
    cursor: pointer;
  }
  & h5 {
    font-size: 2rem;
  }
`;

export const StyledStatus = styled.div`
  cursor: pointer;
`;

export const StyledMenuItem = styled.button`
  width: 100%;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover {
    background-color: var(--text);
    color: var(--text-lighter);
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  font-size: 1.7rem;
  padding: 0.7rem;
  color: var(--text-color-lighter);
  background-color: var(--bg-color-darker);
  border-radius: 5px;
`;

export const StyledExit = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

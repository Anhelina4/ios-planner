import styled from "styled-components"

const ButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.size || "auto"};
  width: ${props => props.size || "auto"};
  font-size: ${props => props.fontSize || "var(---text-lg)"};
  padding: var(--p-sm);
  background: transparent;
  border: none;
  color: ${props => props.color || null};
  border-radius: var(--br-lg);
  cursor: pointer;
  font-weight: ${props => props.fontWeight || "var(--text-semibold)"};
  &:hover {
    background: ${props => (props.hovered ? "var(--color-dark-lighten6)" : "none")};
    border-radius: var(--br-lg);
  }
  &:active {
    background: ${props => (props.active ? "var(--color-dark-lighten4)" : "none")};
    border-radius: var(--br-lg);
  }
`
export default ButtonItem

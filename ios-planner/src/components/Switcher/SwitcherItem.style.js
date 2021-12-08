import styled from "styled-components"

export const SwitcherItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-dark-lighten2);
  border-radius: var(--br-xxl);
  padding: var(--p-md) var(--p-lg);
`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor || "var(--color-blue)"};
  border-radius: var(--br-round);
  height: var(--btn-lg);
  width: var(--btn-lg);
  color: var(--color-white);
`
export const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

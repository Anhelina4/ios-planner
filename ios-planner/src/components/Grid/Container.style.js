import styled, { css } from "styled-components"

const ContainerWrapper = styled.div`
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  margin-right: auto;
  margin-left: auto;
  background: orange;

  ${props =>
    props.variant === "container" &&
    css`
      @media (min-width: 576px) {
        max-width: 540px;
      }
      @media (min-width: 768px) {
        max-width: 720px;
      }
      @media (min-width: 992px) {
        max-width: 960px;
      }
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}

  ${props =>
    props.variant === "container-sm" &&
    css`
      @media (min-width: 576px) {
        max-width: 540px;
      }
      @media (min-width: 768px) {
        max-width: 720px;
      }
      @media (min-width: 992px) {
        max-width: 960px;
      }
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}

    ${props =>
    props.variant === "container-md" &&
    css`
      @media (min-width: 768px) {
        max-width: 720px;
      }
      @media (min-width: 992px) {
        max-width: 960px;
      }
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}

    ${props =>
    props.variant === "container-lg" &&
    css`
      @media (min-width: 992px) {
        max-width: 960px;
      }
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}


    ${props =>
    props.variant === "container-xl" &&
    css`
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}

    ${props =>
    props.variant === "container-xxl" &&
    css`
      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}

    ${props =>
    props.variant === "container-fluid" &&
    css`
      width: 100%;
    `}
`

export default ContainerWrapper

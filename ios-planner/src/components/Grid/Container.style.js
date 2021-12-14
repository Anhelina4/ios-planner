import styled, { css } from "styled-components"

// styles
const ContainerWrapper = styled.div`
  height: ${props => props.height};
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  box-sizing: border-box;

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

  ${props =>
    props.variant === "sm" &&
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
    props.variant === "md" &&
    css`
      @media (min-width: 576px) {
        max-width: 100%;
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
    props.variant === "lg" &&
    css`
      @media (min-width: 576px) {
        max-width: 100%;
      }
      @media (min-width: 768px) {
        max-width: 100%;
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
    props.variant === "xl" &&
    css`
      @media (min-width: 576px) {
        max-width: 100%;
      }
      @media (min-width: 992px) {
        max-width: 100%;
      }
      @media (min-width: 1200px) {
        max-width: 100%;
      }
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}

    ${props =>
    props.variant === "xxl" &&
    css`
      @media (min-width: 576px) {
        max-width: 100%;
      }
      @media (min-width: 992px) {
        max-width: 100%;
      }
      @media (min-width: 1200px) {
        max-width: 100%;
      }
      @media (min-width: 1200px) {
        max-width: 100%;
      }
      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}

    ${props =>
    props.variant === "fluid" &&
    css`
      @media (min-width: 576px) {
        max-width: 100%;
      }
      @media (min-width: 992px) {
        max-width: 100%;
      }
      @media (min-width: 1200px) {
        max-width: 100%;
      }
      @media (min-width: 1200px) {
        max-width: 100%;
      }
      width: 100%;
    `}
`

export default ContainerWrapper

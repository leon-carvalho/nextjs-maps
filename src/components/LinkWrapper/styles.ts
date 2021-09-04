import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100; // bigger than leaflet (leaftlet z-index it's 1000)
  cursor: pointer;

  top: var(--medium);
  right: var(--medium);
  color: var(--white);

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`

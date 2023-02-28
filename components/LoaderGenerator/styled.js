import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

export const Container = styled.div`
  display: flex;
  gap: 2em;
`

export const LoaderContainer = styled(Paper)`
  padding: 1em;
`

export const Loader = styled.div`
  --b: 10px;  /* border thickness */
  --n: 10;    /* number of dashes*/
  --g: 10deg; /* gap  between dashes*/
  --c: red;   /* the color */

  @keyframes spin1 {to{transform: rotate(1turn)}}
  @keyframes spin2 {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(.55,.055,.675,.19);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(.215,.61,.355,1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000, var(--c)) content-box;
  mask: repeating-conic-gradient(#0000 0deg, #000 1deg calc(360deg/var(--n) - var(--g) - 1deg),
    #0000     calc(360deg/var(--n) - var(--g)) calc(360deg/var(--n))),
    radial-gradient(farthest-side,#0000 calc(98% - var(--b)),#000 calc(100% - var(--b)));
  mask-composite: intersect;

  animation: spin1 1s infinite steps(var(--n));
`
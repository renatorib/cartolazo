import React from 'react'
import styled, { keyframes } from 'styled-components'

export default ({ size = 40, thickness = 8 }) => (
  <Wrapper>
    <svg
      className="spinner"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="path"
        fill="none"
        strokeWidth={`${thickness}px`}
        strokeLinecap="round"
        cx="50"
        cy="50"
        r={50 - thickness - 1}
      />
    </svg>
  </Wrapper>
)

const duration = 1.6
const offset = 300

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`

const colors = keyframes`
  0%, 100% { stroke: #e3672a; }
  50% { stroke: #cccccc; }
`

const dash = keyframes`
  0% { stroke-dashoffset: ${offset}; }
  50% { stroke-dashoffset: ${offset / 4}; transform: rotate(135deg); }
  100% { stroke-dashoffset: ${offset}; transform:rotate(450deg); }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .spinner {
    animation: ${rotator} ${duration}s linear infinite;
  }

  .path {
    stroke-dasharray: ${offset};
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: ${dash} ${duration}s ease-in-out infinite,
      ${colors} ${parseFloat((duration * 1.5).toFixed(1))}s ease-in-out infinite;
  }
`

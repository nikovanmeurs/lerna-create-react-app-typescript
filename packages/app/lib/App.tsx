import React from 'react';
import styled from 'styled-components/macro';

interface UnstyledAppProps {
  className?: string
  logo?: string
}

export const UnstyledApp: React.FC<UnstyledAppProps> = props => {
  const { className, logo } = props
  return (
    <div className={className}>
      <div className="Header">
        <img src={logo} className="Logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  )
}

export const App = styled(UnstyledApp)`
  text-align: center;
  
  .Header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .Link {
    color: #61dafb;
  }
  
  .Logo {
    animation: Logo--spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }

  @keyframes Logo--spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

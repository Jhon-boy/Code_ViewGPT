import { styled } from '@mui/system';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

export const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

export const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

export const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 90%;
    min-height: 24vh;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'white' ? 'black' : 'white'};
    background: black;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    white-space: pre; /* Mantener el formato del contenido pegado */

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

export const tools = {
  'JavaScript': ['Jasmine', 'Mocha', 'Jest'],
  'Python': ['unittest', 'pytest', 'nose'],
  'Java': ['JUnit', 'TestNG', 'Mockito'],
  'C#': ['NUnit', 'xUnit', 'MS Test', 'Moq'],
  'Ruby': ['RSpec', 'Cucumber', 'Test::Unit'],
  'PHP': ['PHPUnit', 'Codeception', 'SimpleTest'],
  'Go': ['testing', 'gomock', 'testify'],
  'Typescript': ['Jest', 'Mocha', 'Jasmine'],
  'C++': ['Google Test', 'Unity', 'Catch2'],
  'Rust': ['rust-test', 'ctor', 'proptest'],
  'Clojure': ['clojure.test', 'Expectations', 'Midje'],
  'Swift': ['XCTest', 'SwiftCheck', 'Swinject'],
  'Kotlin': ['kotlintest', 'junit5', 'mockk'],
  'Scala': ['ScalaTest', 'specs2', 'ScalaCheck'],
  'Elixir': ['ExUnit', 'StreamData', 'Bypass'],
  'Haskell': ['HUnit', 'QuickCheck', 'hedgehog'], 
  };
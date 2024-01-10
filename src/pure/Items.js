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

 export const dataForAutocomplete = [
  { language: 'JavaScript', tools: ['Jasmine', 'Mocha', 'Jest'] },
  { language: 'Python', tools: ['unittest', 'pytest', 'nose'] },
  { language: 'Java', tools: ['JUnit', 'TestNG', 'Mockito'] },
  { language: 'C#', tools: ['NUnit', 'xUnit', 'MS Test', 'Moq'] },
  { language: 'Ruby', tools: ['RSpec', 'Cucumber', 'Test::Unit'] },
  { language: 'PHP', tools: ['PHPUnit', 'Codeception', 'SimpleTest'] },
  { language: 'Go', tools: ['testing', 'gomock', 'testify'] },
  { language: 'Typescript', tools: ['Jest', 'Mocha', 'Jasmine'] },
  { language: 'C++', tools: ['Google Test', 'Unity', 'Catch2'] },
  { language: 'Rust', tools: ['rust-test', 'ctor', 'proptest'] },
  { language: 'Clojure', tools: ['clojure.test', 'Expectations', 'Midje'] },
  { language: 'Swift', tools: ['XCTest', 'SwiftCheck', 'Swinject'] },
  { language: 'Kotlin', tools: ['kotlintest', 'junit5', 'mockk'] },
  { language: 'Scala', tools: ['ScalaTest', 'specs2', 'ScalaCheck'] },
  { language: 'Elixir', tools: ['ExUnit', 'StreamData', 'Bypass'] },
  { language: 'Haskell', tools: ['HUnit', 'QuickCheck', 'hedgehog'] },
];

export const tooles = [
  { language: 'JavaScript', tools: 'Jasmine' },
  { language: 'JavaScript', tools: 'Mocha' },
  { language: 'JavaScript', tools: 'Jest' },
  { language: 'Python',     tools: 'unittest' },
  { language: 'Python',     tools: 'pytest' },
  { language: 'Python',     tools: 'nose' },
  { language: 'Java',       tools: 'JUnit' },
  { language: 'Java',       tools: 'TestNG' },
  { language: 'Java',       tools: 'Mockito' },
  { language: 'C#', tools: 'NUnit' },
  { language: 'C#', tools: 'xUnit' },
  { language: 'C#', tools: 'MS Test' },
  { language: 'C#', tools: 'Moq' },
  { language: 'Ruby', tools: 'RSpec' },
  { language: 'Ruby', tools: 'Cucumber' },
  { language: 'Ruby', tools: 'Test::Unit' },
  { language: 'PHP', tools: 'PHPUnit' },
  { language: 'PHP', tools: 'Codeception' },
  { language: 'PHP', tools: 'SimpleTest' },
  { language: 'Go', tools: 'testing' },
  { language: 'Go', tools: 'gomock' },
  { language: 'Go', tools: 'testify' },
  { language: 'Typescript', tools: 'Jest' },
  { language: 'Typescript', tools: 'Mocha' },
  { language: 'Typescript', tools: 'Jasmine' },
  { language: 'C++', tools: 'Google Test' },
  { language: 'C++', tools: 'Unity' },
  { language: 'C++', tools: 'Catch2' },
  { language: 'Rust', tools: 'rust-test' },
  { language: 'Rust', tools: 'ctor' },
  { language: 'Rust', tools: 'proptest' },
  { language: 'Clojure', tools: 'clojure.test' },
  { language: 'Clojure', tools: 'Expectations' },
  { language: 'Clojure', tools: 'Midje' },
  { language: 'Swift', tools: 'XCTest' },
  { language: 'Swift', tools: 'SwiftCheck' },
  { language: 'Swift', tools: 'Swinject' },
  { language: 'Kotlin', tools: 'kotlintest' },
  { language: 'Kotlin', tools: 'junit5' },
  { language: 'Kotlin', tools: 'mockk' },
  { language: 'Scala', tools: 'ScalaTest' },
  { language: 'Scala', tools: 'specs2' },
  { language: 'Scala', tools: 'ScalaCheck' },
  { language: 'Elixir', tools: 'ExUnit' },
  { language: 'Elixir', tools: 'StreamData' },
  { language: 'Elixir', tools: 'Bypass' },
  { language: 'Haskell', tools: 'HUnit' },
  { language: 'Haskell', tools: 'QuickCheck' },
  { language: 'Haskell', tools: 'hedgehog' },
];
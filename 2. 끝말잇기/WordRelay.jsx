const React = require('react');
const { useState } = React;

const WordRelay = () => {
  const [word, setWord] = useState('시작');
  // const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = React.useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.dir(e.target[0].value);
    if(word[word.length - 1] === e.target[0].value[0]) {
      setResult("딩동댕!");
      setWord(e.target[0].value);
      e.target[0].value = '';
      inputEl.current.focus();

    }else {
      setResult("땡")
      // setValue('');
      e.target[0].value = '';

      inputEl.current.focus();
    }
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          id='word'
          ref={inputEl}
          // value={value}
          // onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );

};
module.exports = WordRelay;


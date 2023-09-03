import { useState } from 'react';
import { FormSearch } from './SearchFormStyled';

export const SearchForm = ({ onSubmit, nameButton }) => {
  const [text, setText] = useState('');

  const handleChange = evt => {
    setText(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!text.trim()) {
      alert('Please write the name of the movie');
      return;
    }

    onSubmit(text);
    setText('');
  };

  return (
    <FormSearch onSubmit={handleSubmit}>
      <input
        required
        value={text}
        type="text"
        placeholder="Find favorite movie"
        onChange={handleChange}
      />
      <button type="submit">{nameButton}</button>
    </FormSearch>
  );
};

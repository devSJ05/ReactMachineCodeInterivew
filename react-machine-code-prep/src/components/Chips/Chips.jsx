/*
The requirement is to create a chips component that allows users to enter text,
and when the user presses the Enter key, the text is added as a chip.
When the user clicks on the remove button, the chip should be removed.
*/

import { useState } from 'react';

const Chips = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setChips([...chips, inputValue]);
      setInputValue('');
    }
  };
  const handleRemoveChip = (index) => {
    console.log('Remove chip at index:', index);
    const fileredChips = chips.filter((_, i) => i !== index);
    setChips(fileredChips);
    setInputValue('');
  };
  return (
    <div>
      <h1>Chips Component</h1>
      <input
        type='text'
        placeholder='Enter text here'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {chips.map((chip, index) => {
        return (
          <div className='chip-wrapper' key={index}>
            <div className='chip'>{chip}</div>
            <button
              className='remove-chip'
              onClick={() => handleRemoveChip(index)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Chips;

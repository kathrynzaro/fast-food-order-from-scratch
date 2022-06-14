import React, { useState } from 'react';

export default function InstructionsForm({ setInstructions, instructions }) {
  const [instructionInput, setInstructionInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionInput]);
    setInstructionInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      additional instructions?
      <input value={instructionInput} onChange={e => setInstructionInput(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}

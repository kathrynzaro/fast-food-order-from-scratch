import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <div className='instruction-list'>
      <ul>Instructions:  
        {
          instructions.map((instruction, i) => <Instruction instruction={instruction} key={instruction + i} />)
        }
      </ul>
    </div>
  );
}

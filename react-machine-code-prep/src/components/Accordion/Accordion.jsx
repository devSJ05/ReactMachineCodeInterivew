/* 

First excersise: Create a simple Accordion component.
It will basically contain three accordion items.
Each item will have a title and some content.
If you open an item, it will expand to show the content. But the other items will collapse.

*/
import items from './AccordionData';
import '../Accordion/Accordion.css';
import { useState } from 'react';
const Accordion = () => {
  console.log(items);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      {items.map((item, index) => (
        <div className='accordion-item' key={index}>
          <div className='accordion-title'>
            <h3>{item.title}</h3>
            <button
              className='accordion-toggle'
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            >
              Toggle
            </button>
          </div>
          {activeIndex === index && (
            <div className='accordion-content'>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

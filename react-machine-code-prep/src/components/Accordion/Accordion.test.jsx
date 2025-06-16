import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';
import items from './AccordionData';
import { describe, it, expect } from 'vitest';

describe('Accordion Component', () => {
  it('renders all accordion titles', () => {
    render(<Accordion />);
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('toggles content visibility when Toggle button is clicked', () => {
    render(<Accordion />);
    const toggleButtons = screen.getAllByText('Toggle');

    // Initially, content should not be in the DOM
    expect(screen.queryByText(items[0].content)).not.toBeInTheDocument();

    // Click to expand first item
    fireEvent.click(toggleButtons[0]);
    expect(screen.getByText(items[0].content)).toBeInTheDocument();

    // Click again to collapse
    fireEvent.click(toggleButtons[0]);
    expect(screen.queryByText(items[0].content)).not.toBeInTheDocument();
  });

  it('toggles only one item at a time', () => {
    render(<Accordion />);
    const toggleButtons = screen.getAllByText('Toggle');

    // Click every button one by one and verify only its content is visible
    toggleButtons.forEach((btn, index) => {
      fireEvent.click(btn);
      expect(screen.getByText(items[index].content)).toBeInTheDocument();
      items.forEach((item, i) => {
        if (i !== index) {
          expect(screen.queryByText(item.content)).not.toBeInTheDocument();
        }
      });
    });
  });
});

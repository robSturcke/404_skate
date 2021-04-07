import React from 'react';
import { useToggle } from '../context/toolbar_context';
import ToolbarContent from './toolbar_content';

export default function ToolbarWrapper() {
  const [on] = useToggle();

  return (
    <div className={on ? 'toolbar' : 'toolbar toolbar_open'}>
      {on ? null : <ToolbarContent />}
    </div>
  );
}

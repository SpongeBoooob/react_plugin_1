import { Chat } from './component'

import React from 'react';
import { createRoot } from 'react-dom/client';


console.log('Content script works!');
console.log('=========:', document.body);
if (document.body) {
  if (!document.getElementById('app-container111')) {
    let container = document.createElement('div');
    container.id = 'app-container111';
    document.body.appendChild(container);
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<Chat />);
  }
}


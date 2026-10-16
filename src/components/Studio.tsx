import React from 'react';
import { Studio } from 'sanity';
import config from '../../sanity.config';

export default function SanityStudio() {
  return (
    <div
      style={{
        height: '100vh',
        maxHeight: '100dvh',
        overscrollBehavior: 'none',
        WebkitFontSmoothing: 'antialiased',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <Studio config={config} />
    </div>
  );
}

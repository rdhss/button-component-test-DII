import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import {
  ArrowDownTrayIcon,
  TrashIcon,
  CheckCircleIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';

function App() {
  const handleClick = () => {
    // alert('Tombol diklik!');
  };


  return (
    <div className="p-6 space-y-10 text-gray-800">
      <h1 className="text-2xl font-bold">Button Component Demo</h1>

      {/* Variants */}
      <section>
        <h2 className="font-semibold text-lg mb-2">Variants</h2>
        <div className="flex gap-4 flex-wrap">
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Danger" variant="danger" />
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="font-semibold text-lg mb-2">Sizes</h2>
        <div className="flex gap-4 flex-wrap">
          <Button label="Small" size="sm" />
          <Button label="Medium" size="md" />
          <Button label="Large" size="lg" />
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h2 className="font-semibold text-lg mb-2">Icons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button label="Download" icon={<ArrowDownTrayIcon className="w-5 h-5" />} />
          <Button label="Download" icon={<ArrowDownTrayIcon className="w-5 h-5" />} iconPosition='right'/>
        </div>
      </section>

      {/* Tooltip Position */}
      <section>
        <h2 className="font-semibold text-lg mb-2">Tooltip Positions</h2>
        <div className="flex gap-6 flex-wrap">
          <Button label="Top" tooltip="Tooltip di atas" tooltipPosition="top" />
          <Button label="Bottom" tooltip="Tooltip di bawah" tooltipPosition="bottom" />
          <Button label="Left" tooltip="Tooltip di kiri" tooltipPosition="left" />
          <Button label="Right" tooltip="Tooltip di kanan" tooltipPosition="right" />
        </div>
      </section>

    </div>
  );
}

export default App;

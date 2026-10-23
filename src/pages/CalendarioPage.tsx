import React, { useEffect } from 'react';
import Calendario from '../components/Calendario';

export default function CalendarioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Calendario showHero={true} />
    </div>
  );
}

import React, { useState } from 'react';
import ChartComponent from '../component/Chart';

const Interface = () => {
  const [dateStart, setDateStart] = useState('2024-07-01');
  const [dateEnd, setDateEnd] = useState('2024-07-16');
  
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-1/3 p-2 bg-gray-200 font-medium">
        <div className="border rounded-lg p-1 space-y-4">
          <div className="flex space-x-4">
            <p className="text-sm">Patrimoine</p>
            <select className="px-4 bg-white rounded-md text-sm">
              <option value="" className=''>Cresus</option>
            </select>
          </div>

          <div className="flex space-x-4">
            <label className="inline-flex items-center text-sm flex gap-2">
              <input type="checkbox" className="form-checkbox" /> Agregat
            </label>
            <label className="inline-flex items-center text-sm flex gap-2">
              <input type="checkbox" className="form-checkbox" /> Trésorerie
            </label>
            <label className="inline-flex items-center text-sm flex gap-2">
              <input type="checkbox" className="form-checkbox" /> Immobilisations
            </label>
            <label className="inline-flex items-center text-sm flex gap-2">
              <input type="checkbox" className="form-checkbox" /> Obligations
            </label>
          </div>

          <div className="flex align-items-center space-x-2">
            <div className='flex gap-4'>
            De
            <input 
              type="date" 
              value={dateStart} 
              onChange={(e) => setDateStart(e.target.value)} 
              className="border text-sm w-100"
            />
            </div>
            <div className='flex gap-4'>
            A
            <input 
              type="date" 
              value={dateEnd} 
              onChange={(e) => setDateEnd(e.target.value)} 
              className="border text-sm"
            />
            </div>
          </div>

          <div className='flex flex-col'>
          <div className=''>
            <textarea 
              className="w-full h-60 border-slate-500 border-2 p-2 resize-none" 
              readOnly
              value={`!! FLUX IMPOSSIBLES !!
              [2024-07-14][BP Cresus & Cesar–8970e] (Néri, -5000) (Hita, -1000) (Raliz, -7000)`}
            />
          </div>
          <div>
            <textarea 
              className="w-full h-80 border-slate-500 border-2 p-2 resize-none" 
              readOnly
              value={`!! FLUX JOURNALIERS !!
                [2024-07-10][Myriade Fr=78840a] (CAR remb., 78000)\n[2024-07-14][BP Cresus & Cesar–8970e] (Néri, -5000) (Hita, -1000) (Raliz, -7000)\n[2024-07-14][A2–1000a] (Mim remb., 500)\n[2024-07-15][BP Cresus & Cesar–21030e] (Flux Transfert Argent entrant: CCA remb., 30000)\n[2024-07-15][Fr=48840a] (Flux Transfert Argent sortant: CCA remb., -30000)\n[2024-07-16][Myriade Fr=46040a] (SAFIR, -2800)`}
            />
          </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full p-4">
        <div className="border rounded-lg p-4 h-full w-full">
          <ChartComponent/>
        </div>
      </div>
    </div>
  );
}

export default Interface;

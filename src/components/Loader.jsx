import React from 'react'
import { Waveform } from '@uiball/loaders'
export const Loader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000,
    }}>
      <Waveform
        size={80}
        lineWeight={4.5}
        speed={1}
        color="white"
      />
    </div>
  )
}

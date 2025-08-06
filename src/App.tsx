import 'react-spring-bottom-sheet/dist/style.css';
import 'leaflet/dist/leaflet.css';

import { IconMicrophone, IconSearch } from '@tabler/icons-react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { BottomSheet } from 'react-spring-bottom-sheet';
import { TextInput } from '@mantine/core';

export default function MapApp() {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <MapContainer
        center={[42.8746, 74.5698]}
        zoom={13}
        className='w-full h-full z-0'
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      </MapContainer>
      <BottomSheet
        open
        snapPoints={({ maxHeight }) => [120, maxHeight / 2, maxHeight - 100]}
        defaultSnap={({ maxHeight }) => maxHeight / 2}
        blocking={false}
        className='z-10'
      >
        <div className='bg-neutral-200 mx-4 rounded-lg flex flex-col gap-4 p-4'>
          <TextInput
            placeholder='Поиск...'
            radius='md'
            size='md'
            withAsterisk={false}
            leftSection={<IconSearch size={18} />}
            leftSectionPointerEvents='auto'
            rightSection={<IconMicrophone size={18} />}
            rightSectionPointerEvents='auto'
          />
          <div className='h-full bg-neutral-300 rounded-lg p-4'>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-4 h-full'>
              {Array(12)
                .fill(1)
                .map((_, index) => (
                  <div
                    className='border-2 border-solid border-blue-500 w-full h-36 bg-neutral-200 rounded-lg'
                    style={{ animationDelay: `${index * 0.1}s` }}
                    key={index}
                  >
                    <p className='h-full flex items-center justify-center text-xl font-bold'>
                      {index}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}

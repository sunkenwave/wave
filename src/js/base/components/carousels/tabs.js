import React from 'react';
import Tabs from 'react-simpletabs';
import CarouselNewGames from './carouselNewGames';
import CarouselTopGames from './carouselTopGames';

const TabsPanel = Tabs.Panel;

export const TabsContainer = () => (
  <Tabs>
    <TabsPanel title={__('New games')}>
      <CarouselNewGames filter="new" />
    </TabsPanel>
    <TabsPanel title={__('Top 5 games')}>
      <CarouselTopGames filter="top" />
    </TabsPanel>
  </Tabs>
);

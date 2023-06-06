"use client";

import React from 'react'
import * as Tabs from '@radix-ui/react-tabs';

const MenuTabs = () => {
  return (
    <Tabs.Root defaultValue="tab1">
    <Tabs.List aria-label="tabs example">
      <Tabs.Trigger value="tab1">One</Tabs.Trigger>
      <Tabs.Trigger value="tab2">Two</Tabs.Trigger>
      <Tabs.Trigger value="tab3">Three</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">Tab one content</Tabs.Content>
    <Tabs.Content value="tab2">Tab two content</Tabs.Content>
    <Tabs.Content value="tab3">Tab three content</Tabs.Content>
  </Tabs.Root>
  )
}

export default MenuTabs
import {useEffect, useState} from 'react'

// OLD STORE

export type TabType = Record<
   string,
   {
      title: {en: string; fr: string}
      description: {en: string; fr: string}
      Icon?: any
      source?: string
   }
>

export const useTabs = (Tabs: TabType[]) => {
   const defaultTab: TabType = Object.keys(Tabs)[0] // first tab
   const [activeTab, setActiveTab] = useState<TabType>(defaultTab)
   useEffect(() => {
      console.log(Tabs)
      setActiveTab(defaultTab)
   }, [Tabs, defaultTab])
   return {activeTab, setActiveTab}
}

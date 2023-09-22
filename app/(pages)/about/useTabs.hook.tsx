import {useEffect, useState} from 'react'
export type TabType = Record<
   string,
   {
      title: string
      description: any
      Icon?: any
      source?: string
   }
>

export const useTabs = (Tabs: TabType) => {
   const defaultTab = Object.keys(Tabs)[0] // first tab
   const [activeTab, setActiveTab] = useState<keyof typeof Tabs>(defaultTab)
   useEffect(() => {
      console.log(Tabs)
      setActiveTab(defaultTab)
   }, [defaultTab])
   return {activeTab, setActiveTab}
}

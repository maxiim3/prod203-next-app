'use client'

import Script from 'next/script'
import React from 'react'

const GoogleAnalytics = ({ga_id}: {ga_id: string}) => (
   <>
      <Script
         async
         strategy={'lazyOnload'}
         src={`https://www.googletagmanager.com/gtag/js? 
      id=${ga_id}`}></Script>
      <Script
         id="google-analytics"
         dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

      gtag('config', '${ga_id}', { 'anonymize_ip': true });
        `,
         }}></Script>
   </>
)

export default GoogleAnalytics

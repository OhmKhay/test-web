'use client';
import React from "react"
import dynamic from "next/dynamic"
const DynamicOrgPage = dynamic(() => import('../components/ui/OrganizationalChart'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})


const orgPage = () => {
   return <>
        <DynamicOrgPage />
   </>
}

export default orgPage
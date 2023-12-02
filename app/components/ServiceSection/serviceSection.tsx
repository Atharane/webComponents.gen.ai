import React from 'react'
import ServiceCard from '../ServiceCard/serviceCard'

interface Service {
    ServiceTitle: string;
    ServiceDescription:string;
  }

const serviceSection = (props : {s1:Service , s2:Service , s3:Service , s4:Service}) => {
  return (
    <>
        <div className="grid grid-cols-2 gap-4">
        <ServiceCard title={props.s1.ServiceTitle} description={props.s1.ServiceDescription}></ServiceCard>
        <ServiceCard title={props.s2.ServiceTitle} description={props.s2.ServiceDescription}></ServiceCard>
        <ServiceCard title={props.s3.ServiceTitle} description={props.s3.ServiceDescription}></ServiceCard>
        <ServiceCard title={props.s4.ServiceTitle} description={props.s4.ServiceDescription}></ServiceCard>
      </div>
    </>
  )
}

export default serviceSection

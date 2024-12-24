'use client'
import { redirect } from "next/navigation"

const page = ({params}) => {
    if(params.dynamicroutes == 4){
    redirect('/')
  }
  return (
    <div>Dynamic Route {params.dynamicroutes}</div>
  )
}

export default page
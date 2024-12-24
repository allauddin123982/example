'use client'
const Page = ({params}) => {
  console.log(params)
  return (
    <div>About page {params.catchallroutes.map(e => (e+" ") )}</div>
  )
}

export default Page
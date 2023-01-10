import React from "react"
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import CoinCard from "./CoinCard"



const Home   = ()=> {
   const {data,isLoading} =useQuery({queryKey:['test'],queryFn: async ()=>{
    const data =await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=EUR    ').then(res=>res.json())
    return data
}})
  const allElement =data?.coins.map((e:any)=> <CoinCard key={e.id} title={e.name} price={e.price} imgUrl={e.icon}/>)
console.log(data)
if(isLoading){
  return <h3>Data is Loading ...</h3>
}
  return (
<main>
    <h3 className="text-3xl p-4 text-slate-700 font-semibold">All coins </h3>
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10 w-screen items-center mt-10">
       
   {allElement}
    </div>
    </main>
  )
}
export default Home
import React from "react"
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import CoinCard from "./CoinCard"

import { useState } from "react"

const Home   = ()=> {
  const [filterCoins,setFilterCoins]=useState('') 
  
  const {data,isLoading} =useQuery({queryKey:['test'],queryFn: async ()=>{
    const data =await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=EUR    ').then(res=>res.json())
    return data
}})
const FilteredElements = data?.coins.filter((val)=>{
  if(filterCoins ==''){
   return val
  }
  else {
    return val?.name.toLowerCase().includes(filterCoins.toLowerCase());
  }


})
console.log(FilteredElements)
const allElement =FilteredElements?.map((e:any)=> <CoinCard key={e.id} title={e.name} price={e.price} imgUrl={e.icon}/>)

if(isLoading){
  return <h3>Data is Loading ...</h3>
}
console.log(filterCoins)
  return (
<main className="flex flex-col p-10">
  <input  value={filterCoins}
  className=" w-full border-2 p-2 rounded-2xl  mt-2" placeholder="Search for a specific crypto " onChange={(e)=> setFilterCoins(e.target.value)}/>
    <h3 className="text-3xl p-4 text-slate-700 font-semibold">All coins </h3>
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10   items-center mt-10">
       
   {allElement}
    </div>
    </main>
  )
}
export default Home

interface Props{
    title : string
    price : number
    imgUrl :string
}
const CoinCard = ({title,price,imgUrl}:Props) => {
  return (
    <div className="gap-4 flex flex-col bg-blue-800 rounded-md p-3">
        <div className="flex  items-center justify-between   ">
       <h3 className="text-2xl font-semibold text-slate-300">{title}</h3>
      
        <img src={imgUrl} className="h-10 w-10"/>
        </div>
        <p className="font-bold text-slate-200 text-xl ">{price.toFixed(6)} $</p>
    </div>
  )
}
export default CoinCard
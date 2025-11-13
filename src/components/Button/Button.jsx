


export default function Button ({children, ...prop}){

    return (
        <>
    
        <button className="bg-red-600 p-1.5 cursor-pointer rounded  text-white"{...prop} >{children}</button>
        
        </>
    )
}
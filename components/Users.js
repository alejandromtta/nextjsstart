import Link from "next/link"

export default function Users ({user}){
return(
    <ul className="list-group ">
       {user.map((e,i) =>{
           return (<div key={i}>
               <Link href={`/users/${e.id}`}>
               <li className="list-group-item list-group-item-action d-flex  justify-content-between align-items-center"key={i}>
                   <div>
               <h5>{e.first_name.concat(` ${e.last_name}`)}</h5> 
               <p>{e.email}</p>
               </div>
               <img src={e.avatar} alt="{e.first_name}" style={{borderRadius: "100%"}}/>
               </li>
               </Link>
           </div>)
       })}
    </ul>
)
}
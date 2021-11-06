const axios = require('axios');
import Container from "../../components/Container"
import {useRouter} from "next/router"
export default function userProfile({user}){
  if(user){
    return(
        <div>
            <Container>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src={user.avatar} alt={user.first_name} style={{borderRadius:"50%"}}/>
                            </div>
                            <div className="card-body text-center">
                                <h3>
                                    {user.id}. {user.first_name} {user.last_name}
                                </h3>
                                <p>
                                    Email: {user.email}
                                </p>
                                </div>
                        </div>
                    </div>
            </div>
            </Container>
        </div>
    )
  } else {
      return (<div>
           <Container>
          <h2>Something is wrong</h2>
          </Container>
      </div>)
  }
}

userProfile.getInitialProps = async (ctx) =>{
    
let data = await axios.get(`https://reqres.in/api/users/${ctx.query.id}`).catch(e=> [])
if(data){
    data = data?.data?.data
    return {user: data}
} else {
    return []
}
}
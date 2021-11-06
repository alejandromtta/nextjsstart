const axios = require('axios');
import Container from "../components/Container"
import Users from "../components/Users"
export default function Index ({user}){
    console.log(user)
    return (
        <div>
            <Container>

            <h1>Next Test</h1>
            <Users user={user}/>
            </Container>
        </div>
    )
}

Index.getInitialProps = async (ctx) => {
let response = await axios.get("https://reqres.in/api/users?page=2")
response = response.data.data
return {user: response}
}
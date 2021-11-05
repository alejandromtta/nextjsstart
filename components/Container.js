import Navigation from "./Navigation"
import Head from "next/head"
export default function Container (props){
    return( <div>
        <Head>
            <title>Next js</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        </Head>
        <Navigation />
        <div>
            {props.children}
        </div>
        </div> );
}
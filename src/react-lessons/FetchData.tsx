import { useEffect, useState } from "react"

const FetchData = () => {

    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        console.log("is loading")
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json()
            }).then((data) => {
                setUser(data)
                setIsLoading(false)
            })
    }, [])
    console.log("users", user)
    
    return (
        isLoading ? <div> data fetching...</div> :
        <div>
            data fetched!
        </div>
    )
}

export default FetchData

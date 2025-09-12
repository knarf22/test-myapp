import { useEffect, useState } from "react"
import type { User } from "../types/user"

const FetchData = () => {

    const [user, setUser] = useState<User[]>([])
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
        <>
            isLoading ? <div> data fetching...</div> :
            <div>
                data fetched!
            </div>
            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {user.map((i, key) => (
                    <div key={key} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <h1 className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{i.name}</h1>
                        <h3 className="text-lg font-semibold">{i.website}</h3>
                        <h3>{i.email}</h3>
                    </div>
                ))}
            </div>

        </>
    )
}

export default FetchData

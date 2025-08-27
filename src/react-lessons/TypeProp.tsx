
export interface TypePropInterface{
    message : string;
    name : string;
    age : number;
    isLogin : boolean;
}


const TypeProp = ({message, name, age, isLogin} : TypePropInterface) => {
    return (
        <>
            {isLogin 
            ?  
            <div>
                <h1>Hi, {name}! ({age})</h1>
                <p>{message}</p>

            </div>
            :
            <div>
                <h1>Bawal ka dito boy!</h1>
            </div>
            }

        </>
    )
}

export default TypeProp

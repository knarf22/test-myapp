
const Position = () => {
    return (
        <>
            <div className="flex gap-3 h-50">
                <div className="bg-amber-400 border-3 p-3">
                    <h1>Relative</h1>
                    <div
                        style={{
                            position: "relative",
                            top: "20px",
                            left: "20px"
                        }}
                        className="border-1 mt-1">This is relative item</div>
                </div>
                <div className="bg-indigo-400  border-3 p-3 relative">
                    <h1>Absolute</h1>
                    <div
                        style={{
                            position: "absolute",
                            top: "20px"
                        }}
                        className="border-1 mt-1">This is absolute item</div>
                </div>
                <div className="bg-cyan-400 border-3 p-3 relative">
                    <h1>Fixed</h1>
                    <div
                        style={{
                            position : "fixed",
                            top : "20px"
                        }}
                        className="border-1 mt-1">This is fixed item</div>
                </div>
                <div className="bg-green-400 border-3 p-3">
                    <h1>Sticky</h1>
                    <div 
                    style={{
                        position: "sticky",
                        top : "100px"
                    }}
                    className="border-1 mt-1">This is sticky item</div>
                </div>
            </div>
        </>
    )
}

export default Position

function First({info,children}){

    return(
        <>
        <h1>first page:</h1>
        <h2>topic</h2>
        <p>things :{info.datas}</p>
        <p>mobile:{info.outputs}</p>
        {children}
        <p>course</p>
        <ol>
            <li>{info.course1}</li>
            <li>{info.course2}</li>
            <li>{info.course3}</li>
            
        </ol>
        </>
    )
}

export default First;
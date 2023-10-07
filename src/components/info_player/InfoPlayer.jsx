export function InfoPlayer ({sumonerLevel,sumonerName,imgIcon}) {
    return (
        <>
           
            <section className='imgLVL'>
                <img src={imgIcon} alt="" />
                <p>LVL {sumonerLevel}</p>
            </section>
            <h3>{sumonerName}</h3>
           
        </>
    )
}
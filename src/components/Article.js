

export default function Article({title,date,preview}){
    return (
        <article>
            <h3>{title}</h3>
            { !date ?
                 <small>January 1, 1970</small>
                :
                 <small>{date}</small>
                
            }
            <p>{preview}</p>
        </article>
    )
}
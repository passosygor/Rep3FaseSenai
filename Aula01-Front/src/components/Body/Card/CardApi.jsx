import { useEffect, useState } from "react";

import styles from "./Card.module.css"

export const CardApi = ()=>{
    // ESTUDO DE USESTAET NO REACT  
    // let contador = 0
    // const  [contador, setContador] = useState(0)

    // let incrementaValor = ()=>{
    //     // contador++
    //     // console.log(contador);

    //     setContador(prev => prev+1)
    //     console.log(contador);
        
    // }

    const[users, setUsers] = useState([])

    const[filtro, setFiltro] = useState("")

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            const filtrados = data.filter((user) => user.name.toLowerCase().includes(filtro.toLowerCase()))

            setUsers(filtrados)
        })
        console.log(users);
        
    },[filtro])

    return(
        <>
        {/* // <p>{contador}</p>
        // <button onClick={incrementaValor}>Incrementa</button> */}

        <input type="text" placeholder="Filtrar o nome" 
        className="{styles.inputSearch}"
        value={filtro} 
        onChange={(e) => setFiltro(e.target.value)}/>

        <div className={styles.cardContainerApi}>
            {
                users.map((user)=>(
                    <div className={styles.card} key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.address.street}</p>
                    </div>
                ))
            }
        </div>
        </>
    )
}

// export default CardApi
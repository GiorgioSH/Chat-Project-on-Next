import React from "react" 
import Articles from "../components/articles"

const Commentaires = ({ commentaires }) => { 
    
    return(
        <div>
            {/* {commentaires.Content} */}
            {/* <Commentaires article={article}></Commentaires> */}
            
            {commentaires.map((commentaire) => (
            <div key={commentaire.id}> 
            <li>
                {commentaire.Content}
            </li>
            <li>
                {commentaire.Date}
            </li>
        </div>
        )
        )} 

        </div>
      

    ) 

}

export default Commentaires;
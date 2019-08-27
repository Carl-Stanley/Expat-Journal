// Article Page .js
import React, {useState,useEffect} from "react";
import axios from "axios";
import ArticleComment from './ArticleComment'; 



const ArticlePage = () => {

 
  const [data, setData]= useState([]);
  useEffect( () => {   

    axios.get('http://localhost:3001/articles')
    .then( response => {
      
      setData(response.data); 

     // let i = 0;

      //for(i in response.data) {
      //console.log(response.data[i]["comments"])
    //}
    })  
    .catch(error => console.log('You got an error.', error))
  }, []);

 
  return (     
    

    <div className="ArticleComment">          
    
    
    {data.map( key=> (<ArticleComment key={key.id} props={key}/>))}
                   
    </div>     

    
  );
}

export default ArticlePage;


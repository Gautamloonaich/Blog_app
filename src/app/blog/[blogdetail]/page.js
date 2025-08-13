import { Blog_item_details } from "@/component/blog_item_details";

async function getdata_id(id){
    
    let response= await fetch("http://localhost:3000/api_02/blog_api/"+id);
    response=await response.json();
    return (response.result)
}

export  default async function Blogdetail({params}){
    let id=params.blogdetail;
    let data= await getdata_id(id)
    
    return(
        <>
        {
            data.map((item,key)=>{
                return (<div key={key} >
                    <Blog_item_details  title={item.title} pic ={item.image} description={item.description} author_img={item.author_img} author={item.author}/>
                    </div>)
                    
                
            })
        }
        </>
    )
}
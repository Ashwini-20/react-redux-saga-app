import React from "react";

import "../style/style.css";
import $ from "jquery";


class DisplayUsers extends React.Component{
    constructor(props){
        super(props);
    }

    
    render() {
    
    const user = this.props.users
    const arr = []

    for(const u in user){
        arr.push(user[u]);
    }
    

    const data = arr.map((u,key)=>{
        return(    
        <tr key={key}>
        <td>{u.id}</td>
        <td>{u.name}</td>
        <td>{u.username}</td>
        <td>{u.email}</td>
        <td>{u.phone}</td>
        </tr>
    )
    })

    //alert(arr)
    /*arr.map(u=>{
        alert(u.name)
    })*/
    $(document).ready(function(){
        /* $("tr:not(:first-child)").hide()
         $("table tr").each(function(index){
         $(this).delay(index*30000).show(1000)
         })*/
       $("tr:not(:first-child)").each(function(index){
           $(this).css('animation-delay',index*30 + 's');
       })
       
    })
        

      return(
      <div className="d-flex justify-content-center">
        <table className="table table-bordered table-striped">
            <thead className="text-primary">
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            </tr>
          </thead>
          <tbody>
                   {data}
            </tbody>
           </table>
           
             
    </div>)

      }
}

export default DisplayUsers;
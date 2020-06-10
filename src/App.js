
import React, { Component } from 'react'
import {v1 as uuid} from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList';



export default class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  };
  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    })

  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={
      id:this.state.id,
      title:this.state.item
    }
    const updatedItems=[...this.state.items,newItem]
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })
    
  }
  clearList=()=>{
    this.setState({
      items:[]
    })

  }
  handleDelete=(id)=>{
       const DeletedArray=this.state.items.filter((item)=>item.id!==id)
       this.setState({
         items:DeletedArray
       })
  }

  handleEdit=(id)=>{
    const EditedArray=this.state.items.filter((item)=>item.id!==id)
   const selectedItem=this.state.items.find(item=>item.id===id);
   this.setState({
     items:EditedArray,
     item:selectedItem.title,
     id:id,
     editItem:true
   })
  }
  
  render() {
    
    return (
      <div>
         <div className="container">
         <div className="row">
           <div className="col-10 mx-auto col-md-8 mt-5">
             <h3 className='text-capitalize text-center'>todo input</h3>
          <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
          <TodoList items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          />

           </div>
       
       
         </div>
       </div>
      </div>
    )
  }
}

import React, { Component } from 'react' 


class List extends Component {

   

    render() {

        const {taskId, taskValue, taskDone,dataDone, taskDelete} = this.props;
       
       
        
     
        return(
        
        <div className="listTasks">
            
            <p className="tasks"
                id={taskId} 
                data-done={dataDone}>
                {taskValue }
            </p>

            <button onClick={taskDone} style={{display: "flex"}} className="tasksDone">Done</button>
            <button onClick={ () => taskDelete(taskId)} className="tasksDelete" >Delete</button>
            
        </div>    

            

            // onclick={tasksDone}
        );
        
        
    } 
}

export default List






// doneTask = (id) => {

//     const newTasks = this.state.tasks.map(task => {

//         if(id === task.id) {
//             let task = {...task,done:true}
//         } 

//     })

        
//     // }




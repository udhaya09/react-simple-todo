import React, { useState, useEffect } from 'react'

const NewToDoForm = (props) => {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {

        
        if (props.isEdit == true && props.id !== '') {
            console.log("onload id present")
            // Set state values from props when the component is loaded
            setDescription(props.description || ''); // Default to an empty string if props.description is undefined
            setAssigned(props.assigned || ''); // Default to an empty string if props.assigned is undefined
            setId(props.id || ''); // Default to an empty string if props.id is undefined
        }



    }, [props.description, props.assigned, props.id]);

    const submitToDo = () => {

        if (id !== '') {
            updateToDo();

        } else {
            if (description !== '' && assigned !== '') {
                props.addToDo(description, assigned);
                setAssigned("");
                setDescription("");
            }
        }


    }

    const updateToDo = () => {
        if (id !== '' && description !== '' && assigned !== '') {
            props.updateToDo(id, description, assigned);
            setAssigned("");
            setDescription("");
            setId("");
        }

        console.log(id, assigned, description);
    }

    return (
        <div className='mt-5'>
            <form >
                {
                    props.isEdit &&

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">ID</label>
                        <input type="text" className="form-control" disabled onChange={e => setId(e.target.value)} value={id} />

                    </div>
                }
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required onChange={e => setDescription(e.target.value)} value={description} />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">Assigned</label>
                    <input type="text" className="form-control" required onChange={e => setAssigned(e.target.value)} value={assigned} />
                </div>
                <button type='button' className='btn btn-primary' onClick={submitToDo}>

                    {
                        props.isEdit ? "Update ToDo" : "Add new ToDO"
                    }

                </button>
            </form>
        </div>
    )
}

export default NewToDoForm
import React,{useState} from 'react';
import styles from "./style/UploadArea.module.css";
function UploadArea(props) {
    const [source,setSource] = useState([]);
    const [state,setState] = useState({
        files:[],
        statusColor:'gray'
    })

    const onDragEnterHandler = (e) =>{
        e.preventDefault()
        e.stopPropagation()
        setState(s=>({
            ...s,
            files:[],
            statusColor:'blue'
        }))
    }
    const onDragEndHandler = (e) =>{
        e.preventDefault()
        e.stopPropagation()
    }
    const onDragLeaveHandler = (e) =>{
        e.preventDefault()
        e.stopPropagation()
        setState(s=>({
            ...s,
            statusColor:'red'
        }))
    }
    const onDragOverHandler = (e) =>{
        e.preventDefault()
        e.stopPropagation()
            console.log("Drag Over");
            setState(s=>({
                ...s,
                statusColor:'blue'
            }))
    }
    const dropEventHandler = (e) =>{
        e.preventDefault()
        e.stopPropagation()

        console.log("drop event");    
        let dt = e.dataTransfer
        let files = dt.files
        setState(s=>({
            ...s,
            statusColor:'green'
        }))
        handleFiles(files)
    }
    const getRange = (start,end) =>{return Array.from({ length: end-start +1}, (_, i) => start + i)}
    function handleFiles(files) {
        const {length,...rest} = files;
        getRange(0,length - 1).forEach((i)=>uploadFile(rest[i]))
    }
    const isImage = (type) =>{
        return type.includes('image/')
    }
      function uploadFile(file) {
          if(file.type && isImage(file.type)){
            let {files} = state;
            files.push(file)
            setState(s=>({
                ...s,
                files:[...files]
            }))
          }
        
        // let url = 'YOUR URL HERE'
        // let formData = new FormData()
      
        // formData.append('file', file)
      
        // fetch(url, {
        //   method: 'POST',
        //   body: formData
        // })
        // .then(() => { /* Done. Inform the user */ })
        // .catch(() => { /* Error. Inform the user */ })
      }
    const previewHandler = (e) =>{
            setSource([...state.files])
    }
    const changeHandler = ({target:{files}}) =>{
            if(files){
                setState(s=>({
                    ...s,
                    files:[...files]
                }))
            }
    }
    return (
        <div onDragEnter={onDragEnterHandler} onDragOver={onDragOverHandler} onDragEnd={onDragEndHandler} onDragLeave={onDragLeaveHandler} onDrop={dropEventHandler}>
            <div className={styles.uploadContainer} style={{
                borderColor:state.statusColor
            }}>
                <input type="file" multiple={true} onChange={changeHandler} accept="image/*"/>
                <p>Drag your files here or click in this area.</p>
                <span>files droped : {state.files && state.files.length > 0 && state.files.length}</span>
                <button type="submit" disabled={source.length <= 0}>Upload</button>
            </div>
            <div id={styles.gallery}>
                <button onClick={previewHandler}>Preview Here</button>
                {
                    source && source.length > 0 && source.map((e,i)=>{
                            return <img key={i} src={URL.createObjectURL(e)} width="5em" height="5em" />
                    })
                }
            </div>
        </div>
    );
}

export default UploadArea;
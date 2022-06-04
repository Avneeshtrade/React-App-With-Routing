import React from 'react';
import { useHistory } from 'react-router';
import UploadArea from './UploadArea';

function Home() {
    const history = useHistory()
    return <div>
        <h1>Welcome to the world of Geeks!</h1>
        <UploadArea />
        <button onClick={()=>{history.push('/login')}}>Login</button>
    </div>
}

export default Home;

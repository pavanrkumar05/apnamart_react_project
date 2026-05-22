import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ErrorIcon from '@mui/icons-material/Error';

const PageNotFound = () => {

    let navigate = useNavigate()
    let location = useLocation()
    let adminBool = location.pathname.startsWith('/adminportal')
    let userBool = location.pathname.startsWith('/userportal')
    let handleNavigate = () => {
        if(adminBool){
            navigate('/adminportal')
        }
        else if(userBool){
            navigate('/userportal')
        }
        else{
            navigate('/')
        }
    }

    return (
        <>
            <div className="page-not-found">
                <div className="container">
                    <div className="icon">
                        <ErrorIcon />
                    </div>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>
                        Sorry, the page you are looking for does not exist
                        or may have been moved.
                    </p>
                    <button onClick={handleNavigate}>
                        {
                            adminBool
                            ?
                            'Visit Home Page'
                            :
                            userBool
                            ?
                            'Visit Home Page'
                            :
                            'Visit Login Page'
                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default PageNotFound
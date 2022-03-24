import React from 'react'
import "./NavBar.css"
import Button from '@material-ui/core/Button'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const NavBar = () => {
    return (
        <div className="navbar">
            <Button variant="contained" 
                    color='secondary'                      
                    startIcon={<SettingsOutlinedIcon />}
            >
              Parameters
            </Button>
        </div>
    )
}

export default NavBar

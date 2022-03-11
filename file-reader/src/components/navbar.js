import React from 'react';
import Button from './button';

function NavBar(props){

    return (
        <div className='navbar'>
                    <div></div>
                    <h2 className="title">
                        Редактор
                    </h2>
                    <div style={{ width : '160px', display : 'flex', justifyContent : 'flex-end' }} >
                        <Button icon={'/images/save-white.svg'} color={'#52d443'} label={"создать"} />               
                    </div>
            </div>
    )
}
export default NavBar;
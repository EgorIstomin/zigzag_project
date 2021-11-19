import React from 'react';
import logo from './logo.svg';
import '../styles/header.css'

const Header: React.FunctionComponent = () => { 
    return ( 
        <div className="default"> 
           <div className="wrapper">
               <div className="logo">
                   <h1>zigzag</h1>
               </div>
               <div className="menu">
                   <p>Premium</p>
                   <p>Упражения</p>
                   <p>Советы</p>
                   <p>Журнал</p>
               </div>
               <div className="signin">
                   <p>Войти/Зарегистрироваться</p>
               </div>
           </div>
        </div>

    );

}
export default Header;


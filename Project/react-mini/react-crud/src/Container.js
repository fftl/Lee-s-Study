import React, { useState } from 'react';
import './Container.css';

function User({ user }){
    return (
        <div>
            <b>{user.name}</b> <span>({user.tel})</span>
        </div>
    )
}

function Container(){
    const people = [
        { 
            idx: 1,
            name: '이동민',
            tel: '010-4562-0785'
        },
        { 
            idx: 2,
            name: '홍길동',
            tel: '010-1234-5678'
        },
    ]
    const {name, tel} = people;

    return (
        <>
        <div class="">
            <input name="name" value={name}/>
            <input name="tel" value={tel}/>
            <button>save</button>
        </div>
        <div class='viewlist'>
            { people.map( people => (<User user={people} key={people.idx}/>)) }
        </div>
        </>
    )
    
}

export default Container;
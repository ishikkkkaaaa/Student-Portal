import React, { useState } from 'react';
import Editor from '../Editor/Editor';
import style from './Body.module.css';
/* you need to install react feathger for this */
import {ArrowDown} from 'react-feather'

function body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  return (
    <div className={style.container}>
        <p className ={style.heading}>Resume Builder</p>
        <div className = {style.toolbar}>
          <div className={style.colors}>
            {
              colors.map((item)=>
                <span 
                key={item}
                style={{backgroundColor:item}}
                className={style.color}/>
            )}
            <span className={StyleSheet.color} />
            <span className={StyleSheet.color} />
            <span className={StyleSheet.color} />
            <span className={StyleSheet.color} />
            <span className={StyleSheet.color} />
            <span className={StyleSheet.color} />
          </div>
          <button>Download<ArrowDown/></button>
        </div>
        <div className={style.main}>
          <Editor sections={sections}/>
        </div>
    </div>
    );
}

export default body
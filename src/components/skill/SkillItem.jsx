import React from 'react'

const SkillItem = ({name, text}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{text}</div>
      <br/>
    </div>
  )
}

export default SkillItem
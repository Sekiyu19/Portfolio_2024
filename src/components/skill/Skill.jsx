import { motion } from "framer-motion"
import "./skill.scss"
import SkillItem from "./SkillItem"

const Skill = () => {
  return (
    <div className="skill">
      <SkillItem name="C" text="大学の授業を受けました。"/>
      <SkillItem name="C++" text="大学の授業を受けました。競技"/>
      <SkillItem name="Java" text="大学の授業を受けました。また、アルバイトで使用しています。"/>
      <SkillItem name="JavaScript" text="アルバイトで使用しています。また、個人開発で使うことが何度かありました。このサイトを作るにあたり、初めてReactを使いました。"/>
      <SkillItem name="Python" text="研究のシュミレーションで使っていました。"/>
      <SkillItem name="HTML・CSS" text="アルバイトで使用しています。"/>
      <SkillItem name="PostgreSQL" text="アルバイトで使用しています。"/>
    </div>
  )
}

export default Skill
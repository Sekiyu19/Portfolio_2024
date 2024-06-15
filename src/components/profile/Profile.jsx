import { motion } from "framer-motion"
import "./profile.scss"
import selfie from "../../selfie.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <motion.div className="status">
        <motion.div>
          氏名：関口由登
        </motion.div>
        <motion.div>
          大学：会津大学
        </motion.div>
        <motion.div>
          学部：コンピュータ理工学部
        </motion.div>
        <motion.div>
          学科：コンピュータ理工学科
        </motion.div>
        <motion.div>
          研究室：素粒子物理学、超弦理論
        </motion.div>
        <motion.div>
          趣味：アニメ、音楽、Youtube、株式投資
        </motion.div>
      </motion.div>
      <motion.div className="selfie">
        <img src={selfie} alt="自撮り" />
      </motion.div>
      {/* <motion.div className="selfie">
        <img src="selfie_transparent.png" alt="自撮り" />
      </motion.div> */}
    </div>
  )
}

export default Profile
import { motion } from "framer-motion";

export const Main = () => {
  return (
    <div>
        <motion.div 
        className="bg-teal-950 w-48 h-48 rounded-md"
        animate={{ x: [0, 100, 0, 100, 0] }}
        transition={{ ease: "easeOut", duration: 2 }}>

        </motion.div>

    </div>
  )
}

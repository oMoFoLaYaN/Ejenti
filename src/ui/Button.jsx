import PropTypes from 'prop-types';
import { motion } from "framer-motion"

const Button = (props) => {
  const bg = props.bgColor ? "bg-amber-600" : "";
  return (
    <motion.a
    initial={{ opacity: 0.6 }}
    whileHover={{
      scale: 1.1,
      transition: { duration: .05 },
    }}
    whileTap={{ scale: 0.9 }}
    whileInView={{ opacity: 1 }}
      href={props.href}
      title=""
      className={`items-center justify-center
      px-3 py-2 ml-10 text-white text-base font-semibold transition-all 
      duration-200 ${bg} border-amber-600 border-4
      rounded-md lg:inline-flex hover:${bg} focus:${bg}`}
      role="button"
    >
      {props.children}
    </motion.a>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Button;

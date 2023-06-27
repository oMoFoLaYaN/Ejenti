import PropTypes from 'prop-types';

const Button = ({ variant, size, icon, children, ...rest }) => {
  let className = 'flex items-center justify-center px-4 py-2 rounded-md font-medium focus:outline-none';

  switch (size) {
    case 'sm':
      className += ' text-sm';
      break;
    case 'lg':
      className += ' text-lg';
      break;
    default:
      className += ' text-base';
  }

  switch (variant) {
    case 'primary':
      className += ' bg-blue-500 text-white hover:bg-blue-600';
      break;
    case 'secondary':
      className += ' bg-gray-300 text-gray-800 hover:bg-gray-400';
      break;
    case 'outlined':
      className += ' border border-gray-300 text-gray-800 hover:bg-gray-100';
      break;
    case 'icon':
      className += ' bg-transparent text-gray-800 hover:bg-gray-100';
      break;
  }

  return (
    <button className={className} {...rest}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined', 'icon']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
};

export default Button;

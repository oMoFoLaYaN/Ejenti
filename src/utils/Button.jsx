import PropTypes from 'prop-types';

const Button = ({ variant, size, icon, children, ...rest }) => {
  let className = 'flex items-center justify-center px-4 py-2 rounded-md font-medium focus:outline-none';

  if (size === 'sm') {
    className += ' text-sm';
  } else if (size === 'lg') {
    className += ' text-lg';
  } else {
    className += ' text-base';
  }

  if (variant === 'primary') {
    className += ' bg-blue-500 text-white hover:bg-blue-600';
  } else if (variant === 'secondary') {
    className += ' bg-gray-300 text-gray-800 hover:bg-gray-400';
  } else if (variant === 'outlined') {
    className += ' border border-gray-300 text-gray-800 hover:bg-gray-100';
  } else if (variant === 'icon') {
    className += ' bg-transparent text-gray-800 hover:bg-gray-100';
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

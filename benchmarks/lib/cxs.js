const { createElement } = require('react');
const { render } = require('react-dom');
const app = document.createElement('div');

const cxs = require('cxs/component');

module.exports['simple-button-dynamic'] = () => {
  const Button = cxs('button')(props => ({
    fontFamily: 'inherit',
    fontSize: 'inherit',
    display: 'inline-block',
    margin: 0,
    padding: 16,
    border: 0,
    borderRadius: 4,
    color: 'white',
    backgroundColor: props.color,
    appearance: 'none',
    ':hover': {
      backgroundColor: 'black'
    }
  }));

  const button = render(
    createElement(Button, { color: 'tomato' }, 'Hello'),
    app
  );
};

module.exports['simple-button-static'] = () => {
  const Button = cxs('button')({
    fontFamily: 'inherit',
    fontSize: 'inherit',
    display: 'inline-block',
    margin: 0,
    padding: 16,
    border: 0,
    borderRadius: 4,
    color: 'white',
    backgroundColor: 'purple',
    appearance: 'none',
    ':hover': {
      backgroundColor: 'black'
    }
  });

  const button = render(
    createElement(Button, null, 'Hello'),
    app
  );
};

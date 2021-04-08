import './index.scss';
import 'console-log-h5';

document.addEventListener('click', e => {
    const action = e.target.getAttribute('data-action');

    switch (action) {
      case 'mock':
        fetch('/api/getData.json')
          .then(response => response.json())
          .then(json => console.log(json))
          .catch(e => console.error('Error:', e));
        break;
      default:
        break;
    }
  },
  false
);

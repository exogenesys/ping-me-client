import ReactGA from 'react-ga';

function init() {
    ReactGA.initialize('UA-145894771-1', {
        debug: true,
        titleCase: false,
    });

    console.log('init ga')
} 

export default { init }
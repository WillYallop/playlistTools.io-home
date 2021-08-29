import coverMaker from './app.bundle.js';
import axios from 'axios';

function getConfg(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((res) => {
            resolve(res.data);
        })  
        .catch((err) => {
            reject(err);
        })
    });
}

async function initialiseCoverMaker() {
    try {
        let templates = await getConfg('https://playlist-tools-api.herokuapp.com/cover-maker/free/templates/config.json');
        let textTemplates = await getConfg('https://playlist-tools-api.herokuapp.com/cover-maker/free/textTemplates/config.json');
        new coverMaker({
            injectEleId: 'cm_inject',
            openTemplateFromURL: true,
            templates:templates,
            textTemplates: textTemplates,
            getFilesFromURL: (url) => {
                return getConfg(url);
            }
        });
    }
    catch(err) {
        console.error(err);
    }
}
initialiseCoverMaker();
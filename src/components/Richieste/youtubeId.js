/*const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// URL della sezione Tendenze Musica di YouTube
const url = 'https://www.youtube.com/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D';

// Funzione per estrarre gli ID dei video
const fetchYouTubeVideoIds = async () => {
    try {
        // Effettua la richiesta HTTP alla pagina
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
            },
        });

        // Carica il contenuto della pagina in Cheerio
        const $ = cheerio.load(data);

        // Trova tutti i link ai video
        const videoIds = [];
        $('a').each((_, element) => {
            const href = $(element).attr('href');
            if (href && href.startsWith('/watch?v=')) {
                const videoId = href.split('=')[1].split('&')[0];
                if (!videoIds.includes(videoId)) {
                    videoIds.push(videoId);
                }
            }
        });

        return videoIds; // Restituisce l'array di ID
    } catch (error) {
        console.error('Errore durante il fetch dei dati:', error.message);
        return []; // Restituisce un array vuoto in caso di errore
    }
};

// Funzione per salvare gli ID in un file di testo
const saveToFile = (fileName, data) => {
    fs.writeFileSync(fileName, data.join('\n'), 'utf-8');
    console.log(`Salvato ${data.length} ID video in ${fileName}`);
};

// Funzione principale
const main = async () => {
    console.log('Fetching trending YouTube video IDs...');
    const videoIds = await fetchYouTubeVideoIds();

    if (videoIds.length > 0) {
        saveToFile('video_ids.txt', videoIds);
    } else {
        console.log('Nessun ID video trovato.');
    }
};

// Avvia lo script
main();

*/

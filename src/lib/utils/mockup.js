//crea dati locali
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localUpdate from "dayjs/plugin/updateLocale";
import duration from "dayjs/plugin/duration";
import { PUBLIC_YOUTUBE_API_KEY } from "$env/static/public";

dayjs.extend(relativeTime);
dayjs.extend(localUpdate);
dayjs.extend(duration);
const API_KEY = PUBLIC_YOUTUBE_API_KEY;
function formatDiffTime(date) {
	dayjs.updateLocale("it", {
		relativeTime: {
			past: "%s",
			s: "ora",
			m: "1m fa",
			mm: "%dm fa",
			h: "1h fa",
			hh: "%dh fa",
			d: "1d fa",
			dd: "%dd fa",
			M: "1 mese fa",
			MM: "%d mesi fa",
			y: "1 anno fa",
			yy: "%d anni fa",
		},
	});

	const result = dayjs.duration(dayjs(date).diff()).humanize(true);
	dayjs.updateLocale("it", {
		relativeTime: {
			future: "in %s",
			past: "%s fa",
			s: "qualche secondo",
			m: "un minuto",
			mm: "%d minuti",
			h: "un'ora",
			hh: "%d ore",
			d: "un giorno",
			dd: "%d giorni",
			M: "un mese",
			MM: "%d mesi",
			y: "un anno",
			yy: "%d anni",
		},
	});
	return result;
}

// Mock per i post community (la YouTube Data API non li fornisce attualmente)
export async function fetchChannelCommunityPosts(channelId) {
	// Questa funzione è un semplice mock, poiché non è possibile ottenere
	// i post dalla community via API YouTube ufficiali.
	// Potresti sostituire questa parte con una chiamata a un tuo backend.
	return [];
}

export function listaVideo() {
	return ["video1", "video2", "video3"];
}
/*
export async function getViews(videoId, PRIVATE_YOUTUBE_API_KEY) {

}
*/
//chiamata rete
export async function cercaVideo(query, apiKey) {
	try {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q=${encodeURIComponent(
				query
			)}&key=${apiKey}`
		);

		if (!response.ok) {
			throw new Error(`Errore nella chiamata API: ${response.statusText}`);
		}

		const data = await response.json();

		return data.items.map((el) => {
			return {
				...el,

				snippet: {
					...el.snippet,
					publishTime: formatDiffTime(el.snippet.publishTime),
				},
				views: Math.floor(Math.random() * 1000000),
			};
		});

		//passaggio per copia
		//const dataCopy = [...data.items];
	} catch (error) {
		console.error("Errore durante la chiamata API di YouTube:", error);
		return [
			{
				kind: "youtube#searchResult",
				etag: "ds2gsWeT8vqby7UCi7mvP6wvr7Q",
				id: { kind: "youtube#video", videoId: "IIJJyaGUaXg" },
				snippet: {
					publishedAt: "2024-09-26T22:00:13Z",
					channelId: "UC2ScTcowKLzbyCl8ogJ_KKg",
					title: "Laura Pausini - Ciao (Official Video)",
					description:
						"Laura Pausini - Ciao (Official Video) Ascolta Ciao: https://open.spotify.com/track/0jSRhH4iYZSQcL8a46Bvir Segui Laura Pausini: ...",
					thumbnails: [Object],
					channelTitle: "laurapausinitv",
					liveBroadcastContent: "none",
					publishTime: "2 months ago",
				},
				views: 373945,
			},
			{
				kind: "youtube#searchResult",
				etag: "3QbSWRbENzsknZVNm_KVA3PXnww",
				id: { kind: "youtube#video", videoId: "Hu80uDzh8RY" },
				snippet: {
					publishedAt: "2009-10-03T20:20:16Z",
					channelId: "UCSzGEZuqyVK8GAllnbxNlmA",
					title: "Lucio Dalla - Ciao (Videoclip)",
					description:
						'Video Ufficiale di "Ciao” Ascolta la musica di Lucio Dalla: https://SMI.lnk.to/Lucio_Dalla Iscriviti al canale ufficiale di Lucio Dalla su ...',
					thumbnails: [Object],
					channelTitle: "LUCIODALLAVEVO",
					liveBroadcastContent: "none",
					publishTime: "15 years ago",
				},
				views: 509011,
			},
			{
				kind: "youtube#searchResult",
				etag: "It3eJ4rMjDyb9hWXOGs7UPOkzuk",
				id: { kind: "youtube#video", videoId: "Az78mR4fl5I" },
				snippet: {
					publishedAt: "2008-10-06T18:06:19Z",
					channelId: "UCLK6xfArxDL2svyQtLG-fTQ",
					title: "MARIA NAZIONALE &quot;CIAO CIAO&quot;   -video ufficiale-",
					description: 'http://www.myspace.com/tuttomarianazionale MARIA NAZIONALE "CIAO CIAO" -video ufficiale-',
					thumbnails: [Object],
					channelTitle: "Ivan Decorazionisegrete",
					liveBroadcastContent: "none",
					publishTime: "16 years ago",
				},
				views: 286933,
			},
			{
				kind: "youtube#searchResult",
				etag: "GMpnzuiW6ZnYsDXH1YRPgzyPUJk",
				id: { kind: "youtube#video", videoId: "Lqs2oIBFPxI" },
				snippet: {
					publishedAt: "2018-04-11T14:38:29Z",
					channelId: "UCgZTjkoYHy04Hz-M_uv2szA",
					title: "BELLA CIAO (Canzone Originale + Testo)",
					description:
						"Bella Ciao (CANZONE ORIGINALE + TESTO) _ #bellaciao #25aprile2023 #25aprile #liberazione _ Bella Ciao (CANZONE ...",
					thumbnails: [Object],
					channelTitle: "Just Italian Music",
					liveBroadcastContent: "none",
					publishTime: "7 years ago",
				},
				views: 267381,
			},
			{
				kind: "youtube#searchResult",
				etag: "HhjtzcwqN4L412k1Tp9BVKyGTQo",
				id: { kind: "youtube#video", videoId: "iyBs9br_ZOM" },
				snippet: {
					publishedAt: "2024-04-05T04:00:33Z",
					channelId: "UCwhe-6skwaZxLomc-U6Wy1w",
					title: "Bryson Tiller - Ciao! (Visualizer)",
					description:
						"Music video by Bryson Tiller performing Ciao! (Visualizer). (C) 2024 RCA Records, a division of Sony Music Entertainment ...",
					thumbnails: [Object],
					channelTitle: "BrysonTillerVEVO",
					liveBroadcastContent: "none",
					publishTime: "8 months ago",
				},
				views: 434109,
			},
		];
	}
}

export async function fetchVideoDetails(videoId, apiKey) {
	const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&id=${videoId}&key=${apiKey}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Errore nella richiesta: ${response.status}`);
		}
		const data = await response.json();
		if (data.items && data.items.length > 0) {
			return data.items[0]; // Ritorna i dettagli del video
		} else {
			throw new Error("Nessun video trovato con questo ID.");
		}
	} catch (err) {
		console.error(err.message);
		throw err;
	}
}

// Funzione per ottenere i dettagli di un canale
export async function fetchChannelDetails(channelId, apiKey) {
	const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Errore nella richiesta: ${response.status}`);
		}
		const data = await response.json();
		if (data.items && data.items.length > 0) {
			return data.items[0]; // Restituisce i dettagli del canale
		} else {
			throw new Error("Canale non trovato.");
		}
	} catch (error) {
		console.error("Errore nel recupero dei dettagli del canale:", error);
		throw error;
	}
}

// Recupera i video del canale
export async function fetchChannelVideos(channelId, maxResults = 10) {
	const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${API_KEY}`;
	const response = await fetch(url);
	const data = await response.json();
	if (!data.items) {
		throw new Error("Nessun video trovato");
	}
	return data.items;
}

export async function fetchUser(userId) {
	const res = await fetch(`https://dummyjson.com/users/${userId}`);
	if (!res.ok) {
		throw new Error("Utente non trovato");
	}
	return await res.json();
}

export async function caricaCanale(idCanale) {
	try {
		const details = await fetchUser(idCanale);
		user = {
			nome: `${details.firstName} ${details.lastName}`,
			username: details.username,
			immagine: details.image,
			// Non esiste un concetto di iscritti reali in dummyjson, potremmo inventare o lasciare vuoto
			iscritti: `ID Utente: ${details.id}`,
			descrizione: `Email: ${details.email}
Età: ${details.age}
Sesso: ${details.gender}
Azienda: ${details.company.title} (${details.company.department})
Telefono: ${details.phone}
			`,
			id: details.id,
		};
	} catch (error) {
		console.error("Errore nel caricamento dell'utente:", error);
	} finally {
		return user;
	}
}

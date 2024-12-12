import { cercaVideo } from "$lib/utils/mockup.js";
import { searchQuery } from "$lib/store/index.svelte.js";

export const load = async ({ parent }) => {
	let { ytId } = await parent();

	// Recupera la parola cercata dallo store
	let currentSearch = "";
	searchQuery.subscribe((value) => (currentSearch = value));
	searchQuery.subscribe((value) => console.log("Valore del searchQuery:", value));
	// Effettua la ricerca con la parola attuale
	//let videos = await cercaVideo(currentSearch, ytId);
	let videos = [
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
			etag: "wJBeCcWOYuX2okU97OWssrFq69s",
			id: {
				kind: "youtube#video",
				videoId: "ed8A-LTxEkA",
			},
			snippet: {
				publishedAt: "2024-11-30T13:30:58Z",
				channelId: "UCMS43KZykzKDS1EZda7Iu7Q",
				title: "Christmas Jazz Instrumental Music 2025 🎄 Relaxing Christmas Coffee Shop Ambience 🔥 Fireplace Sounds",
				description:
					"Christmas Jazz Instrumental Music 2025 Relaxing Christmas Coffee Shop Ambience Fireplace Sounds Immerse yourself in ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/ed8A-LTxEkA/default_live.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/ed8A-LTxEkA/mqdefault_live.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/ed8A-LTxEkA/hqdefault_live.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Cozy Jazz Music",
				liveBroadcastContent: "live",
				publishTime: "12 days ago",
			},
			views: 277252,
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
			etag: "J8vDh7uf84IpeliwE-VKr30Ya20",
			id: {
				kind: "youtube#video",
				videoId: "cr-EqMzeGNQ",
			},
			snippet: {
				publishedAt: "2024-10-01T11:30:30Z",
				channelId: "UCCDtBHQGboy9eTvNd_KqfTA",
				title: "INFILTRATO DENTRO AL TRAFFICO DI DIAMANTI PIÙ GRANDE DEL MONDO 🇸🇱",
				description:
					"ADOTTA UN BAMBINO A DISTANZA: https://bit.ly/PH-SierraLeone* La Sierra Leone è un paese dove la terra nasconde una ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/cr-EqMzeGNQ/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/cr-EqMzeGNQ/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/cr-EqMzeGNQ/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Progetto Happiness",
				liveBroadcastContent: "none",
				publishTime: "2 months ago",
			},
			views: 933204,
		},
		{
			kind: "youtube#searchResult",
			etag: "KOvaybwaKC80OcX85HN21g3VQEU",
			id: {
				kind: "youtube#video",
				videoId: "6q4QJqFpjkk",
			},
			snippet: {
				publishedAt: "2024-10-21T11:30:07Z",
				channelId: "UCCDtBHQGboy9eTvNd_KqfTA",
				title: "KALASH: l’ultimo matriarcato che combatte i Talebani 🇵🇰",
				description:
					"Nel cuore delle montagne del Pakistan, dove il tempo sembra essersi fermato, c'è un piccolo villaggio che custodisce l'ultimo ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/6q4QJqFpjkk/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/6q4QJqFpjkk/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/6q4QJqFpjkk/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Progetto Happiness",
				liveBroadcastContent: "none",
				publishTime: "2 months ago",
			},
			views: 482136,
		},
		{
			kind: "youtube#searchResult",
			etag: "bQlpMTvZpPGtrYuJWCAkf4HGl_g",
			id: {
				kind: "youtube#video",
				videoId: "aA-48GJMAwY",
			},
			snippet: {
				publishedAt: "2024-11-11T12:30:07Z",
				channelId: "UCCDtBHQGboy9eTvNd_KqfTA",
				title: "VIVERE CON GLI ULTIMI CACCIATORI CON LE AQUILE DELLA MONGOLIA 🇲🇳",
				description:
					"_Offerta Black Friday di NordVPN! Vai su https://nordvpn.com/progettohappiness per ottenere l'esclusivo sconto Black Friday + 4 ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/aA-48GJMAwY/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/aA-48GJMAwY/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/aA-48GJMAwY/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Progetto Happiness",
				liveBroadcastContent: "none",
				publishTime: "a month ago",
			},
			views: 169932,
		},
		{
			kind: "youtube#searchResult",
			etag: "FfFwacWwc7Ay1VepRzNhK5BqAKY",
			id: {
				kind: "youtube#video",
				videoId: "aHR1hJBZslI",
			},
			snippet: {
				publishedAt: "2024-09-23T11:30:32Z",
				channelId: "UCCDtBHQGboy9eTvNd_KqfTA",
				title: "SULLE STRADE PIÙ PERICOLOSE DEL MONDO - I camionisti immortali del Pakistan 🇵🇰",
				description:
					"_Vai su https://nordvpn.com/progettohappiness e acquistando uno dei piani biennali, otterrai uno Sconto Esclusivo + 4 Mesi Extra ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/aHR1hJBZslI/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/aHR1hJBZslI/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/aHR1hJBZslI/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Progetto Happiness",
				liveBroadcastContent: "none",
				publishTime: "3 months ago",
			},
			views: 672987,
		},
		{
			kind: "youtube#searchResult",
			etag: "lKid-WIxDZXO5krA1KjVgnz2U9A",
			id: {
				kind: "youtube#video",
				videoId: "Gn_SjqksZjg",
			},
			snippet: {
				publishedAt: "2024-11-25T13:00:31Z",
				channelId: "UCHi6Q3Z-5oJUC691WLlSntA",
				title: "LA TEORIA PIÙ TERRIFICANTE - dal paradosso di Fermi alla fine dell’umanità",
				description:
					"Fate scorte scegliendo il vostro bundle Small Giants come lo preferite e risparmiate per il Black Friday ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/Gn_SjqksZjg/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/Gn_SjqksZjg/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/Gn_SjqksZjg/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Barbascura eXtra",
				liveBroadcastContent: "none",
				publishTime: "17 days ago",
			},
			views: 594858,
		},
		{
			kind: "youtube#searchResult",
			etag: "gag-gEdF7-xvKa26ZbinVvmQZH0",
			id: {
				kind: "youtube#video",
				videoId: "M14nJXw1GZE",
			},
			snippet: {
				publishedAt: "2024-12-09T13:00:22Z",
				channelId: "UCHi6Q3Z-5oJUC691WLlSntA",
				title: "È solo una teoria",
				description:
					"Clicca sul link https://bit.ly/HELLOBARBASCURA2024 o inserisci il mio codice HELLOBARBASCURA su hellofresh.it per ricevere ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/M14nJXw1GZE/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/M14nJXw1GZE/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/M14nJXw1GZE/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Barbascura eXtra",
				liveBroadcastContent: "none",
				publishTime: "3 days ago",
			},
			views: 712568,
		},
		{
			kind: "youtube#searchResult",
			etag: "Evns63d-cJg9vwmNJDFP9tuVI8o",
			id: {
				kind: "youtube#video",
				videoId: "mLiwcMoMUKU",
			},
			snippet: {
				publishedAt: "2024-12-02T13:00:56Z",
				channelId: "UCHi6Q3Z-5oJUC691WLlSntA",
				title: "La dieta POVERA di chi campa 100 ANNI",
				description:
					"Vai su https://nordvpn.com/barbascuraextra per ottenere l'esclusivo sconto + 4 mesi extra sui piani biennali!",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/mLiwcMoMUKU/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/mLiwcMoMUKU/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/mLiwcMoMUKU/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Barbascura eXtra",
				liveBroadcastContent: "none",
				publishTime: "10 days ago",
			},
			views: 378731,
		},
		{
			kind: "youtube#searchResult",
			etag: "B8WXGvSWzJ5ZIZmdVTx-_9FXQQ8",
			id: {
				kind: "youtube#video",
				videoId: "COyjWM3yKyU",
			},
			snippet: {
				publishedAt: "2024-10-21T12:00:18Z",
				channelId: "UCHi6Q3Z-5oJUC691WLlSntA",
				title: "AVOCADO",
				description:
					"Crea il tuo account sul nuovo Cambly e sblocca l'accesso alle risorse GRATUITE: https://cambly.biz/bxcambio ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/COyjWM3yKyU/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/COyjWM3yKyU/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/COyjWM3yKyU/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Barbascura eXtra",
				liveBroadcastContent: "none",
				publishTime: "2 months ago",
			},
			views: 403154,
		},
	];

	console.log(videos);
	console.log(ytId);

	return {
		ytId,
		videos,
	};
};

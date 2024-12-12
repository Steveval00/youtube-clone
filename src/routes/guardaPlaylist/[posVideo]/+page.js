import { fetchVideoDetails, fetchChannelDetails } from "$lib/utils/mockup.js";
import { isLogged } from "$lib/store/index.svelte.js";
import { PUBLIC_YOUTUBE_API_KEY } from "$env/static/public";

export const ssr = false; // Permette l'uso di localStorage nel load

const apiKey = PUBLIC_YOUTUBE_API_KEY;

function randomDate() {
	const start = new Date(2020, 0, 1);
	const end = new Date();
	const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

async function fetchUser(userId) {
	const res = await fetch(`https://dummyjson.com/users/${userId}`);
	if (!res.ok) {
		throw new Error("Utente non trovato");
	}
	return await res.json();
}

async function fetchComments(page, commentsPerPage, currentUser) {
	const response = await fetch(
		`https://dummyjson.com/posts?limit=${commentsPerPage}&skip=${(page - 1) * commentsPerPage}`
	);
	const data = await response.json();

	const commentsWithUserInfo = await Promise.all(
		data.posts.map(async (post) => {
			const user = await fetchUser(post.userId);
			return {
				id: post.id,
				userId: post.userId,
				username: user.username || `User${post.userId}`,
				timeAgo: randomDate(),
				commentText: post.body,
				likes: post.reactions?.likes || 0,
				replies: Math.floor(Math.random() * 10),
				profilePicture: user?.image || `https://via.placeholder.com/40?text=U${post.userId}`,
				isUserComment: user.username === currentUser,
			};
		})
	);

	return commentsWithUserInfo;
}

export async function load({ params }) {
	const pos = Number(params.posVideo);
	console.log("Load chiamato con pos:", pos);

	const videoPiaciuti = JSON.parse(localStorage.getItem("videoPiaciuti")) || [];
	const iscrizioni = JSON.parse(localStorage.getItem("iscrizioni")) || [];
	const currentUser = JSON.parse(localStorage.getItem("user"))?.username || "Guest";
	const videoId = videoPiaciuti[pos - 1];

	if (!videoId) {
		console.log("Nessun video trovato a questa posizione:", pos, videoPiaciuti);
	}

	const userLogged = isLogged() !== undefined;
	const inPlaylist = userLogged && videoPiaciuti.includes(videoId);

	const videoDetails = await fetchVideoDetails(videoId, apiKey);
	const channelId = videoDetails.snippet.channelId;
	const channelDetails = await fetchChannelDetails(channelId, apiKey);

	const isSubscribed = iscrizioni.includes(channelId);

	const commentsPerPage = 20;
	const currentPage = 1;
	const comments = await fetchComments(currentPage, commentsPerPage, currentUser);

	return {
		pos,
		videoId,
		videoDetails,
		channelDetails,
		isSubscribed,
		isUserLogged: userLogged,
		inPlaylist,
		comments,
		currentUser,
		commentsPerPage,
		currentPage,
		iscrizioni,
		videoPiaciuti,
	};
}

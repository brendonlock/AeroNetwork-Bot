<template>
	<div class="bg-discord-blurple-500 py-20">
		<div class="max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12">
			<Logo class="filter drop-shadow-lg my-6" />
			<InstallButton />
		</div>
	</div>

	<div
		class="
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			px-6
			mx-auto
			pb-8
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
		"
	>
		<div class="col-span-full">
			<h2>About AeroNetwork</h2>
			<p>
				AeroNetwork Bot originally created for the AeroNetwork Minecraft 
				<a href="https://discord.com/invite/aBzWkd7AGc" target="_blank" rel="noopener"
					>Discord Server <heroicons-outline-external-link class="h-5 w-5 inline-block mb-1" aria-hidden="true"
				/></a>
				is a bot, designed to level up your server through Moderation, Giveaways and more! Visit the main
				<a href="https://buy.aeronetwork.me/" target="_blank" rel="noopener"
					>Website<heroicons-outline-external-link class="h-5 w-5 inline-block mb-1" aria-hidden="true"
				/></a>
				Add more text here later on!
			</p>
			<p>
				And here!
			</p>
		</div>
		<div>
			<h2>Why?</h2>
			<ul>
				<li>Advanced Moderation</li>
				<li>Giveaways</li>
				<li>Economy</li>
				<li>And More!</li>
			</ul>
		</div>
		<div>
			<h2>Statistics</h2>
			<Stats />
			<p class="text-center">... and growing!</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useStore } from '~/store';
import MainSource from '~/data/MainSource';

const store = useStore();

const docs = computed(() => store.state.docs);

if (!docs.value) {
	void store.dispatch('fetchDocs', { inputSource: MainSource });
	void store.dispatch('fetchTags', { currentSource: MainSource });
}
</script>

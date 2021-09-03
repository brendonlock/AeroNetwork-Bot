<template>
	<code class="text-gray-200 bg-discord-blurple-560 p-4 md:text-lg mx-auto rounded-md shadow flex items-center"
		><span class="hover:text-white mr-2">Add AeroNetwork Bot to your server!</span>
		<button ref="copyButton" class="focus:outline-none" aria-label="Copy install command">
			<heroicons-outline-clipboard-copy
				v-if="!copied"
				class="inline-block fill-current text-gray-200 cursor-pointer hover:text-white mb-1"
				aria-hidden="true"
				@click="copyInstallCmd"
			/>
			<heroicons-outline-clipboard-check
				v-else
				class="inline-block fill-current text-discord-green-500 cursor-pointer mb-1"
				aria-hidden="true"
				@click="copyInstallCmd"
			/>
		</button>
	</code>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTippy } from 'vue-tippy';
import debounce from 'lodash/debounce';

const copyButton = ref();
const copied = ref(false);
const resetCopied = debounce((hide: () => void) => {
	hide();
	copied.value = false;
}, 1000);

const { show: showTooltip, hide: hideTooltip } = useTippy(copyButton, {
	theme: 'discord',
	content: 'Copied Invite Link!',
	trigger: 'manual',
	hideOnClick: false,
});

const copyInstallCmd = async () => {
	try {
		await window.open('https://discord.com/api/oauth2/authorize?client_id=826056854462660610&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fredirect&scope=bot')//navigator.clipboard.writeText('https://discord.com/api/oauth2/authorize?client_id=826056854462660610&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fredirect&scope=bot');
		showTooltip();
	} catch {}

	copied.value = true;
	resetCopied(hideTooltip);
};
</script>

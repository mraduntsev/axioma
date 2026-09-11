export function createContactForm() {
	let sent = $state(false);

	function submit(event: SubmitEvent) {
		event.preventDefault();
		sent = true;
	}

	function reset() {
		sent = false;
	}

	return {
		get sent() {
			return sent;
		},
		submit,
		reset
	};
}

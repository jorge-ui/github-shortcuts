
(() => {
	const keydownListener = (ev: KeyboardEvent) => {
		if (ev.shiftKey && ev.code === "KeyW") {
			alert("done")
		}
	};

	window.addEventListener("keydown", keydownListener);
})();
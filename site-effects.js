document.addEventListener("DOMContentLoaded", () => {
	setupNavHoverEffects();
	setupFormFocusEffects();
});

function setupNavHoverEffects() {
	const nav = document.querySelector(".top_nav_bar");

	if (!nav) {
		return;
	}

	const navButtons = nav.querySelectorAll(
		".top_nav_bar_button, .top_nav_bar_button_alt, .top_nav_bar_button_alt_closed"
	);

	navButtons.forEach((button) => {
		button.addEventListener("mouseover", () => {
			document.body.classList.add("nav-hover-active");
		});

		button.addEventListener("mouseout", () => {
			document.body.classList.remove("nav-hover-active");
		});
	});
}

function setupFormFocusEffects() {
	const formFields = document.querySelectorAll(".mailform input, .mailform textarea");

	if (!formFields.length) {
		return;
	}

	formFields.forEach((field) => {
		field.addEventListener("focus", () => {
			document.body.classList.add("form-focus-active");
			field.classList.add("field-focused");
		});

		field.addEventListener("blur", () => {
			field.classList.remove("field-focused");

			const stillFocusedInForm = Array.from(formFields).some(
				(element) => element === document.activeElement
			);

			if (!stillFocusedInForm) {
				document.body.classList.remove("form-focus-active");
			}
		});
	});
}
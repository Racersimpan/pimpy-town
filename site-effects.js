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
			button.classList.add("nav-hovered");
		});

		button.addEventListener("mouseout", () => {
			button.classList.remove("nav-hovered");
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
			field.classList.add("field-focused");
		});

		field.addEventListener("blur", () => {
			field.classList.remove("field-focused");
		});
	});
}
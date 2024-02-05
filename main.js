const passwordInput = document.querySelector(".passwordBox input"),
	copyIcon = document.querySelector(".passwordBox .copyIcon"),
	rangeInput = document.querySelector(".lengthBox input"),
	sliderNumber = document.querySelector(".lengthBox .sliderNumber"),
	genPasswordButton = document.querySelector(".generatePassword");

let allChars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()+=:;'{}[]<,>.?/";
const generatePassword = () => {
	let newPass = "";

	for (let i = 0; i < rangeInput.value; i++) {
		let ranNum = Math.floor(Math.random() * allChars.length);
		newPass += allChars[ranNum];
	}
	passwordInput.value = newPass;
	copyIcon.classList.replace("uil-file-check-alt", "uil-copy");
};
rangeInput.addEventListener("input", () => {
	sliderNumber.innerText = rangeInput.value;
	generatePassword();
});

genPasswordButton.addEventListener("click", generatePassword);

copyIcon.addEventListener("click", () => {
	navigator.clipboard.writeText(passwordInput.value);
	copyIcon.classList.replace("uil-copy", "uil-file-check-alt");
});

<template>
	<div class="container">
		<div class="flexbabe">
			<div class="row section1">
				<div class="moreresp five columns text">
					<h1>Safar.</h1>
					<p>
						A new way to travel the Delhi metro during the pandemic. Check out
						our app for more dynamic content.
					</p>
					<div class="block noselect">
						<a href="#" download="Cura">
							<button disabled>Coming soon</button>
						</a>
						<router-link to="/about" class="more">
							Learn more &rarr;
						</router-link>
					</div>
				</div>
				<div class="one columns nvm">
					<br />
				</div>
				<div class="moreresp six columns">
					<div class="nvm">
						<br />
						<br />
					</div>
					<img
						src="@/assets/safarweb.png"
						alt
						class="floating mockup"
						draggable="false"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
}
</script>

<style scoped>
.mockup {
	width: 100%;
}

/* Animation */
.floating {
	animation-name: floating;
	animation-duration: 3s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
}

@keyframes floating {
	from {
		transform: translate(0, 0px);
	}
	50% {
		transform: translate(0, 10px);
	}
	to {
		transform: translate(0, -0px);
	}
}

.mock {
	width: 50%;
}
.flexbabe {
	height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.row {
	display: flex;
	align-items: center;
}
button {
	background: #1961fb;
	color: #fff;
	border: none;
	font-family: 'raleway';
}
button:hover {
	background: #1961fb !important;
	color: #fff;
}
/* button:active {
  color: #fff;
} */
a {
	color: #1961fb;
	text-decoration: none;
}
a:hover {
	color: #103ea0;
}
.more {
	margin-left: 1.5em;
}
@media (max-width: 750px) {
	.moreresp.five.columns,
	.moreresp.six.columns {
		width: 100% !important;
	}
	.nvm {
		display: none;
	}
}
@media (max-width: 550px) {
	.row {
		flex-direction: column;
	}
	.text {
		margin-bottom: 2em;
	}
	.mockup {
		margin-left: 1em;
		overflow-x: hidden;
	}
	.flexbabe {
		height: auto;
		margin-top: 2em;
	}
}
</style>

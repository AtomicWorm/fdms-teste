<template>
	<div>
		<TopHeader></TopHeader>
		<div id="app">
			<div class="card">

            </div>
		</div>
	</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import TopHeader from "./components/TopHeader.vue";

export default{
	name: "App",
	components: { TopHeader }
};
</script>

<style>
#header{
	font-family: Avenir, Helvetica, Arial, sans-serif;
	background-color: #2c3e50;
	text-align: center;
	color: white;
	padding-top: 30px;
	padding-bottom: 10px;
}
#app{
	font-family: Avenir, Helvetica, Arial, sans-serif;
	background-color: #2c3e50;
	text-align: left;
	padding-top: 30px;
	padding-bottom: 211px;
	padding-left: 500px;
	padding-right: 500px;
}
</style>

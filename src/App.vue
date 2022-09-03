<template>
	<div>
		<TopHeader></TopHeader>
		<div id="app">
			<div class="row">
				<div class="card">
					<div class="card-body">
						<h5>ID do Pedido:</h5>
						<div class="input-group">
							<input class="form-control" type="number" placeholder="Digite o ID">
						</div>
						<br/>							
						<h5>Nome do Cliente:</h5>
						<div class="input-group">
							<input class="form-control" type="text" placeholder="Digite o nome">
						</div>
						<br/>
						<h5>Descrição do Pedido:</h5>
						<div class="input-group">
							<textarea class="form-control" rows="5" placeholder="Digite uma descrição"></textarea>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="card">
					<div class="card-body">
						<h5>Buscar pedido no banco de dados:</h5>
						<div class="input-group">
							<input class="form-control" type="number" placeholder="ID do pedido">
							<button class="btn btn-primary">
								<span>Buscar</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div id="buttons" class="row">
				<div class="card">
					<div class="card-body">
						<div class="d-grid gap-2 d-md-flex justify-content-md-center">
							<button class="btn btn-success" type="button">Registrar novo pedido</button>
							<button class="btn btn-primary" type="button">Editar pedido existente</button>
							<button class="btn btn-danger" type="button">Apagar pedido existente</button>
						</div>						
					</div>
				</div>
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

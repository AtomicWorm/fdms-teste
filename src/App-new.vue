<template>
	<div>
		<TopHeader></TopHeader>
		<div id="app">
			<div class="card">
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							<div class="row">
								<div class="col-1">ID:</div>
								<div class="col-3">Cliente:</div>
								<div class="col">Descrição:</div>
								<div class="col-1">Ações:</div>
							</div>
						</li>
						<li class="list-group-item list-group-item-action list-group-item-light">
							<div class="row">
								<div class="col-1">1</div>
								<div class="col-3">Jurisclelson</div>
								<div class="col">Pastel de frango</div>
								<div class="col-1">
									<button class="btn btn-info border"><span class="fa fa-edit"></span></button>
									<button class="btn btn-info border"><span class="fa fa-trash"></span></button>
								</div>
							</div>
						</li>
						<li class="list-group-item list-group-item-action list-group-item-light" v-for="pedido in pedidos" v-bind:key="pedido">
							<div class="row">
								<div class="col-1">{{pedido.id}}</div>
								<div class="col-3">{{pedido.cliente}}</div>
								<div class="col">{{pedido.desc}}</div>
								<div class="col-1">
									<button class="btn btn-info border" v-on:click="editOrder()"><span class="fa fa-edit"></span></button>
									<button class="btn btn-info border" v-on:click="deleteOrder()"><span class="fa fa-trash"></span></button>
								</div>
							</div>
						</li>
					</ul>
				</div>
            </div>
			<div class="card">
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							<div class="row">
								<div class="col-1">
									<div class="input-group">
										<input class="form-control" type="number" placeholder="ID...">
									</div>
								</div>
								<div class="col-3">
									<div class="input-group">
										<input class="form-control" type="text" placeholder="Nome do cliente...">
									</div>
								</div>
								<div class="col">
									<div class="input-group">
										<input class="form-control" type="textarea" placeholder="Descrição...">
									</div>
								</div>
								<div class="col-1">
									<button class="btn btn-info border" v-on:click="addOrder()"><span class="fa fa-plus"></span></button>
									<button class="btn btn-info border" v-on:click="findOrder()"><span class="fa fa-search"></span></button>
								</div>
							</div>
						</li>
					</ul>
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
	components: {
		TopHeader
	}
};
</script>

<style>
#app{
	font-family: Avenir, Helvetica, Arial, sans-serif;
	background-color: #2c3e50;
	text-align: left;
	padding-top: 30px;
	padding-bottom: 211px;
	padding-left: 150px;
	padding-right: 150px;
}
</style>

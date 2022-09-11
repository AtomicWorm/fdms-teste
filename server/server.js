const {ApolloServer} = require("apollo-server");
const typeDefs = `
    type Item{
        id: Int
        clientName: String
        description: String
    }
    type Query{
        items: [Item]
    }
`;
const items = [
	{id: 1, clientName: "General Dynamics", description: "M1A2 SEP"},
	{id: 2, clientName: "Krauss-Maffei Wegmann", description: "Leopard 2A7"},
	{id: 3, clientName: "UralVagonZavod", description: "T-90M"}
];

const resolvers = {
	Query:{
		items(){
			return items;
		},
		itemsFilter(_, args){
			return items.filter(item => item.id === args.id);
		}
	}
};

let port = process.env.PORT;
if (port == null || port == "") {
	port = 4000;
}
const server = new ApolloServer({typeDefs, resolvers});
server.listen(port, () => {
	console.log(`Servidor ouvindo na porta ${port}`);
});

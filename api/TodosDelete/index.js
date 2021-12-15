const CosmosClient = require('@azure/cosmos').CosmosClient;

module.exports = async function (context, req) {
    const id = context.bindingData.id; // パスからid取ってくる

    const client = new CosmosClient(process.env['CosmosDBConnection']);
    const database = client.database('SvelteTest');
    const container = database.container('Todos');
    const partitionKey = 'todos'; // 今回は決め打ち

    await container.item(id, partitionKey).delete();

    context.res = { status: 204 };
}
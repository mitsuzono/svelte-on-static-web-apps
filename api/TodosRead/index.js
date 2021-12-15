module.exports = async function (context, req) {
    context.res.json(context.bindings.documents);
}

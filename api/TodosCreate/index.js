const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {
    // 簡易バリデーション
    if (!req.body.description || Object.prototype.toString.call(req.body.done) !== '[object Boolean]') {
        context.res = { status: 400 };
        context.done(); // 明示的に終了
    }

    // レスポンスに含めたいのでここで採番
    req.body.id = uuidv4();

    // 出力バインドにリクエストBodyを渡す
    context.bindings.todoDocument = req.body;
    
    // idを返す
    context.res = {
        status: 200,
        body: {id: req.body.id}
    };
};
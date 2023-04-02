const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('*', (req, res) => {
  console.log(`请求方法：${req.method}`);
  console.log(`请求路径：${req.path}`);
  console.log(`请求参数：`, req.query);
  console.log(`请求体：`, req.body);
  console.log(`请求头部：`, req.headers);

  res.status(200).send('请求信息已打印到控制台');
});

const port = 3000;
app.listen(port, () => {
  console.log(`服务已启动，监听端口 ${port}`);
});

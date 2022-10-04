# ScrollBoard.js

[原作者](https://github.com/qinshaoxuan/ScrollBoard.js)
[二次修改](https://github.com/xzm2000/ScrollBoard.js)

（我的）展示页面：[Demo](http://xiaofan7.cn/)

## 注意
- 为了防止榜单显示错误，自动把用户名中的`.`和` `改为`_`


## 使用方法

### example
```HTML
<head>
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/scrollboard.css">
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/scrollboard.js"></script>
</head>
 
<body>
    <script type="text/javascript">
    var board = new Board(
        8,
        new Array(4, 4, 4),
        StringToDate("14/7/2021 09:10:00"),
        StringToDate("14/7/2021 11:00:00")
    );
    board.showInitBoard();
    $('html').keydown(function(e) {
        if (e.keyCode == 13) {
            board.keydown();
        }
    });
    </script>
</body>
```

由于展示效果需要，请使用空页面

`new Board(problemCount, medalCounts, startTime, freezeBoardTime)`Borad类构造方法：参数依次为题目数、奖牌数数组（分别为金银铜）、比赛开始时间、比赛封榜时间

`Board.showInitBoard()`方法：展示封榜时榜的状态

`Board.keydown()`方法：滚榜时的一步操作，即更新一个队的一个未知结果

`StringToDate(s)` 方法："d/m/y hh:mm:ss"格式字符串转Date对象

### 获取数据

需要查cpid的最小值
JS文件中的`getSubmitList()`和`getTeamList()`方法分别为获取提交数据和获取队伍数据，请根据后台JSON数据格式自行修改，代码内有详细的注释说明


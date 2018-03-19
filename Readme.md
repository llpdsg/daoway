# Readme
##day01
###项目进度
	主页头部
		1）运用flex技术，完成布局
		2）使用less预编译
		3）完成首页头部各种显示效果
		4）标签激活后显示颜色改变功能实现
###实用技术
	1.外部设置div居中后帮助布局
	2.：hover、：active等伪类，所有选择器都可以使用
	3.设置完目标样式后，单独设置transition选择控制样式过渡
	4.:not(选择器)反选
	5.jQuery中addclass()和removeclass()方法

##day02
###项目进度
	轮播
		1）轮播页面布局，使用定位
		2）小圆点重叠两层，只控制一层的显示与隐藏，从而达到颜色变化效果
		3)轮播图片淡入淡出效果和小圆点颜色变化效果，通过增删类名控制样式加定时器实现
		4）二级菜单页面布局使用flex和定位
		5）交互样式通过增删类名控制
###实用技术
	1.增删类名控制样式
	2.cursor: pointer添加小手样式
	3.letter-spacing文本间距
	4.for或while不能无限循环
	5.fadetoggle淡入淡出切换
##day03 04
###项目进度
	主页
		1）完成主页布局
		2）完成js交互
	后端
		1）完成数据库、服务器搭建
		2）完成art-template模板编写，并完成渲染
###实用技术
	渲染模板页面出不来：
		1.文件名一定要是 index开头
		2.请求数据的库名和集合名是否正确
		3.数据库是否启动
		4.模板id值是否对应
		5.渲染位置不对，标识一定不要写错，写在父级标签里面

	如果渲染后样式出现问题
		1.渲染容器的类名是否和之前匹配
		2.布局是否有问题
		3.标签是否被删


	发送请求不成功（返回空数组）
		1.把集合名限制（ collection +集合名）
		2.集合名匹配不上（创建集合名尽量加s
		3.集合创建在不正确的库名下
##day05
###项目进度
	1）全部页面数据渲染
	2）评论列表分页交互
###实用技术
	1. 限制每页显示数据条数
	  const page = req.query.page
	  commentModel.find({}).limit(10).skip((page - 1) * 10).exec(function (err, list) {
	    if (!err) {
	      res.send({data: list})
	    }
	  })
	  渲染某页
	  $.get('/getComment?page='+ page, function (data) {
      	$('#ttt').html(template('temp7', {list:data}))
	  })
	2. .replace+a  相邻兄弟选择器
	   $(".act").prev()  前面相邻兄弟标签
	3. each($('.num')[index].className= 'xxx')  修改属性
	4. <a href="javascript:void(0)" class="num">2</a>  设置href属性不跳转